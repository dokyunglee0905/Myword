
import React, { useRef } from 'react';
import './App.css';
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components"
import { createMywordlist, addMywordlistFB } from "./redux/modules/mywordlist"

function Detail() {
  const history = useHistory();
  const dispatch = useDispatch();


  const wordInput = useRef();
  const desInput = useRef();
  const exampleInput = useRef();


  const addword = () => {
    const id = Date.now()
    const new_word = wordInput.current.value
    const new_des = desInput.current.value
    const new_ex = exampleInput.current.value
    const all_word = { id: id, middlewearsword: new_word, desc: new_des, example: new_ex }

    // dispatch(createMywordlist(all_word));

    dispatch(addMywordlistFB(all_word));

  }

  return (
    <div className="App">
      <h1>중국어 단어장</h1>
      <hr className='line'></hr>
      <div className='wordmemo'>

        <h3>단어<InputBox type="text" ref={wordInput} /></h3>
        <h3>설명<InputBox type="text" ref={desInput} /></h3>
        <h3>예문<InputBox type="text" ref={exampleInput} /></h3>

        <SaveBtn onClick={() => {
          addword()
          history.push("/")

        }}>저장하기</SaveBtn>


      </div>

    </div>
  );
}

const WordDemo = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  max-width: 400px;
  margin: 50px auto;
`

const InputBox = styled.input`

  border-style:none;
  border-bottom:solid 1px yellow;
  border-collapse:collapse;
  margin: 5px;
  text-align: left;
  font-size: 20px;
`

const SaveBtn = styled.button`
  background-color: #ffcc00;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  width: 200px;
  margin: 10px auto 20px;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
`

export default Detail;
