import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function Task69() {
    const colorH1 = useRef()
    const arrColor = ['black', 'red', 'green']
    function changeColor() {
        colorH1.current.style.color = arrColor[Math.floor(Math.random() * 3)]
    }
    return (
        <>
            <h1>Задача 69</h1>
            <p>Создайте компонент, который по клику на кнопку добавляет рандомный color к
                заголовку
            </p>
            <h1 ref={colorH1} style={{ color: colorH1 }}>Заголовок</h1>
            <button onClick={changeColor}>Click me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task69;