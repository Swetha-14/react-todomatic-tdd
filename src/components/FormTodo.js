import React from "react";
import { Button, Form } from 'react-bootstrap';

  function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit} data-testid="form"> 
        <Form.Control autoFocus type="text" data-testid="todotask" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add a new todo" />
        <Button variant="primary mb-3" data-testid="sendButton" type="submit">Add</Button>
    </Form>
    );
  }  


export default FormTodo;