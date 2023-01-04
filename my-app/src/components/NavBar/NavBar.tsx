import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return ( 
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid my-2 px-4">
    <a className="navbar-brand" href="#">Cakee</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item px-2">
          <NavLink 
            className= {({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
            to="/" end
            >Home
          </NavLink>
        </li>

        <li className="nav-item px-2">
          <NavLink 
            className= {({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
            to="/" end
            >Cakes
          </NavLink>
        </li>

        <li className="nav-item px-2">
          <NavLink 
            className= {({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
            to="/" end
            >Order
          </NavLink>
        </li>

        <li className="nav-item px-2">
          <NavLink 
            className= {({ isActive }) => (isActive ? "nav-link active" : "nav-link")} 
            to="/" end
            >Contact
          </NavLink>
        </li>

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>

      <li className="nav-item">
          <a className="btn btn-primary" href="#">Cart</a>
        </li>
    </div>
  </div>
</nav>
        
    </>
     );
}
 
