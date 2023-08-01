import { Outlet } from "react-router-dom"
import MsgList from "../components/messages/MsgList"

const MsgsLayout = () => {
  return (
    <div className="flex  gap-6  w-[80%]"><MsgList /><Outlet /></div>
  )
}

export default MsgsLayout