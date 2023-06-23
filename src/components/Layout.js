import { Outlet, Link } from "react-router-dom";
import '../App.css'

const Layout = () => {
  return (
    <>
      <nav className="header">
          <div>
            <Link to="/home">Home</Link>
          </div>
         <div>
            <Link to="/contacts">Contacts</Link>
         </div>
        <div>
            <Link to="/reducer">Reducer</Link>
        </div>
         <div>
            <Link to="/register">Sign up</Link>
         </div>
      <div>
            <Link to="/dropdown">Sweets</Link>
      </div>
      <div>
            <Link to="/formik">Formik</Link>
      </div>
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;