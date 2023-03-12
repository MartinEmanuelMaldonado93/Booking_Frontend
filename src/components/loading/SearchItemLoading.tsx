function SearchItemLoading() {
  return (
    <div className='flex flex-wrap lg:flex-nowrap justify-center gap-6 border border-gray-300 rounded-md p-4'>
      <div className='m-2 rounded-sm min-w-[12rem] max-w-[14rem] h-full aspect-square bg-gray-300 animate-pulse' />
      <div className='grid gap-2 w-full'>
        <h1 className='rounded-lg text-lg h-6 font-bold bg-gray-300 animate-pulse'></h1>
        <div className='rounded-lg h-5 w-full bg-gray-300 animate-pulse'></div>
        <div className='rounded-lg badge w-14 bg-gray-300 animate-pulse border-none'></div>
        <div className='rounded-lg font-bold w-full h-10 bg-gray-400 animate-pulse'></div>
        <div className='rounded-lg bg-gray-300 animate-pulse h-5'></div>
        <div className='rounded-lg h-5 w-full animate-pulse'></div>
        <div className='rounded-lg bg-gray-300 animate-pulse h-6'></div>
      </div>
      <div className=''>
        <div className='grid gap-3 place-items-center'>
          <div className='h-8 w-10 text-end rounded-lg bg-gray-300  animate-pulse'></div>
          <button className='btn btn-primary w-[7rem] border-none bg-gray-300 animate-pulse '></button>
        </div>
      </div>
    </div>
  );
}
export default SearchItemLoading;
