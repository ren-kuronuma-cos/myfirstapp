import { useEffect, useRef, useState } from "react";

function App() {
  /* 状態変数(State)を定義する */
  const [name, setName] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const nameForm = useRef("");
  const dateofbirthForm = useRef(null);

  /* コンポーネントが表示されたときの処理を定義する */
  useEffect(() => {
    alert("こんにちは！");
  }, []);

  /* フォームに入力された値を画面に反映する */
  const handleSubmitText = () => {
    setName(nameForm.current.value);
    setDateofbirth(dateofbirthForm.current.value);
  };

  /* 画面のテキストとフォームの値をクリアする */
  const handleClearText = () => {
    setName("");
    setDateofbirth("");
    nameForm.current.value = "";
    dateofbirthForm.current.value = "";
  };

  return (
    <div className="App">
      <p>
        <label>
          姓名：
          <input type="text" ref={nameForm} />
        </label>
      </p>
      <p>
        <label>
          生年月日：
          <input type="text" ref={dateofbirthForm} />
        </label>
      </p>
      <p>
        <button type="button" onClick={handleSubmitText}>
          表示
        </button>
        <button type="button" onClick={handleClearText}>
          クリア
        </button>
      </p>
      <p>あなたが入力した姓名：{name}</p>
      <p>あなたが入力した生年月日：{dateofbirth}</p>
    </div>
  );
}

export default App;