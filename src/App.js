import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoLists from './comp/TodoLists'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,InputGroup,FormControl,Button,Card} from 'react-bootstrap';
import React from 'react';

const App = () => {

  const [inputItem,setInputItem] = useState("");
  const [items,setItems] = useState([]);

  const inputITemChange = (event) => {
    setInputItem(event.target.value)
  }

  const btnClick = () => {
    setItems((olditems) => {
      return[...olditems,inputItem];
    })

    setInputItem("")
  }

  const deleteItem = (id) => {
    setItems((olditems) => {
      return olditems.filter((arrayitem,index) => {
        return index !==id;
      })

    })
  }
  return (
    <React.Fragment>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Todo List</Nav.Link>
      
    </Nav>
    
  </Navbar>
   
    <div className="container">

  
  


 
      <div className="row mt-3">
          <div className="col-lg-4">
          </div>
      
          <div className="col-lg-4 bg-primary shadow rounded">
            

      <h3 className="mb-2 mt-4 text-light" style={{textAlign:"center"}}>Todo List App</h3>
      <InputGroup className="mb-3">
    <FormControl
      placeholder="enter todo task"
      value={inputItem}
      onChange={inputITemChange}
      type="text"
      
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary rounded btn-success" onClick={btnClick}>+</Button>
    </InputGroup.Append>
  </InputGroup>
      
      
      <div className="row">
            <ol className="mb-2 text-light">
                {
                  items.map((value,index) => {
                      return (<TodoLists
                        text={value}
                        key = {index}
                        id = {index}
                        className="mb-2 text-light"
                        onSelect = {deleteItem}/>)
                  })
                }
            </ol>
        </div>
        </div>
        </div>
    </div>
    </React.Fragment>
  );
}

export default App;
