import React from 'react'
import {AiOutlineBell,AiOutlineQuestionCircle,AiOutlineWifi,AiOutlineTable,AiOutlineSync} from "react-icons/ai"

const Header = () => {
  return (
      <>
<div className="row">
<nav className="navbar navbar-expand-sm text-dark">
  
  <ul className="navbar-nav text-dark  ms-auto">
      <li className="nav-item  mr-5">
          <p className="nav-link " >
          <img src="https://static.remove.bg/remove-bg-web/a8b5118d623a6b3f4b7813a78c686de384352145/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" alt="..." class=" text-dark rounded-circle"/> Kishore
          </p>
      </li>
      <li className="nav-item text-muted ">
          <p className="nav-link" >
           <AiOutlineBell size={20} color="dark" />  <AiOutlineQuestionCircle size={20}/>
          </p>
      </li>
     
  </ul>
</nav>
</div>
<div className="row">
<nav className="navbar navbar-expand-lg navbar-light border-bottom">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item border-end " style={{borderBottom:"5px solid #FE0D0D"}}>
          <a className="nav-link " aria-current="page" href="#"> <AiOutlineWifi size={25} color="#FE0D0D"/><span className='m-1' style={{color:"#FE0D0D",fontWeight:"bold"}} >Permisssions</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><AiOutlineTable/> Approval Matrix</a>
        </li>
        
      </ul>
     
          <a className="nav-link ms-auto" href="#"><AiOutlineSync/> Last sync 15 mins ago</a>
    </div>
  </div>
</nav>
</div>
</>
  )
}

export default Header