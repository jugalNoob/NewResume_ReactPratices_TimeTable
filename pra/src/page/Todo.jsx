import React from 'react';
import { useParams } from 'react-router-dom';

function Todo() {

    const { id } = useParams(); // Access the id from the URL

    console.log(id ,"url")

  return (
    <div>
    <h1>todo list</h1>
    </div>
  )
}

export default Todo
