import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'
import axios from 'axios';

function Task76() {
    const [arr, setArr] = useState(['I', 'am', 'good'])

    const changeBtn = useCallback(function (e) {
        setArr(arr.filter((el) => el != e.target.id))
    },[arr])
    return (
        <>
            <h1>Задача 76</h1>
            <p>Создайте компонент, который отображает список элементов с кнопками
                "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
                Используйте useCallback, чтобы оптимизировать функцию удаления элемента.
            </p>
            <ul>
                {arr.map((el) => <li>{el} <button id={el} onClick={changeBtn}>delete</button></li>)}
            </ul>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task76;