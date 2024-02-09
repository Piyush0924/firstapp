import React from "react";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table';
import  InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";


const Todolist=()=>{

    const [todo,setTodo]=React.useState([])
 const savehandler=(e)=>{
    // const val=e.target.value;
    setTodo([...todo,todotext])
 }

 //state variable for the input puting and saving
 const [todotext,setTodotext]=React.useState("")
 const onKeyUpHandler=(e)=>{
   setTodotext(e.target.value);
    
 }

return (
    <div className="container my-5">
        <div className="form">
        <InputGroup className="mb-1">
        <Form.Control
          placeholder="Todo item"
          aria-label="Todo item"
          aria-describedby="basic-addon2"
          onKeyUp={onKeyUpHandler}
        />
        <Button onClick={savehandler}variant="outline-secondary" id="button-addon2">
          Save
        </Button>
      </InputGroup>
        </div>
        <Table striped bordered hover>
      <tbody>
       {todo.map(el=>
       (
                <tr>
                <td>{el}</td>
                </tr>
       ))
    }
       
      </tbody>
      </Table>
    </div>
   
) 


};export default Todolist;