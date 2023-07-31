import { NavLink } from "react-router-dom"
interface LinkProps {
  to: string;
  icon: React.ReactNode;
}

const Link = ({ to, icon }: LinkProps) => {
  return (
    <NavLink className="flex items-center gap-3 p-3 rounded-[13px]" to={to.toLowerCase()}>
      <span className="text-gray-500 text-2xl">{icon}</span>
      <p className="text-lg">{to}</p>
    </NavLink>
  )
}

export default Link