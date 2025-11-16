import serviceIcon from "../../../assets/service.png";

const OurServices = () => {
  return (
    <div className="bg-secondary rounded-xl  py-10 my-10">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold py-5">Our Services</h1>
        <p className="lg:w-[718px] px-5 mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className="px-5 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  py-5 gap-5">
        <div className="relative  p-8 bg-white rounded-3xl shadow-md hover:bg-primary">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex size-24 justify-center items-center mb-4 rounded-full bg-linear-to-b from-[#eeedfc] to-[#eeedfc00]">
              <img src={serviceIcon} alt="delivery" className="w-16 h-16" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-semibold text-secondary">
            Express & Standard <br /> Delivery
          </h2>

          {/* Description */}
          <p className="text-center text-base-100 text-sm mt-3 leading-relaxed">
            We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="relative  p-8 bg-white rounded-3xl shadow-md hover:bg-primary">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex size-24 justify-center items-center mb-4 rounded-full bg-linear-to-b from-[#eeedfc] to-[#eeedfc00]">
              <img src={serviceIcon} alt="delivery" className="w-16 h-16" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-semibold text-secondary">
            Nationwide Delivery
          </h2>

          {/* Description */}
          <p className="text-center text-base-100 text-sm mt-3 leading-relaxed">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.
          </p>
        </div>
        <div className="relative  p-8 bg-white rounded-3xl shadow-md hover:bg-primary">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex size-24 justify-center items-center mb-4 rounded-full bg-linear-to-b from-[#eeedfc] to-[#eeedfc00]">
              <img src={serviceIcon} alt="delivery" className="w-16 h-16" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-semibold text-secondary">
            Fulfillment Solution
          </h2>

          {/* Description */}
          <p className="text-center text-base-100 text-sm mt-3 leading-relaxed">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.
          </p>
        </div>
        <div className="relative  p-8 bg-white rounded-3xl shadow-md hover:bg-primary">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex size-24 justify-center items-center mb-4 rounded-full bg-linear-to-b from-[#eeedfc] to-[#eeedfc00]">
              <img src={serviceIcon} alt="delivery" className="w-16 h-16" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-semibold text-secondary">
            Cash on Home Delivery
          </h2>

          {/* Description */}
          <p className="text-center text-base-100 text-sm mt-3 leading-relaxed">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="relative  p-8 bg-white rounded-3xl shadow-md hover:bg-primary">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex size-24 justify-center items-center mb-4 rounded-full bg-linear-to-b from-[#eeedfc] to-[#eeedfc00]">
              <img src={serviceIcon} alt="delivery" className="w-16 h-16" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-semibold text-secondary">
            Corporate Service / Contract In Logistics
          </h2>

          {/* Description */}
          <p className="text-center text-base-100 text-sm mt-3 leading-relaxed">
            Customized corporate services which includes warehouse and inventory
            management support.
          </p>
        </div>
        <div className="relative  p-8 bg-white rounded-3xl shadow-md hover:bg-primary">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex size-24 justify-center items-center mb-4 rounded-full bg-linear-to-b from-[#eeedfc] to-[#eeedfc00]">
              <img src={serviceIcon} alt="delivery" className="w-16 h-16" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-semibold text-secondary">
            Parcel Return
          </h2>

          {/* Description */}
          <p className="text-center text-base-100 text-sm mt-3 leading-relaxed">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
