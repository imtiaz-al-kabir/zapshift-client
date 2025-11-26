import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import riderImg from "../../assets/agent-pending.png";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";

export default function BeARider() {
  const { register, handleSubmit, control } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const serviceCenters = useLoaderData();

  const duplicateRegions = serviceCenters.map((c) => c.region);
  const regions = [...new Set(duplicateRegions)];

  const region = useWatch({ control, name: "region" });

  const warehouseByRegion = (region) => {
    const regionWarehouse = serviceCenters.filter((d) => d.region === region);
    const districts = regionWarehouse.map((c) => c.district);
    return districts;
  };

  const handleRider = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            "Your Application has been submitted.we will reach you out soon",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };
  return (
    <form
      onSubmit={handleSubmit(handleRider)}
      className="min-h-screen bg-gray-100 p-6 flex justify-center"
    >
      <div className="bg-white w-full max-w-6xl p-10 rounded-2xl shadow-md flex flex-col md:flex-row gap-10">
        {/* Left Side Form */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Be a Rider</h1>
          <p className="text-gray-600 max-w-xl mb-8">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          <hr className="mb-8" />

          <h2 className="text-xl font-semibold mb-6">Tell us about yourself</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-semibold">Your Name</label>
              <input
                type="text"
                {...register("name")}
                defaultValue={user.displayName}
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Your age</label>
              <input
                type="text"
                {...register("age")}
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="Your age"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-semibold">Your Email</label>
              <input
                type="email"
                defaultValue={user.email}
                {...register("email")}
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Your Region</label>
              <select
                className="w-full mt-1 p-3 border rounded-md"
                {...register("region")}
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
              <label className="text-sm font-semibold">NID No</label>
              <input
                type="text"
                {...register("NID")}
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="NID"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Driving License</label>
              <input
                type="text"
                {...register("license")}
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="Driving License"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">
                Bike Registration No
              </label>
              <input
                type="text"
                {...register("registration")}
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="Bike Registration"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Contact</label>
              <input
                {...register("contact")}
                type="text"
                className="w-full mt-1 p-3 border rounded-md"
                placeholder="Contact"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold">
              Which wire-house you want to work?
            </label>
            <select
              className="w-full mt-1 p-3 border rounded-md"
              {...register("warehouse")}
              defaultValue="Select Wire house"
            >
              <option disabled={true}> Select Wire house</option>

              {warehouseByRegion(region).map((r, i) => (
                <option value={r} key={i}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <button className="bg-lime-500 text-white w-full p-3 rounded-md font-semibold hover:bg-lime-600">
            Apply as Rider
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={riderImg}
            alt="Rider Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </form>
  );
}
