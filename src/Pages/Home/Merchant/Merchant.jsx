import waveLogo from "../../../assets/be-a-merchant-bg.png";
import merchantLogo from "../../../assets/location-merchant.png";
export default function Merchant() {
  return (
   <div className="pb-15">

     <div className="relative max-w-6xl mx-auto w-full bg-secondary rounded-3xl overflow-hidden px-10 py-14 text-white flex flex-col md:flex-row items-center justify-between">
      <img
        src={waveLogo}
        alt=""
        className="absolute top-0 left-0 w-full h-32 object-cover opacity-90"
      />

      {/* Left Content */}
      <div className="relative z-10 ">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Merchant and Customer Satisfaction <br />
          is Our First Priority
        </h2>

        <p className="text-gray-200 max-w-lg mt-4 text-sm leading-relaxed">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Fast & reliable courier service to every
          corner of Bangladesh right on time.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 flex-wrap">
          <button className="px-5 py-2.5 bg-primary text-[#00383A] font-semibold rounded-full hover:bg-[#d3ff9b] transition">
            Become a Merchant
          </button>

          <button className="px-5 py-2.5 bg-[#214E46] border border-[#4BF59A] text-[#B7FFD0] font-semibold rounded-full hover:bg-[#27574F] transition">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>

     
      <img
        src={merchantLogo} 
        alt="Courier Illustration"
        className="relative z-10 w-72 md:w-96 mt-10 md:mt-0 "
      />
    </div>
   </div>
  );
}
