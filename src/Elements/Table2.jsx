import React from 'react'
import {AiOutlinePlusCircle,AiOutlineArrowLeft} from 'react-icons/ai'
import {BiPencil} from 'react-icons/bi'
import {IoEyeSharp} from 'react-icons/io5'
const Table2 = () => {
  return (
    <div className="main">
    <div className="row m-3">
        <div className="col-md-2 text-start">
        <AiOutlineArrowLeft/> <span className='m-2' style={{color:"red",fontWeight:"bold"}}>  Teachers</span>  
        </div>
        <div className="col-md-10">
            <BiPencil/>
        </div>
        
        
    </div>
    <div className="row m-5 mt-4  ">
        <div className="row border-bottom ms-3  ">
            <div className="col-md p-2">
                <span className='p-2' style={{borderBottom:"5px solid red",color:"red",fontWeight:"bold"}}>Access Control</span> |  Assigned members
            </div>
            
        </div>
    <table class="table ms-3 mt-5">
<thead className='bg-light text-center'>
<tr>
  <th scope="col"><span className='text-start'>Department/Role Name</span></th>
  <th scope="col">Access Level</th>
  <th scope="col">Summary</th>
  <th scope="col">Last Updated</th>
  <th scope='col'></th>
</tr>
</thead>
<tbody className=''>
<tr>
  <th scope="row">
    <AiOutlinePlusCircle/> <span className='p-2'>Enrolling Students</span> 
</th>
  <td><button className='rounded-pill w-75' style={{backgroundColor:"#BEE7CF",borderColor:"#72CA97",color:"#72CA97"}}>All Access</button></td>
  <td>view | create | edit | delete</td>
  <td>1 min ago</td>
  <td><label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label></td>
</tr>
<tr>
  <th scope="row">
  <AiOutlinePlusCircle/> <span className='p-2'>Financial Details</span> 
  </th>
  <td><button className='rounded-pill w-75' style={{backgroundColor:"#F2F2F2",borderColor:"grey",color:"grey"}}>No Access</button></td>
  <td>-</td>
  <td>1 min ago</td>
  <td><label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label></td>
</tr>
<tr>
  <th scope="row">
  <AiOutlinePlusCircle/> <span className='p-2'>Furniture Order</span> 
  </th>
  <td ><button className='rounded-pill w-75' style={{backgroundColor:"#FFB5B5",borderColor:"#FE2B2B",color:"#FE2B2B"}}>Restricted Access</button></td>
  <td>view | create</td>
  <td>1 min ago</td>
  <td><label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label></td>
</tr>
<tr>
  <th scope="row">
  <AiOutlinePlusCircle/> <span className='p-2'>Technological Equipments</span> 
  </th>
  <td ><button className='rounded-pill w-75' style={{backgroundColor:"#FFB5B5",borderColor:"#FE2B2B",color:"#FE2B2B"}}>Restricted Access</button></td>
  <td>view | create</td>
  <td>1 min ago</td>
  <td><label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label></td>
</tr>
<tr>
  <th scope="row">
  <AiOutlinePlusCircle/> <span className='p-2'>Organisational Modification</span> 
  </th>
  <td ><button className='rounded-pill w-75' style={{backgroundColor:"#BEE7CF",borderColor:"#72CA97",color:"#72CA97"}}>All Access</button></td>
  <td>view | create | edit | delete</td>
  <td>1 min ago</td>
  <td><label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label></td>
</tr>
<tr>
  <th scope="row">
  <AiOutlinePlusCircle/> <span className='p-2'>Permisssions and Access control</span> 
  </th>
  <td><button className='rounded-pill w-75' style={{backgroundColor:"#F2F2F2",borderColor:"grey",color:"grey"}}>No Access</button></td>
  <td>-</td>
  <td>1 min ago</td>
  <td><label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label></td>
</tr>
</tbody>
</table>
    </div>
</div>
  )
}

export default Table2