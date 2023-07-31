import Link from "./Link"
import { BiSolidDashboard } from 'react-icons/bi'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { MdOutlineAnalytics, MdCall } from 'react-icons/md'
import { AiOutlineFileSync, AiOutlineMessage, AiOutlineUsergroupAdd, AiTwotoneSetting } from 'react-icons/ai'
const SideNav = () => {
  return (
    <div className="flex flex-col gap-2 w-[20%] p-3 ">
      <div className="flex  items-center gap-2 text-lg pl-3 mb-4">
        <p className="text-[#0147ff] text-3xl ">< BsFillChatDotsFill /></p>
        <p className="font-bold text-xl">ChatBox</p>
      </div>
      <Link to="Dashboard" icon={<BiSolidDashboard />} />
      <Link to="Analytics" icon={<MdOutlineAnalytics />} />
      <Link to="Files" icon={<AiOutlineFileSync />} />
      <Link to="Call" icon={<MdCall />} />
      <Link to="Messages" icon={<AiOutlineMessage />} />
      <Link to="Community" icon={<AiOutlineUsergroupAdd />} />
      <Link to="Settings" icon={<AiTwotoneSetting />} />
    </div>
  )
}

export default SideNav