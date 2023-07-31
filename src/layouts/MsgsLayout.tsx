import { Outlet } from "react-router-dom"
import MsgList from "../components/messages/MsgList"

const MsgsLayout = () => {
  return (
    <div><MsgList /><Outlet /></div>
  )
}

export default MsgsLayout