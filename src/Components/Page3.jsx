import React from 'react'
import Header from '../Elements/Header'
import Sidebar from '../Elements/Sidebar'
import Table3 from '../Elements/Table3'
const Page3 = () => {
  return (
    <div className="row">
    <div className="col-md-2 vh-100" style={{backgroundColor:"#FCFBFF"}}>
            <Sidebar/>
        </div>
        <div className="col-md-10">
            <Header/>
           <Table3/>
        </div>
    </div>
  )
}

export default Page3