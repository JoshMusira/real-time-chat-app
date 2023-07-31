import Link from "./Link"

const SideNav = () => {
  return (
    <div className="flex flex-col gap-5 w-[20%] p-3 ">
      <Link to="Messages" icon="jjjj" />
      <Link to="Settings" icon="jjjj" />
      {/* <Link to="Messages" icon="jjjj" /> */}
    </div>
  )
}

export default SideNav