import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState } from 'react'
import axios from 'axios';

function Task77() {
    const [value, setValue] = useState('Неактивный')

    const changeBtn = useCallback(function (e) {
        value == 'Неактивный'? setValue('Активный'):setValue('Неактивный')
    },[value])
    return (
        <>
            <h1>Задача 77</h1>
            <p>Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
                на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
                Используйте useCallback, чтобы оптимизировать функцию изменения статуса.
            </p>
            <p>{value}</p>
            <button onClick={changeBtn}>Изменить статус</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task77;