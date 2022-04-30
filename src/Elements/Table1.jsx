import React from 'react'

import {AiOutlinePlus,AiOutlineDelete} from 'react-icons/ai'
import {BiPencil} from 'react-icons/bi'
import {IoEyeSharp} from 'react-icons/io5'
const Table1 = () => {
  return (
    <div className="main me-5 ms-5">
        <div className="row">
            <div className="col-md-2 text-start">
            <button className='btn text-light' style={{backgroundColor:"#B73A3A"}}> <AiOutlinePlus/> Add Rule</button>
            
            </div>
            <div className="col p-1"><BiPencil size={20}/> <span className='p-2'> <AiOutlineDelete size={20}/></span></div>
            
            
        </div>
        <div className="row me-5 mt-2">
        <table class="table">
  <thead className='bg-light text-center'>
    <tr>
      <th scope="col"><span className='text-start'>Department/Role Name</span></th>
      <th scope="col">Access Level</th>
      <th scope="col">No of Members</th>
      <th scope="col">Last Updated</th>
      <th scope='col'></th>
    </tr>
  </thead>
  <tbody className=''>
    <tr>
      <th scope="row">
      <div className=" radio-rounded-circle  ">
      <input type="radio" class="form-check-input filled-in" id="roundedExample2" />
      <label className="ps-3" for="roundedExample2">  Teachers</label>
    </div>
    </th>
      <td><button className='rounded-pill w-75' style={{backgroundColor:"#BEE7CF",borderColor:"#72CA97",color:"#72CA97"}}>All Access</button></td>
      <td>4</td>
      <td>1 min ago</td>
      <td><IoEyeSharp></IoEyeSharp></td>
    </tr>
    <tr>
      <th scope="row">
      <div className=" radio-rounded-circle  ">
      <input type="radio" class="form-check-input filled-in" id="roundedExample2" />
      <label className="ps-3" for="roundedExample2">  External Faculty</label>
    </div>
      </th>
      <td><button className='rounded-pill w-75' style={{backgroundColor:"#FFB5B5",borderColor:"#FE2B2B",color:"#FE2B2B"}}>Restricted Access</button></td>
      <td>8</td>
      <td>1 min ago</td>
      <td><IoEyeSharp></IoEyeSharp></td>
    </tr>
    <tr>
      <th scope="row">
      <div className=" radio-rounded-circle  ">
      <input type="radio" class="form-check-input filled-in" id="roundedExample2" />
      <label className="ps-3" for="roundedExample2">  Lab Assistants</label>
    </div>
      </th>
      <td ><button className='rounded-pill w-75' style={{backgroundColor:"#FFB5B5",borderColor:"#FE2B2B",color:"#FE2B2B"}}>Restricted Access</button></td>
      <td>16</td>
      <td>1 min ago</td>
      <td><IoEyeSharp></IoEyeSharp></td>
    </tr>
    <tr>
      <th scope="row">
      <div className=" radio-rounded-circle  ">
      <input type="radio" class="form-check-input filled-in" id="roundedExample2" />
      <label className="ps-3" for="roundedExample2">  Non-teaching staff</label>
    </div>
      </th>
      <td ><button className='rounded-pill w-75' style={{backgroundColor:"#FFB5B5",borderColor:"#FE2B2B",color:"#FE2B2B"}}>Restricted Access</button></td>
      <td>4</td>
      <td>1 min ago</td>
      <td><IoEyeSharp></IoEyeSharp></td>
    </tr>
    <tr>
      <th scope="row">
      <div className=" radio-rounded-circle  ">
      <input type="radio" class="form-check-input filled-in" id="roundedExample2" />
      <label className="ps-3" for="roundedExample2">  Supervisors</label>
    </div>
      </th>
      <td ><button className='rounded-pill w-75' style={{backgroundColor:"#BEE7CF",borderColor:"#72CA97",color:"#72CA97"}}>All Access</button></td>
      <td>1</td>
      <td>1 min ago</td>
      <td><IoEyeSharp></IoEyeSharp></td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Table1