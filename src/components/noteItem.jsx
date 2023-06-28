import React from 'react'

function noteItem(props) {
    function handleClick(){
        props.onDelete(props.id);
    }
  return (
    <>
    <div class="col-lg-4" id="note-item">
        <h1> {props.title}</h1>
        <hr/>
        <p> {props.content}</p>
        <hr/>
        <button onClick={handleClick}> <i class="fa-solid fa-delete-left"></i> Delete</button>
    </div>
    
    </>

  )
}

export default noteItem