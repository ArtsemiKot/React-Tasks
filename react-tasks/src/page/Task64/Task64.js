import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function Task64() {
    const h1 = useRef()
    // const [pix, setPix] = useState(18)
    // function clickButton() {
    //     setPix(pix + 1)
    // }
    function clickButton() {
        h1.current.style['font-size'] = parseInt(h1.current.style['font-size']) + 1 + 'px'
    }
    return (
        <>
            <h1>Задача 64</h1>
            <p>Создайте компонент, который при каждом клике на кнопку увеличивает размер
                шрифта текста в элементе на странице
            </p>
            {/* <h1 ref={h1} style={{ fontSize: pix }}>hi</h1> */}
            <h1 ref={h1} style={{ fontSize: 18 }}>hi</h1>
            {/* <button onClick={clickButton}>click me</button> */}
            <button onClick={clickButton}>click me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task64;