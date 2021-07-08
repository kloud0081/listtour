import { BrowserRouter,Route,Link ,Switch} from 'react-router-dom';
import {Button,Card} from 'react-bootstrap';
import { useState } from 'react';
export default function Touritem({list,listtour,setListtour}){
    const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};
 const delet =(id)=> setListtour(listtour.filter(el=>el.id!==id))
    return (<>
        <Card  className="pro" >
  <Card.Img variant="top" src={list.image} />
  <Card.Body>
    <Card.Title>{list.name}</Card.Title>
    <Card.Text className="textc" >
   <div className="readmore">
     <div> {isReadMore ? list.info.slice(0, 150) : list.info}</div> 
     <div className="price1"> <button style={{border: 'none',backgroundColor:"white",color:"deeppink",textDecoration:"underline"}} onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </button></div>
      <div className="price2"><span>{list.price}</span></div>
    </div>
    <div className="delet"><Button style={{backgroundColor: "hotpink",color:"white",width:"140px",height:"40px"}} onClick={()=>delet(list.id)}> not interseted</Button></div>
   <div><Link style={{ textDecoration: 'none' }} to={"/tour/"+list.id} >More details </Link></div> 

     </Card.Text>
    
  </Card.Body>
</Card>
        </>)
}