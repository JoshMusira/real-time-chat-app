import Msg from "./Msg"
import MsgListHeader from "./MsgListHeader"

const MsgList = () => {
  return (
    <div className='w-[40%] h-[100vh] bg-gray-50 shadow-lg'>
      <MsgListHeader />
      <Msg />
      <Msg />
      <Msg />
    </div>
  )
}

export default MsgList