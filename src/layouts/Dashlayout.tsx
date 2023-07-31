import { Outlet } from "react-router-dom"
import SideNav from "../components/SideNav/SideNav"

const Dashlayout = () => {
  return (
    <div className="flex gap-4">
      <SideNav />
      <Outlet />
    </div>
  )
}

export default Dashlayout