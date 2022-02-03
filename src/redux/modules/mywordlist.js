// mywordlist.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { db } from "../../firebase";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore"

// Actions
const LOAD = 'mywordlist/LOAD';
const CREATE = 'mywordlist/CREATE';


const initailState = {
  list: [
    { id: "1", word: "안녕하세요", desc: "설명입니다", example: "예시입니다" },
    { id: "2", word: "안녕하세요1", desc: "설명입니다1", example: "예시입니다", },
    { id: "3", word: "안녕하세요2", desc: "설명입니다2", example: "예시입니다1", },
    { id: "4", word: "테스트중인데", desc: "과제제출가능하니?", example: "예시입니다1", },
  ],
};

// Action Creators
export function createMywordlist(mywordlist) {
  return { type: CREATE, mywordlist };
}

export function loadMywordlist(all_myword) {
  console.log("hello")
  console.log(all_myword)
  return { type: LOAD, all_myword };
}

//middlewares
const middlewears = [thunk];
const enhancer = applyMiddleware(...middlewears);


export const loadMywordlistFB = () => {
  return async function (dispatch) {
    const myword_date = await getDocs(collection(db, "mywordlist"))
    console.log(myword_date);

    let all_myword = [];

    myword_date.forEach((doc) => {
      console.log(doc.data());
      all_myword.push({ id: doc.id, ...doc.data() })
    });
    
    dispatch(loadMywordlist(all_myword));
  }
}

export const addMywordlistFB = (mywordlist) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "mywordlist"), mywordlist);
    const _mywordlist = await getDocs(docRef);
    const mywordlist_data = { id: _mywordlist.id, ...mywordlist.date() }

    console.log(mywordlist_data);
    dispatch(createMywordlist(mywordlist_data));
  }
}

// Reducer
const myReducer = (state = initailState, action = {}) => {
  switch (action.type) {
    case LOAD: {
      console.log("hiasdfj;alksdjfl; alskd")
      return {list: action.all_myword};
    }
    // 중복돼서 나타나는 원인!
    // case CREATE: {
    //   const new_list = [...state.list, action.card];
    //   //3-9 17:55 <action.card>
    //   return { list: new_list };
    // }
    default:
      return state;
  }
};

const store = createStore(myReducer, enhancer);

export default store;