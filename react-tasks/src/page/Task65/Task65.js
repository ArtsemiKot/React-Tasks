import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function Task65() {
    const h1Color = useRef()
    const arrColor = ['green', 'red', 'gray']
    function changeColor() {
        h1Color.current.style.color = arrColor[Math.floor(Math.random() * 3)]
    }
    return (
        <>
            <h1>Задача 65</h1>
            <p>Менять цвет текста
            </p>
            <h1 ref={h1Color} style={{ color: 'black' }}>Привет</h1>
            <button onClick={changeColor}>Click me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task65;