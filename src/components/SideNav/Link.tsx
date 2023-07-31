import { NavLink } from "react-router-dom"

const Link = ({ to, icon }: { to: string, icon: string }) => {
  return (
    <NavLink className="flex gap-4 p-3 rounded-[13px]" to={to.toLowerCase()}>
      <span>{icon}</span>
      <p>{to}</p>
    </NavLink>
  )
}

export default Link