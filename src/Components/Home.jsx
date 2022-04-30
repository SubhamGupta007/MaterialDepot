import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


const Home = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Material Depost</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
      </ul>
    </div>
  </div>
</nav>
        <div className="row text-center m-5">
            <div className="col">
                <NavLink to="/page1"><button className='w-100 btn btn-danger'>Page1</button></NavLink>
            </div>
            
            
        </div>
        <div className="row text-center m-5">
            <div className="col"> <NavLink to="/page2"><button className='w-100 btn btn-danger'>Page2</button></NavLink></div>
        </div>
        <div className="row text-center m-5">
        <div className="col"> <NavLink to="/page3"><button className='w-100 btn btn-danger'>Page3</button></NavLink></div>
        </div>
    </>
  )
}

export default Home