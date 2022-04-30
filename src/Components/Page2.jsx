import React from 'react'
import Sidebar from '../Elements/Sidebar'
import Header from '../Elements/Header'
import Table2 from '../Elements/Table2'
const Page2 = () => {
  return (
    <div className="row">
    <div className="col-md-2 vh-100" style={{backgroundColor:"#FCFBFF"}}>
            <Sidebar/>
        </div>
        <div className="col-md-10">
            <Header/>
            <Table2/>
        </div>
    </div>
  )
}

export default Page2