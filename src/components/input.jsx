import React,{useState} from 'react'

function Input(props) {
    const [note , setNote]=useState({
        title:"",
        content:""
    })
    const [isClick,setClick]=useState(false)

    function changeHandle(event){
        const {value,name}=event.target;
        setNote((prev)=>{
            return {...prev,[name]:value}
        })
        

    }
    function submitNote(event) {
        props.onAdd(note);
        event.preventDefault();
      }
      function clickHandle(){
        setClick(!isClick);
      }
  return (
    
<div class="row" id="form" style={{height: isClick? "190px":"100px"}}>
   
    <div class="col-lg-12">
      <form action="">
        <input 
       onClick={clickHandle}
        onChange={changeHandle}
        type="text" 
        name="title"
        value={note.title}
        placeholder="Enter Title here " /><br />




        <textarea 
        onChange={changeHandle}
        name="content"
        value={note.content} 
        id=""
         cols="100" 
         rows= {isClick ? "3" :"0"} 
         placeholder="Enter Description here" 
         style={{ visibility: isClick ?"visible":"hidden" }}>

         </textarea><br />



        <button onClick={submitNote} style={{ visibility: isClick? "visible":"hidden" }}> <i class="fa-sharp fa-solid fa-plus"></i> Add</button>
      </form>
    </div>
</div>
  )
}

export default Input;