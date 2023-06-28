import NoteItem from "./components/noteItem"
import Footer from "./components/footer"
import Input from "./components/input"
import React ,{useState} from "react"



function App() {
  const [notes, setNotes]=useState([])
  function addNote(note){
setNotes((prev)=>{
  return [...prev,note]
})


  }
  function Delete(id) {
    setNotes((prev) => {
      return prev.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
   
<div class="fluid-container">
    <div class="row" id="note-header">
        <div class="col-lg-12">
            
            <h1>
                <i class="fa-solid fa-notes"></i>
                Note Keeper App
            </h1>
        </div>
    </div>
</div>


<Input 
onAdd={addNote}

/>



<div class="row" id="note">

{notes.map((noteItem,index)=>{
  return (<NoteItem
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={Delete}
  />)
})}
   


</div>

<div class="row" id="footer">
<Footer/>
</div>
</>

  );
}

export default App;
