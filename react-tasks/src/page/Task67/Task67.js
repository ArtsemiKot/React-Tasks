import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function Task67() {
    const btn = useRef(0)
    function clickButton() {
        btn.current++
        console.log(btn.current);
    }
    return (
        <>
            <h1>Задача 67</h1>
            <p>Реализуйте компонент, который отслеживает количество кликов на кнопку с
                помощью useRef и выводит это число при каждом клике.
            </p>
            <button onClick={clickButton}>click me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task67;