import React, {useState} from "react";

const Name = () => {
  const [myName, setMyName] = useState(""); // 이름이 바뀔 때마다 저장해주는 state
  const [nickName, setNickname] = useState(""); // 닉네임이 바뀔 때마다 저장해주는 state

  const handleName = (e) => {
    setMyName(e.target.value); // 입력된 값을 상태 변화 함수 setMyName 을 통해 myName 에 저장해준다.
  };

  const handleNickName = (e) => {
    setNickname(e.target.value); // 입력된 값을 상태 변화 함수 setNickName 을 통해 nickName 에 저장해준다.
  };

  return (
    <div className="name">
      {/* 각 input 태그에 onChange 이벤트 핸들러를 부여해서, 값이 변경될 때마다 각 함수를 실행시키도록 함 */}
      <input name="myName" value={myName} placeholder="이름을 입력해주세요" onChange={handleName} />
      <input name="nickName" value={myName} placeholder="닉네임을 입력해주세요" onChange={handleNickName} />

      {/* 이름/닉네임이 입력되지 않으면 "아직 이름/닉네임이 없습니다"를, 입력되었으면 입력한 값이 출력되도록 삼항연산자를 사용함 */}
      <p>이름: {myName === "" ? "아직 이름이 없습니다." : myName}</p>
      <p>닉네임: {nickName === "" ? "아직 닉네임이 없습니다." : nickName}</p>
    </div>
  );
};

export default Name;
