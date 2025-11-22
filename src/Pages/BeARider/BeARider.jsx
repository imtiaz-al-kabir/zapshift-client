import riderImg from "../../assets/agent-pending.png";

export default function BeARider() {

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white w-full max-w-6xl p-10 rounded-2xl shadow-md flex flex-col md:flex-row gap-10">
        {/* Left Side Form */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Be a Rider</h1>
          <p className="text-gray-600 max-w-xl mb-8">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal
            packages to business shipments — we deliver on time, every time.
          </p>

          <hr className="mb-8" />

          <h2 className="text-xl font-semibold mb-6">Tell us about yourself</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-semibold">Your Name</label>
              <input type="text" className="w-full mt-1 p-3 border rounded-md" placeholder="Your Name" />
            </div>
            <div>
              <label className="text-sm font-semibold">Your age</label>
              <input type="text" className="w-full mt-1 p-3 border rounded-md" placeholder="Your age" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-semibold">Your Email</label>
              <input type="email" className="w-full mt-1 p-3 border rounded-md" placeholder="Your Email" />
            </div>
            <div>
              <label className="text-sm font-semibold">Your Region</label>
              <select className="w-full mt-1 p-3 border rounded-md">
                <option>Select your region</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-sm font-semibold">NID No</label>
              <input type="text" className="w-full mt-1 p-3 border rounded-md" placeholder="NID" />
            </div>
            <div>
              <label className="text-sm font-semibold">Contact</label>
              <input type="text" className="w-full mt-1 p-3 border rounded-md" placeholder="Contact" />
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-semibold">Which wire-house you want to work?</label>
            <select className="w-full mt-1 p-3 border rounded-md">
              <option>Select wire-house</option>
            </select>
          </div>

          <button className="bg-lime-500 text-white w-full p-3 rounded-md font-semibold hover:bg-lime-600">
            Submit
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
    </div>
  );
}
