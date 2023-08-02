import { AiOutlineEdit, AiOutlineSearch } from 'react-icons/ai'
const MsgListHeader = () => {
  return (
    <div className='flex justify-between gap-5 mt-5 w-[100%]'>
      <p className='text-[#0147ff] text-2xl font-bold'>Messages</p>
      <div className='flex items-center gap-4 text-gray-300 text-2xl '>
        <span className='bg-gray-100 rounded-full p-[4px]'><AiOutlineEdit /></span>
        <span className='bg-gray-100 rounded-full p-[4px]'><AiOutlineSearch /></span>
      </div>
    </div>
  )
}

export default MsgListHeader