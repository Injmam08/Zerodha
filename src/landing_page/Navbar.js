import React from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
  return (

    <div className='container p-2 '>
      <nav class="navbar navbar-expand-lg border-bottom "
      style={{backgroundColor:"#FFF"}}>
        <Link class="navbar-brand" ><img style={{width:"30%"}} src='../media/images/logo.svg' alt='logo'></img> </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form class="d-flex" role="search">
       
      </form>
      <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link active" aria-current="page" to="/signup">signup</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/about"> About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/product">Product</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/pricing">pricing</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/supports">Supports</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/bars"><i class="fa-regular fa-bars"></i></Link>
            </li>
            
           
          </ul>
        </div>
      </nav>

    </div>

  );
}

export default NavBar;