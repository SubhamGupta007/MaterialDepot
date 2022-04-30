import React from 'react'
import Sidebar from '../Elements/Sidebar'
import Header from '../Elements/Header'
import Table1 from '../Elements/Table1'

const Page1 = () => {
  return (
    <div className="row">
    <div className="col-md-2 vh-100" style={{backgroundColor:"#FCFBFF"}}>
            <Sidebar/>
        </div>
        <div className="col-md-10">
            <Header/>
            <div className="row m-5">
            <Table1/>
            </div>
            
        </div>
    </div>
  )
}

export default Page1