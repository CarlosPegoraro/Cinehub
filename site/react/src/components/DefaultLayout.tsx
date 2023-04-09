import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export function DefaultLayout() {
  const {user, token} = useStateContext()

  if(!token) {
    return <Navigate to="/login"/>
  }

  const onLogout = (ev: { preventDefault: () => void; }) => {
    ev.preventDefault()
  }
  var userName = ""

  if(user == null) {
    userName = "Indefined"
  } else {
    userName = user.name
  }

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashborad">dashboard</Link>
        <Link to="/users">users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {userName}
            <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
          </div>
        </header>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
