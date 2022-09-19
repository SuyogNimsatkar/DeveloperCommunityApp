import React from 'react'
import ViewDeveloper from '../page/Admin/ViewDeveloper'
import deleteresponse from '../page/Admin/DeleteResponse'
import deletequery from '../page/Admin/DeleteQuery'
import Swal from 'sweetalert2';

export default function AdminNav() {

  const LogOut = (e) => {
    localStorage.clear();
    Swal.fire({
      icon: 'success',
      title: 'Logged Out!',
      text: `LogOut is successfull`,
      showConfirmButton: false,
      timer: 4000
    });
  }

  return (
    <div>
  
      <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              id="MDB-logo"
              src="https://w7.pngwing.com/pngs/973/11/png-transparent-phoenix-logo-design-mark-phoenix-fire-thumbnail.png"
              alt="MDB Logo"
              draggable="false"
              height="30"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link mx-2" href="/deletequery"><i className="fas fa-plus-circle pe-2"></i>Query</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/ViewDeveloper"><i className="fas fa-bell pe-2"></i> View Developer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/deleteresponse"><i className="fas fa-heart pe-2"></i>Responses</a>
              </li>
              <li className="nav-item ms-3">
                <a className="btn btn-black btn-rounded" href="/" onClick={LogOut}>Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
 
    </div>
  )
}
