import { Outlet } from "react-router-dom"

const Protected = () => {
  return (
    <div>
      <h1>protected</h1>
      <Outlet/>
    </div>
  )
}

export default Protected