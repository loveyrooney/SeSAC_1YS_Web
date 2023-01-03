import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader'; 
//컴포넌트를 파일로 불러오지 않고 function MainHeader(){} 해가지고 써도 된다
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';

function App() {
  const str = "hello, react!";
  function amazingJSX(){
    alert('wow');
  }
  const test = "test";
  //const style = {} 해가지고 이거를 그냥 스타일속성에 넣어도 된다
  //온클릭 등 이벤트 지정이나 클래스네임 정할때 카멜케이스로 작성
  //온클릭 이벤트 안에 익명함수 지정하고 내용 만들기. 안만들면 바로실행(불안정)

  //실습
  const helloStr = "Hello, first exercise";
  
  return (
    <div className="App">
      {/* <h1>{str}</h1>
      <button onClick={amazingJSX}>alert</button> 
      <img src={logo} alt="logo"/>
      <div className={test} style={{backgroundColor:"yellow", fontSize:"2em"}}>inline style</div>
      <span onMouseOver={()=>{ let num=10; num+= 5; console.log(num);}}>here</span> */}
      {/* <div style={{marginTop:"32px", backgroundColor:"skyblue"}} 
            onClick={()=>{alert("클릭 됨")}}>{helloStr}</div> */}
      {/* <MainHeader/> */}
      <ImgComponent/>
      <BtnToNaver/>

    </div>
  );
}

export default App;
