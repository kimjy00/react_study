import { useRef, useState } from "react";


const DiaryEditor = () => {
  
  const authorInput = useRef(); // html dom 요소에 접근할 수 있게
  const contentInput = useRef();


  const [state, setState] = useState({
    author : "",
    content : "",
    emotion : 1,
  });

  const handleChangeDiary = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if(state.author.length < 1) {
      authorInput.current.focus() //focus
      return ;
    }

    if(state.content.length < 5) {
      contentInput.current.focus() //focus
      return ;
    }
    alert("저장성공!");
  };

  return (
  <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
      <input
      ref={authorInput}
        name="author"
        type="text"
        value={state.author} 
        onChange={handleChangeDiary}
      />
    </div>
    <div>
      <textarea
        name="content"
        type="text"
        value={state.content}
        onChange={handleChangeDiary}
      />
    </div>
    <div>
      <span> 오늘의 감정점수 : </span> 
      <select 
        name="emotion"
        valie={state.emotion}
        onChange={handleChangeDiary}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
    <div>
      <button onClick={handleSubmit}>일기 저장하기</button>
    </div>
  </div>
  );
};
export default DiaryEditor;