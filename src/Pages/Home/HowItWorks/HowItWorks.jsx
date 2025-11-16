import booking from "../../../assets/bookingIcon.png";

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-secondary px-5 text-2xl font-bold py-5">
        How It Works
      </h1>

      <div className="px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5 gap-5">
        <div className="bg-white p-5 rounded-2xl">
          <img src={booking} alt="booking icon" />
          <h1 className="text-secondary text-xl font-semibold py-2">
            Booking Pick & Drop
          </h1>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl">
          <img src={booking} alt="booking icon" />
          <h1 className="text-secondary text-xl font-semibold py-2">
            Cash On Delivery
          </h1>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl">
          <img src={booking} alt="booking icon" />
          <h1 className="text-secondary text-xl font-semibold py-2">
            Delivery Hub
          </h1>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl">
          <img src={booking} alt="booking icon" />
          <h1 className="text-secondary text-xl font-semibold py-2">
            Booking SME & Corporate
          </h1>
          <p>
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
