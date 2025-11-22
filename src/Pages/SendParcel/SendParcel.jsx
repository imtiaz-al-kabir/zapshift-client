import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const SendParcel = () => {
  const {
    register,
    handleSubmit,

    control,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();
  const { user } = useAuth();
  const duplicateRegions = serviceCenters.map((c) => c.region);
  const regions = [...new Set(duplicateRegions)];

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  const warehouseByRegion = (region) => {
    const regionWarehouse = serviceCenters.filter((d) => d.region === region);
    const districts = regionWarehouse.map((c) => c.district);
    return districts;
  };

  const handleParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderRegion === data.receiverRegion;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    Swal.fire({
      title: "Agree with the Cost?",
      text: `you will Charged ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Agree!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          console.log(res.data);
        });
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      <form
        onSubmit={handleSubmit(handleParcel)}
        className="bg-white w-full max-w-6xl p-8 rounded-2xl shadow-md"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Parcel</h1>

        <hr className="mb-6" />

        {/* Parcel Type */}
        <div>
          <h2 className="text-lg font-semibold mb-3">
            Enter your parcel details
          </h2>
          <div className="flex items-center gap-6 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                {...register("parcelType")}
                type="radio"
                value="document"
                className="w-4 h-4 "
                defaultChecked
              />
              <span>Document</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                {...register("parcelType")}
                type="radio"
                value="non-document"
                className="w-4 h-4"
              />
              <span>Not-Document</span>
            </label>
          </div>

          {/* Parcel Name & Weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <label className="text-sm font-medium">Parcel Name</label>
              <input
                type="text"
                {...register("parcelName")}
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="Parcel Name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Parcel Weight (KG)</label>
              <input
                type="text"
                {...register("parcelWeight")}
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="Parcel Weight (KG)"
              />
            </div>
          </div>
        </div>

        {/* Sender & Receiver Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Sender */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sender Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium">Sender Name</label>
                <input
                  {...register("senderName")}
                  type="text"
                  className="w-full mt-1 p-3 border rounded-md"
                  placeholder="Sender Name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Your Region</label>
                <select
                  className="w-full mt-1 p-3 border rounded-md"
                  {...register("senderRegion")}
                  defaultValue="Select your region"
                >
                  <option disabled={true}>Select Your Region</option>
                  {regions.map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  {...register("senderEmailAddress")}
                  defaultValue={user?.email}
                  className="w-full mt-1 p-3 border rounded-md"
                  placeholder="Address"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Sender Contact No</label>
                <input
                  type="text"
                  {...register("senderContact")}
                  className="w-full mt-1 p-3 border rounded-md"
                  placeholder="Sender Contact No"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium">
                Sender Pickup Wire house
              </label>
              <select
                className="w-full mt-1 p-3 border rounded-md"
                {...register("senderWarehouse")}
                defaultValue="Select Wire house"
              >
                <option disabled={true}> Select Wire house</option>

                {warehouseByRegion(senderRegion).map((r, i) => (
                  <option value={r} key={i}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Sender Address</label>
              <textarea
                {...register("senderAddress")}
                className="w-full mt-1 p-3 border rounded-md h-24"
                placeholder="sender Address"
              ></textarea>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Receiver Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium">Receiver Name</label>
                <input
                  type="text"
                  {...register("receiverName")}
                  className="w-full mt-1 p-3 border rounded-md"
                  placeholder="Receiver Name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Receiver Region</label>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Select Your Region"
                  className="w-full mt-1 p-3 border rounded-md"
                >
                  <option disabled={true}>Select your region</option>
                  {regions.map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm font-medium">
                  Receiver Email Address
                </label>
                <input
                  type="email"
                  {...register("receiverEmailAddress")}
                  className="w-full mt-1 p-3 border rounded-md"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label className="text-sm font-medium">
                  Receiver Contact No
                </label>
                <input
                  {...register("receiverContact")}
                  type="text"
                  className="w-full mt-1 p-3 border rounded-md"
                  placeholder="Receiver Contact No"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium">
                Receiver Delivery Wire house
              </label>
              <select
                className="w-full mt-1 p-3 border rounded-md"
                defaultValue={"Select Wire house"}
                {...register("receiverWarehouse")}
              >
                <option disabled={true}>Select Wire house</option>

                {warehouseByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Receiver Address</label>
              <textarea
                {...register("receiverAddress")}
                className="w-full mt-1 p-3 border rounded-md h-24"
                placeholder="Receiver Address"
              ></textarea>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-6">
          * PickUp Time 4pm-7pm Approx.
        </p>

        <button
          type="submit"
          className="mt-6 bg-lime-500 text-white px-6 py-3 rounded-md font-medium hover:bg-lime-600"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};
export default SendParcel;
