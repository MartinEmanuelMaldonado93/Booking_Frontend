function MailList() {
  return (
    <div className='flex flex-wrap p-8 gap-6 bg-blue-600 text-white'>
      <div className='font-bold text-center text-4xl w-full flex-grow'>
        Save time, save money!
      </div>
      <div className='font-bold text-xl w-full text-center'>
        Sign up and we'll send the best deals to you
      </div>
      <div className='w-full text-center flex gap-3 justify-center'>
        <input
          className='input input-bordered w-full max-w-xs'
          type='text'
          placeholder='Your Email'
        />
        <button className='btn text-black bg-cyan-50 border-none hover:bg-cyan-200'>
          Subscribe
        </button>
      </div>
    </div>
  );
}

export { MailList };
