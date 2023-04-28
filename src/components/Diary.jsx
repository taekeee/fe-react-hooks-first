import React, {useState} from "react";

const Diary = () => {
  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // 실습으로 다뤘던 두 문제를 참고하면 충분히 해결할 수 있으실거라 생각합니다!
  const [subject, setSubject]=useState("");
  const [content, setContent]=useState("");

  const handleSubject = (e) => { //onChange 이벤트 동작시, 상태변화함수가 동작한다
    setSubject(e.target.value); //입력된 값을 상태변화함수 setSubject를 통해 subject에 저장
  };

  const handleContent = (e) => { //onChange 이벤트 동작시, 상태변화함수가 동작한다.
    setContent(e.target.value); //입력된 값을 상태변화함수 setContent를 통해 content에 저장
  };

  const handleDelete = () => { //초기화 버튼을 클릭했을 때, 동작하는 함수
   setSubject(""); 
   setContent("");
  };

  const handleComplete = () => {
    alert("제목: "+subject+"\n내용: "+content);
  };

  return (
    <div className="diary">
      <input name="subject" value={subject} placeholder="제목을 입력해주세요" onChange={handleSubject}/> 
      <br />
      <textarea name="content" value={content} placeholder="내용을 입력해주세요" onChange={handleContent}/>
      <br />
      
      <button onClick={handleDelete}>초기화</button>
      <br />
      <button onClick={handleComplete}>입력 완료</button>
    </div>
  );
};

export default Diary;
