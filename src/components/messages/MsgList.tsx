import Msg from "./Msg"
import MsgListHeader from "./MsgListHeader"

const MsgList = () => {
  return (
    <div className=" ">
      <MsgListHeader />
      <Msg />
      <Msg />
      <Msg />
    </div>
  )
}

export default MsgList