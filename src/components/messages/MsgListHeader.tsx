import { AiOutlineEdit, AiOutlineSearch } from 'react-icons/ai'
const MsgListHeader = () => {
  return (
    <div className='flex justify-between gap-5 mt-5 w-[100%]'>
      <p className='text-[#0147ff] text-2xl'>Messages</p>
      <div className='flex items-center gap-4'>
        <AiOutlineEdit />
        <AiOutlineSearch />
      </div>
    </div>
  )
}

export default MsgListHeader