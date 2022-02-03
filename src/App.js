
import './App.css';
import { Route, Switch } from "react-router-dom"
import {db} from "./firebase"
import { 
  collection,
  getDoc, 
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc} from "firebase/firestore";


import {createMywordlist,loadMywordlistFB} from "./redux/modules/mywordlist"  
import { useDispatch } from "react-redux";

/*페이지 링크 import*/
import Home from './Home';
import Detail from './Detail';
import NotFound from './NotFound';
import React, { useEffect } from 'react';



function App() {

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(loadMywordlistFB());
  },[]);

  // 데이터 가져오는거!!!!
  // React.useEffect(async() => {
  //   const query = await getDocs(collection(db, 'homework'));
	// 	console.log(query);
  //   query.forEach((doc) => {
  //     console.log(doc.id, doc.data());
  //   });
  // }, []);

  // 데이터 추가하기!!!!!
  // const docRef = await addDoc(collection(db, 'bucket'), {
  //   completed: false,
  //   text: "new"
  // })

    // 데이터 수정하기!!
  // React.useEffect(async() => {
  //   const docRef = doc(db, "bucket", "UmvcDHwKAlapREwiK8iM");
  //   await updateDoc(docRef, {
  //     completed: true,
  //   });


  //데이터 삭제하기!!!
  // React.useEffect(async() => {
  //   const docRef = doc(db, "bucket", "UmvcDHwKAlapREwiK8iM");
  //   await deleteDoc(docRef);


  return (
    <div className="App">
      <div >
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/Detail" exact><Detail /></Route>
          <Route><NotFound /></Route>

        </Switch>

      </div>
    </div>
  );
}

export default App;
