import React from 'react'
import {GrProjects} from "react-icons/gr"
import {FaToolbox} from 'react-icons/fa'
import {SiSpringsecurity} from "react-icons/si"
const Sidebar = () => {
  return (
    
    <>
    <div className="main m-3 text-muted  ">
        <div className="row text-bold fst-bold">
            <div className="col-md-3"> <div  className="test rounded-circle" style={{backgroundColor: "#42378f",
backgroundImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%)"}}></div></div>
            <div className="col-md-9  text-dark">
                <strong>
                <div className="row mb-0 gy-1">Classroom</div>
                <div className="row gy-2">Manager</div>
                </strong>
            </div>
           </div>
        <div className="row mt-4">
            <div className="col-md-2"> <GrProjects/></div>
            <div className="col-md-10">Projects </div>
             </div>
        <div className="row mt-2">
        <div className="col-md-2 "> <FaToolbox/></div>
            <div className="col-md-10 ">Classrooms </div>
          </div>
        <div className="row mt-2  pt-2 pb-2 special">
        <div className="col-md-2 "> <SiSpringsecurity color="#FE0D0D"/></div>
            <div className="col-md-10" style={{color:"#FE0D0D",fontWeight:"500"}}>Permissions </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar