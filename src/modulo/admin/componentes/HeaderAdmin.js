import React from "react";
import { Link } from "react-router-dom";
import logopng from '../../../img/logopng.png'
function HeaderAdmin() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#d6c0ff" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to={{pathname:"/admin/home"}}>
            <img class="img_nav" src={logopng}  />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default HeaderAdmin;
