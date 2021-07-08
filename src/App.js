import './component/Style.css';

import { BrowserRouter,Route} from 'react-router-dom';
import { useState } from 'react';
import {data} from "./component/Data"
import Nav1 from "./component/Navbar"
import Carous from "./component/Carous"
import Form1 from "./component/Forms"
import Listtour from './component/Listtour';
import Add from "./component/Add"
import Tourplace from "./component/Tourplace"

function App() {
  const [listtour,setListtour]=useState(data)
  const [search,setSearch]=useState("")
  return (  <BrowserRouter>
    <div className="App">
      <Nav1 setSearch={setSearch}/>      
     <Route exact path="/" component={Carous}></Route> 
     <Route exact path="/tour" render={(props)=><Listtour  search={search} listtour={listtour} setListtour={setListtour} />}></Route>
     <Route path="/tour/:Idtour" render={(props)=><Tourplace listtour={listtour} {...props}/>}></Route>
     <Route path="/addnewtourbar"  render={(props) =><Add listtour={listtour} setListtour={setListtour} {...props}/>}></Route>
    </div>   
      </BrowserRouter>

  );
}

export default App;
