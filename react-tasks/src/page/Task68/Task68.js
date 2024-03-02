import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function Task68() {
    const btn = useRef()

    function changeText() {
        btn.current.style.display = 'block'
    }
    function changeText1(){
        btn.current.style.display = 'none'
    }
    return (
        <>
            <h1>Задача 68</h1>
            <p>Разработайте компонент для реализации "подсказок" (tooltips). При наведении на
                элемент интерфейса (например, кнопку), компонент отображает подсказку с
                текстом. Подсказку можно закрыть, кликнув по ней, используя useRef.
                (onMouseEnter)
            </p>
            <div ref={btn} style={{ display: 'none' }}>Подсказка</div>
            <button onMouseEnter={changeText} onMouseLeave={changeText1}>click me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task68;