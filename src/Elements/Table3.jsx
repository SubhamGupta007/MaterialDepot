import React from 'react'
import {AiOutlinePlusCircle,AiOutlineArrowLeft} from 'react-icons/ai'
import {BiPencil} from 'react-icons/bi'
import {IoEyeSharp} from 'react-icons/io5'
const Table3 = () => {
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
  <th scope="col"><span className='pe-5'>Department/Role Name</span></th>
  <th scope="col">Access Level</th>
  <th scope="col">Summary</th>
  <th scope="col">Last Updated</th>
  <th scope='col'></th>
</tr>
</thead>
<tbody className=''>
<tr>
  <th scope="row"  data-toggle="collapse" data-target="#accordion5" class="clickable">
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
<tr className='' style={{borderStyle:"hidden"}}>
        <td colspan="10">
            <div id="accordion5" class="collapse">
                <div className="row m-3">All aspects in the financial detail module</div>
                <div className="row m-5 text-start">
                    <div className="col-md-4 border-end">
                        <p>Access Control </p>
                        <p> <input class="form-check-input   " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> All Access<br/><span className='ps-4 text-muted'>Can assess all items</span></p>
                        <p> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> Restricted Access <br/><span className='ps-4 text-muted'>Can assess only assigned or created items</span></p>

                    </div>
                    <div className="col ps-5">
                        <p>Permissions</p>
                        <p><input type="checkbox" class="form-check-input " id="exampleCheck1"/> view items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> edit items in access</p>
                        <p> <input type="checkbox" class="form-check-input" id="exampleCheck1"/>create items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> delete items in access</p>
                    </div>
                </div>
            </div>
        </td>
</tr>
<tr>
  <th scope="row"  data-toggle="collapse" data-target="#accordion4" class="clickable">
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
<tr className='' style={{borderStyle:"hidden"}}>
        <td colspan="10">
            <div id="accordion4" class="collapse">
                <div className="row m-3">All aspects in the financial detail module</div>
                <div className="row m-5 text-start">
                    <div className="col-md-4 border-end">
                        <p>Access Control </p>
                        <p> <input class="form-check-input   " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> All Access<br/><span className='ps-4 text-muted'>Can assess all items</span></p>
                        <p> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> Restricted Access <br/><span className='ps-4 text-muted'>Can assess only assigned or created items</span></p>

                    </div>
                    <div className="col ps-5">
                        <p>Permissions</p>
                        <p><input type="checkbox" class="form-check-input " id="exampleCheck1"/> view items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> edit items in access</p>
                        <p> <input type="checkbox" class="form-check-input" id="exampleCheck1"/>create items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> delete items in access</p>
                    </div>
                </div>
            </div>
        </td>
</tr>
<tr>
  <th scope="row"  data-toggle="collapse" data-target="#accordion3" class="clickable">
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
<tr className='' style={{borderStyle:"hidden"}}>
        <td colspan="10">
            <div id="accordion3" class="collapse">
                <div className="row m-3">All aspects in the financial detail module</div>
                <div className="row m-5 text-start">
                    <div className="col-md-4 border-end">
                        <p>Access Control </p>
                        <p> <input class="form-check-input   " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> All Access<br/><span className='ps-4 text-muted'>Can assess all items</span></p>
                        <p> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> Restricted Access <br/><span className='ps-4 text-muted'>Can assess only assigned or created items</span></p>

                    </div>
                    <div className="col ps-5">
                        <p>Permissions</p>
                        <p><input type="checkbox" class="form-check-input " id="exampleCheck1"/> view items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> edit items in access</p>
                        <p> <input type="checkbox" class="form-check-input" id="exampleCheck1"/>create items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> delete items in access</p>
                    </div>
                </div>
            </div>
        </td>
</tr>
<tr>
  <th scope="row"  data-toggle="collapse" data-target="#accordion2" class="clickable">
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
<tr className='' style={{borderStyle:"hidden"}}>
        <td colspan="10">
            <div id="accordion2" class="collapse">
                <div className="row m-3">All aspects in the financial detail module</div>
                <div className="row m-5 text-start">
                    <div className="col-md-4 border-end">
                        <p>Access Control </p>
                        <p> <input class="form-check-input   " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> All Access<br/><span className='ps-4 text-muted'>Can assess all items</span></p>
                        <p> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> Restricted Access <br/><span className='ps-4 text-muted'>Can assess only assigned or created items</span></p>

                    </div>
                    <div className="col ps-5">
                        <p>Permissions</p>
                        <p><input type="checkbox" class="form-check-input " id="exampleCheck1"/> view items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> edit items in access</p>
                        <p> <input type="checkbox" class="form-check-input" id="exampleCheck1"/>create items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> delete items in access</p>
                    </div>
                </div>
            </div>
        </td>
</tr>
<tr>
  <th scope="row" data-toggle="collapse" data-target="#accordion1" class="clickable">
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
<tr className='' style={{borderStyle:"hidden"}}>
        <td colspan="10">
            <div id="accordion1" class="collapse">
                <div className="row m-3">All aspects in the financial detail module</div>
                <div className="row m-5 text-start">
                    <div className="col-md-4 border-end">
                        <p>Access Control </p>
                        <p> <input class="form-check-input   " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> All Access<br/><span className='ps-4 text-muted'>Can assess all items</span></p>
                        <p> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> Restricted Access <br/><span className='ps-4 text-muted'>Can assess only assigned or created items</span></p>

                    </div>
                    <div className="col ps-5">
                        <p>Permissions</p>
                        <p><input type="checkbox" class="form-check-input " id="exampleCheck1"/> view items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> edit items in access</p>
                        <p> <input type="checkbox" class="form-check-input" id="exampleCheck1"/>create items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> delete items in access</p>
                    </div>
                </div>
            </div>
        </td>
</tr>
<tr>
  <th scope="row" data-toggle="collapse" data-target="#accordion" class="clickable">
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
<tr className='' style={{borderStyle:"hidden"}}>
        <td colspan="10">
            <div id="accordion" class="collapse">
                <div className="row m-3">All aspects in the financial detail module</div>
                <div className="row m-5 text-start">
                    <div className="col-md-4 border-end">
                        <p>Access Control </p>
                        <p> <input class="form-check-input   " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> All Access<br/><span className='ps-4 text-muted'>Can assess all items</span></p>
                        <p> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> Restricted Access <br/><span className='ps-4 text-muted'>Can assess only assigned or created items</span></p>

                    </div>
                    <div className="col ps-5">
                        <p>Permissions</p>
                        <p><input type="checkbox" class="form-check-input " id="exampleCheck1"/> view items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> edit items in access</p>
                        <p> <input type="checkbox" class="form-check-input" id="exampleCheck1"/>create items in access</p>
                        <p><input type="checkbox" class="form-check-input" id="exampleCheck1"/> delete items in access</p>
                    </div>
                </div>
            </div>
        </td>
</tr>
</tbody>
</table>
    </div>
</div>
  )
}

export default Table3