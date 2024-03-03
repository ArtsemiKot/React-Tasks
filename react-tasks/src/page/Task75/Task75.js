import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'
import axios from 'axios';

function Task75() {
    const [num, setNum] = useState(0)

    const changeBtn = useCallback(() => {
        setNum(num + 1)
    })
    return (
        <>
            <h1>Задача 75</h1>
            <p>Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
                счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
                оптимизировать обработчик клика на кнопке.
            </p>
            <button onClick={changeBtn}>click me</button>
            <h1>{num}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task75;