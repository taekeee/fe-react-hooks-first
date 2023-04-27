import React, {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // count 값이 바뀔 때마다 저장해주는 state

  const handleDecrease = () => {
    setCount(count - 1); // 상태 변화 함수 setCount에 count - 1 을 전달해주어 count를 1 감소시킨다.
  };

  const handleIncrease = () => {
    setCount(count + 1); // 상태 변화 함수 setCount에 count + 1 을 전달해주어 count를 1 증가시킨다.
  };

  return (
    <div className="counter">
      <p>{count}</p>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleIncrease}>+1</button>
      {/* 각 버튼에 onClick 이벤트 핸들러를 부여해서, 버튼이 클릭되었을 때 각 함수가 실행되도록 함 */}
    </div>
  );
};

export default Counter;
