import { useEffect, useRef, useState } from "react";

function App() {
  /* 状態変数(State)を定義する */
  const [name, setName] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [Aikotoba, setAikotoba] = useState("");
  const nameForm = useRef("");
  const dateofbirthForm = useRef(null);
  const AikotobaForm = useRef(null);

  /* コンポーネントが表示されたときの処理を定義する */
  useEffect(() => {
    alert("「OK」ボタンを押さないでください");
  }, []);

  

  /* フォームに入力された値を画面に反映する */
  const handleSubmitText = () => {
    setName(nameForm.current.value);
    setDateofbirth(dateofbirthForm.current.value);
    setAikotoba(AikotobaForm.current.value);
  };

  /* 画面のテキストとフォームの値をクリアする */
  const handleClearText = () => {
    setName("");
    setDateofbirth("");
    setAikotoba("");
    nameForm.current.value = "";
    dateofbirthForm.current.value = "";
    AikotobaForm.current.value = "";
  };

  /* お楽しみ */
  const handleSubmitText2 = () => {
    setName("バァ！！！");
    setDateofbirth("(/・ω・)/");
    setAikotoba("(-_-)zzz");
    nameForm.current.value = "ていうか";
    dateofbirthForm.current.value = "もう";
    AikotobaForm.current.value = "寝よう";
  };


  return (
    <div className="App">

      <p>犬派ですか？
      
        <button type="button" onClick={handleSubmitText}>
          いいえ、超犬派です
        </button>
        <button type="button" onClick={handleClearText}>
          はい、犬派です
        </button>  
      </p>

      <p>キャンセルしますか？
      
        <button type="button" onClick={handleSubmitText}>
          キャンセル
        </button>
        <button type="button" onClick={handleClearText}>
          はい
        </button>  
      </p>

      <p>誕生日に生まれましたか？
      
        <button type="button" onClick={handleSubmitText}>
          いいえ
        </button>
        <button type="button" onClick={handleClearText}>
          はい
        </button>  
      </p>

      <img src="https://mag.anicom-sompo.co.jp/wp-content/uploads/2018/11/7863_1.jpg" alt="説明内容"></img><img src="https://mag.anicom-sompo.co.jp/wp-content/uploads/2018/11/7863_1.jpg" alt="説明内容"></img>
      <img src="https://mag.anicom-sompo.co.jp/wp-content/uploads/2018/11/7863_1.jpg" alt="説明内容"></img><img src="https://mag.anicom-sompo.co.jp/wp-content/uploads/2018/11/7863_1.jpg" alt="説明内容"></img>

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
        <label>
          合言葉：
          <input type="text" ref={AikotobaForm} />
        </label>
      </p>
      <p>
        <button type="button" onClick={handleSubmitText}>
          表示
        </button>
        <button type="button" onClick={handleClearText}>
          クリア
        </button>
        <button type="button" onClick={handleSubmitText2}>
          押すな！
        </button>
        
      </p>
      <p>あなたが入力した姓名：{name}</p>
      <p>あなたが入力した生年月日：{dateofbirth}</p>
      <p>あなたが入力した合言葉：{Aikotoba}</p>
      <p>ページの中身</p>
      <h1>犬派です</h1>
      <h2>犬派です</h2>
      <h3>犬派です</h3>
      <h4>太派です</h4>
      <h5>大派です</h5>
      <h6>猫派でs...</h6>
      <img src="https://mag.anicom-sompo.co.jp/wp-content/uploads/2018/11/7863_1.jpg" alt="説明内容"></img>
      <p>改めて聞きます。犬派ですか？
      
        <button type="button" onClick={handleSubmitText}>
          はい
        </button>
        <button type="button" onClick={handleClearText}>
          はい
        </button>  
      </p>
    </div>
  );
}

export default App;