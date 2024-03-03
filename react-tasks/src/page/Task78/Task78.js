import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'
import axios from 'axios';

function Task78() {
    const [color, setColor] = useState()

    const chooseColor = useCallback(function (e) {
        setColor(e.target.textContent)
    }, [color])
    
    return (
        <>
            <h1>Задача 78</h1>
            <p>Создайте компонент, который предоставляет пользователю выбор цвета из
                списка. При выборе цвета, компонент должен отображать выбранный цвет на
                странице. Используйте useCallback, чтобы оптимизировать функцию выбора
                цвета.
            </p>
            <h1 style={{ backgroundColor: color }}>Текст</h1>
            <ul>
                <li onClick={chooseColor}>red</li>
                <li onClick={chooseColor}>blue</li>
                <li onClick={chooseColor}>gray</li>
            </ul>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task78;