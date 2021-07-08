import {data} from "./Data"
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import Touritem from "./Touritem"
import {useState} from "react"
import { useEffect } from 'react';
export default function Listtour({listtour,setListtour,search}){
  const [loading,setLodaing]=useState(false)

   const  Refresh=()=>  setInterval(() => {setLodaing(true);}, 3000);setTimeout(() => {setLodaing(false);}, 7000);
    return (<><div className="back ">
        <div><Link to="/"><button >back to home</button></Link></div>
        <div><h3>Our tour</h3></div>
        <div className="reload">{listtour.length===0 &&  <Button onClick={Refresh} style={{backgroundColor: "hotpink",color:"white",marginTop:"10px"}}>Reload</Button>}</div>
        </div>
       <div className="load"> {loading?   (<h1>...loading</h1>):null} </div>
        <div className="listtour">
        {listtour.filter(el => el.name.toLowerCase().includes(search)).map(list=>(<div className="textcard" key={list.id}><Touritem listtour={listtour} setListtour={setListtour} list={list}/>
       </div>))}</div> 
         </>)
}