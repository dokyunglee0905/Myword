import './App.css';
import React from 'react';

import styles from './Home.module.css';

import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";

import styled, { keyframes } from "styled-components"

import { AiOutlineCheckSquare } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import { BiEdit } from "react-icons/bi";

import {createMywordlist,loadMywordlistFB} from "./redux/modules/mywordlist"

import {db} from "./firebase"
import { 
  collection,
  getDoc, 
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc} from "firebase/firestore";

import { useDispatch } from "react-redux";



function Home() {

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(loadMywordlistFB());
  },[]);


  const history = useHistory();
  // let list = [
  //   { id: "1", word: "안녕하세요", desc: "설명입니다", example: "예시입니다" },
  //   {
  //     id: "2",
  //     word: "안녕하세요1",
  //     desc: "설명입니다1",
  //     example: "예시입니다",
  //   },
  //   {
  //     id: "3",
  //     word: "안녕하세요2",
  //     desc: "설명입니다2",
  //     example: "예시입니다1",
  //   },
  // ]

  const list = useSelector((state) => state.list);
  console.log(list)

  return (

    <div className="App">
      <h1>저는 어떤사람인가요</h1>
      <hr className='line'></hr>

      {list.map((wordlist, index) => {
        return (
          <div className="wordwrap" key={index}>
            <a className='icon'><AiOutlineCheckSquare /> <AiFillEdit /></a>
            <p>예명 : {wordlist.word}</p>
            <p>인상 깊었던 부분 : {wordlist.desc}</p>
            <p>응원의 한마디 : {wordlist.example}</p>
          </div>
        )
      })}

      <Btnplus onClick={() => { history.push("/Detail") }}> <BiEdit className={styles.sizeUp} />  </Btnplus>
    </div>
  );
}

const Btnplus = styled.div`
  float:right;
  margin-right: 30px;
  size : 60;
  color: yellow;
  
`
const BtnFade = keyframes`
  0%{
    transform: none;
  }

  25%{
    transform: scale(2);
  }

  50%{
    transform: scale(1.7);
  }

  75%{
    transform: scale(2.1);
  }

  100{
    transform: none;
  }
`


export default Home;
