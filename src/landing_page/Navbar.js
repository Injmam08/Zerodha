import React from 'react'
function NavBar() {
  return (

    <div className='container p-2 '>
      <nav class="navbar navbar-expand-lg border-bottom "
      style={{backgroundColor:"#FFF"}}>
        <a class="navbar-brand" ><img style={{width:"30%"}} src='../media/images/logo.svg' alt='logo'></img> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form class="d-flex" role="search">
       
      </form>
      <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link active" href="#">Signup<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#"> About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Supports</a>
            </li>
            
           
          </ul>
        </div>
      </nav>

    </div>

  );
}

export default NavBar;