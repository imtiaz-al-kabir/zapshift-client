import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const serviceCenters = useLoaderData();

  const position = [23.685, 90.3563];
const mapRef=useRef()
  const handleSearch = (e) => {
    e.preventDefault();
    const location=e.target.location.value
    const dist=serviceCenters.find(c=>c.district.toLowerCase().includes(location.toLowerCase()))

    if(dist){
        const coord=[dist.latitude,dist.longitude]
        console.log(coord)
        mapRef.current.flyTo(coord,14)
    }
  };
  return (
    <div className="py-10">
      <div className="container mx-auto bg-white p-10 rounded-2xl">
        <h1 className="text-4xl font-bold text-secondary">
          We are available in 64 districts
        </h1>
        <form
          className="flex items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md w-full my-8"
          onSubmit={handleSearch}
        >
          <IoSearchSharp size={30} />
          <input
            type="text"
            name="location"
            className="w-full h-full outline-none text-sm text-gray-500"
          />
          <button
            type="submit"
            className="bg-primary w-32 h-full rounded-full text-sm text-black "
          >
            Search
          </button>
        </form>

        <div className="border-t border-dashed border-base-200 my-15 w-full"></div>
        <h1 className="text-xl font-bold text-secondary pb-5">
          We deliver almost all over Bangladesh
        </h1>
        <div className="w-full h-[500px]">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-[500px]"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceCenters.map((center) => (
              <Marker position={[center.latitude, center.longitude]}>
                <Popup>
                  <strong>{center.district}</strong> <br />
                  Service Area: {center.covered_area.join(", ")}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
