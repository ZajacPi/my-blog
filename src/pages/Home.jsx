 import "../css/Home.css"

import { ReactTyped } from "react-typed";

export default function Home(){

    return(
        <div className="home">
            <h1 className="title"> Hi! My name is Piotrek, and I am studying engineering!</h1>
            <h2>I am working on {" "}
                <ReactTyped 
                className="typed-text"
                strings = {["React", "Javascript", "HTML", "CSS", "Matlab", "Python", "3D Printing", "CAD design", "STM32", "RaspberryPi", "Arduino", "ESP32", "C++", "Machine learning", "Robotics"]} 
                typeSpeed={100}
                backSpeed={40}
                loop />
            </h2>
        </div>
    )
}