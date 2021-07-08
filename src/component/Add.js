import {Form,Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Add ({listtour,setListtour}){
    console.log(listtour)
    const [name,setName]=useState("")
    const [info,setInfo]=useState("")
    const [image,setImage]=useState("")
    const [price,setprice]=useState("")
    const Ajouter=()=>{
        setListtour([...listtour,{name,info,image,price,id:Math.random()}])
     }
    return(<div className="add">
       <div><Link to="/"><Button style={{marginLeft: '20px',marginBottom:"20px"}}>back to home</Button></Link></div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
           <table><tr><td><Form.Label>Name </Form.Label></td>
         <td>  <input type="text" onChange={e=>setName(e.target.value)}/></td></tr>
         <tr> <td><Form.Label>Info </Form.Label></td>
         <td>      <input type="text" onChange={e=>setInfo(e.target.value)}/></td></tr>
        <tr> <td><Form.Label>Image </Form.Label></td>
        <td>  <input type="text" onChange={e=>setImage(e.target.value)}/></td></tr> 
        <tr><td> <Form.Label>Price </Form.Label></td>
        <td> <input type="text" onChange={e=>setprice(e.target.value)}/></td></tr> </table>
        </Form.Group>
      </Form>
      <Button style={{marginLeft: '90px',marginBottom:"20px"}} onClick={Ajouter} >
          Add
        </Button>
    </div>)
}