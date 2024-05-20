//import React, { useState, useEffect } from "react";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import './App.css';

const dummyList = [
  {
    id : 1,
    author : "김재윤",
    content : "하이 1",
    emotion : 5,
    created_date : new Date().getTime() // 괄호안에 아무것도 넣지 않으면 현재 시간을 알려줌
  },
  {
    id : 2,
    author : "승용",
    content : "하이 2",
    emotion : 5,
    created_date : new Date().getTime() // 괄호안에 아무것도 넣지 않으면 현재 시간을 알려줌
  },
  {
    id : 3,
    author : "태원",
    content : "하이 3",
    emotion : 5,
    created_date : new Date().getTime() // 괄호안에 아무것도 넣지 않으면 현재 시간을 알려줌
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;
