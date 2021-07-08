import { Link } from 'react-router-dom';
import {Button,Card} from 'react-bootstrap';

export default function Tourplace(props){

    const x=props.listtour.find(el=>{return el.id.toString()===props.match.params.Idtour})

    return(<div style={{marginLeft: '400px',marginTop:"20px" ,width: '500px',height:"500px" }}>

<Link to="/"><Button style={{marginLeft: '40%'}} >back to home</Button></Link>
<Card style={{marginTop:"20px" }} >
   <Card.Img variant="top" src={x.image} /> 
  <Card.Body>
    <Card.Title>{x.name}</Card.Title>
    <Card.Text>
      {x.info}
    </Card.Text>
  </Card.Body>
</Card>
    </div>)
}