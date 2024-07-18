import classes from './Button.module.css';
import {useState} from "react";

// import {moveLeftFunction} from "../functions.jsx";

function Button(props) {

    const [zIndex, setZIndex] = useState(1);

    const [toggleValue, setToggleValue] = useState(false);

    let btnClasses = [];
    btnClasses.push(classes.button);
    // eslint-disable-next-line react/prop-types
    if (props.position === 'top-left') {
        btnClasses.push(classes.button__TopLeft);
    }
    // eslint-disable-next-line react/prop-types
    else if (props.position === 'top-right') {
        btnClasses.push(classes.button__TopRight);
    }
    // eslint-disable-next-line react/prop-types
    else if (props.position === 'bottom-left') {
        btnClasses.push(classes.button__BottomLeft);
    }
    else{
        btnClasses.push(classes.button__BottomRight);
    }

    const [classListState, setClassListState] = useState(arrayToString())

    const toggle = () => {
        setToggleValue(!toggleValue);
    }

    function arrayToString() {
        let res = "";
        btnClasses.forEach(item => {
            res = res + " " + item;
        })
        return res;
    }

    function moveRightFunction() {
        setZIndex(2);
        btnClasses.push(classes.button__moveRight)
        setClassListState(arrayToString());
        setTimeout(() => {
            moveLeftFunction();
        }, 2000)
    }

    function moveLeftFunction() {
        btnClasses.pop();
        btnClasses.push(classes.button__moveLeft);
        setClassListState(arrayToString());
        setTimeout(() => {
                setZIndex(1);
                btnClasses.pop();
            }
            , 1000)
    }

    function toggleMovement(){
        if (!toggleValue) {
            setZIndex(2);
            btnClasses.push(classes.button__moveTopDownGreen);
        }
        else{
            setZIndex(1);
            btnClasses.push(classes.button__moveBottomUpGreen);
        }
        setClassListState(arrayToString());
    }

    function moveCircular(){
        setZIndex(2);
        btnClasses.push(classes.button__moveRight);
        setClassListState(arrayToString());
        setTimeout(()=>{
            btnClasses.push(classes.button__moveUp);
            setClassListState(arrayToString());
        },2000 );
        setTimeout(()=>{
            btnClasses.push(classes.button__moveTopLeft);
            setClassListState(arrayToString());
        },3500);
        setTimeout(()=>{
            btnClasses.push(classes.button__moveDown);
            setZIndex(1);
            setClassListState(arrayToString());
        },5000);
    }


    return (
        <button className={classListState} style={{zIndex}} onClick={btnClasses.includes(classes.button__TopLeft) ? () => moveRightFunction() :
            btnClasses.includes(classes.button__TopRight) ? () =>{ toggle(); toggleMovement() }:
                btnClasses.includes(classes.button__BottomLeft) ? () =>{ moveCircular() }:console.log("yellow")}>
            {/* eslint-disable-next-line react/prop-types */}
            Square{props.num}
        </button>
    );
}

export default Button;