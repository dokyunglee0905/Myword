
import React,{useRef} from 'react';
import './App.css';
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import {createMywordlist,addMywordlistFB} from "./redux/modules/mywordlist"

function Detail() {
  const history = useHistory();
  const dispatch = useDispatch();


  const wordInput = useRef();
  const desInput = useRef();
  const exampleInput = useRef();


  const addword =()=>{
    const id = Date.now()
    const new_word= wordInput.current.value
    const new_des= desInput.current.value
    const new_ex = exampleInput.current.value 
    const all_word = {id:id, middlewearsword: new_word, desc:new_des,example:new_ex}

    // dispatch(createMywordlist(all_word));

    dispatch(addMywordlistFB(all_word));
    
  }


  return (
    <div className="App">
      <h1>중국어 단어장</h1>
      <hr className='line'></hr>
      <div className='wordmemo'> 
      
      <label>단어</label><input type ="text" ref={wordInput}/>
      <label>설명</label><input type ="text" ref={desInput}/>
      <label>예문</label><input type ="text" ref={exampleInput} />
   
      <button className="savebtn" onClick={()=>{
       addword()
       history.push("/") 
     
     }}>저장하기</button>
      
      
      </div>
     
    </div>
  );
}


export default Detail;
