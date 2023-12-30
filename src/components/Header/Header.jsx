import Image from "../../assets/react-core-concepts.png";
import './Header.css';

const descriptions=["Fundamentals","Props","State"];


function getRandomDesc(max){
  return Math.floor(Math.random()*(max+1));
}


export default function Core(){
  const getRandom= descriptions[getRandomDesc(2)];
    return(
        <header>
        <img src={Image} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {getRandom} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    )
}