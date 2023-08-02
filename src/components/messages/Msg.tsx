import profile from '../../assets/software.jpg'
const Msg = () => {
  return (
    <div className="flex m-[5px] w-[100%]  ">
      <div className=" ml-[5px] w-[20%] "><img
        className='w-20 h-20 rounded-full object-cover' src={profile} alt="" /></div>
      <div className="flex w-[80%] justify-between m-[6px]">
        <div className="flex flex-col gap-4">
          <p className='font-bold '>Josh Musira</p>
          <p className='text-green-500'>Typing...</p>
        </div>
        <div className="flex text-center mr-[5px]  flex-col gap-4">
          <p className='text-gray-400'>02:21 PM</p>
          <p className='w-6 h-6 text-white rounded-full bg-red-600'>2</p>
        </div>
      </div>
    </div>
  )
}

export default Msg;
