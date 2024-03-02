import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function Task66() {
    // const inp = useRef()
    // const arrColor = ['green', 'red', 'gray']
    // function changeBackground() {
    //     inp.current.style.backgroundColor = arrColor[Math.floor(Math.random() * 3)]
    // }

    const [color, setColor] = useState()
    const arrColor = ['green', 'red', 'gray']
    function changeBackground() {
        setColor(arrColor[Math.floor(Math.random() * 3)])
    }
    return (
        <>
            <h1>Задача 66</h1>
            <p>Создайте компонент, который при фокусе на текстовом поле добавляет
                background (onFocus, onBlur)
            </p>
            {/* <input ref={inp} onFocus={changeBackground}></input> */}
            <input style={{ backgroundColor: color }} onFocus={changeBackground}></input>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task66;