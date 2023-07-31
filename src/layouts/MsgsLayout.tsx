import { Outlet } from "react-router-dom"
import MsgList from "../components/messages/MsgList"

const MsgsLayout = () => {
  return (
    <div className="flex gap-4"><MsgList /><Outlet /></div>
  )
}

export default MsgsLayout