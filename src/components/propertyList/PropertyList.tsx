import { propertiesData, uuid } from "@utils";

/** Show properties by type like hotels, apartment, etc.. */
function PropertyList() {
  return (
    <div className='px-4 overflow-x-scroll sm:overflow-x-auto'>
      <div className='text-2xl text-gray-900'>Browse by property type</div>
      <div className='flex translate-x-[70%] sm:translate-x-0 sm:flex-wrap justify-evenly sm:justify-between'>
        {propertiesData.map((property) => (
          <div className='card duration-300 hover:shadow-xl' key={uuid()}>
            <div className='card-body p-6 px-1'>
              <img
                src={property.src}
                alt=''
                className='rounded-md max-w-[10rem] min-w-[10rem] h-full object-cover'
              />
              <h1 className='card-title capitalize'>{property.type}</h1>
              <h2>
                {property.count} {property.type}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export { PropertyList };
