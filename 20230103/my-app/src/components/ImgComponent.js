import img from "../air.png";
//src 폴더 내부에 있는것만 임포트할 수 있음. 
//더 상위 경로에 있는 것을 부르려면 그냥 <img src ="/file.jpg"> 하면 public에 있는 이미지 불러오게됨
//리액트에는 node 미들웨어 기능이 기본 적용되어 있음!

function ImgComponent(){
    return (
        <img src={img}/>
    )
}

export default ImgComponent;
