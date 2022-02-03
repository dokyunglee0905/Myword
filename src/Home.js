import './App.css';
import React from 'react';

import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//스타일 import
import styled from "styled-components"
import { BiEdit } from "react-icons/bi";


import { loadMywordlistFB } from "./redux/modules/mywordlist"





function Home() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadMywordlistFB());
  }, []);


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
    
    <Main>
      <h1>나만의 단어장</h1>
      <Line />

      <Container>
        {list.map((wordlist, index) => {
          return (
            <WordCard key={index}>
              <p>단어 : {wordlist.word}</p>
              <p>설명 : {wordlist.desc}</p>
              <p>예시 : {wordlist.example}</p>
            </WordCard>
          )
        })}
      </Container>
      <Btnplus onClick={() => { history.push("/Detail") }}> <BiEdit size='50' />  </Btnplus>
    </Main>
  );
}

const Main = styled.div`
  width: 100vw;
  margin: auto;

`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 30px;
    margin: 60px;

    justify-content: center; /* 수평 가운데 정렬 */

`

const Line = styled.hr`
  border-color: yellow;
  letter-spacing: 100px;
`

const WordCard = styled.div`
  position: relative;
  width: 350px;
  padding: 20px;
  border: 2px solid yellow;
  border-radius: 10px;
  text-align: left;
  font-size: 20px;
 
`

const Btnplus = styled.div`
  float:right;
  margin-right: 30px;
  size : 60;
  color: yellow;
  transition-duration: 0.5s;
  &:hover { transform: rotate(90deg); }
  
`

export default Home;
