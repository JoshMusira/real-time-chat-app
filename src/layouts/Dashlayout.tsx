import { Outlet } from "react-router-dom"
import SideNav from "../components/SideNav/SideNav"

const Dashlayout = () => {
  return (
    <div>
      <SideNav />
      <Outlet />
    </div>
  )
}

export default Dashlayout