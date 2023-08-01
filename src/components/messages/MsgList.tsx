import Msg from "./Msg"
import MsgListHeader from "./MsgListHeader"

const MsgList = () => {
  return (
    <div className='w-[40%]'>
      <MsgListHeader />
      <Msg />
      <Msg />
      <Msg />
    </div>
  )
}

export default MsgList