import { Link } from 'react-router-dom'
import { useEffect, useRef, useState, useMemo } from 'react'

function Task72() {
    const [num, setNum] = useState(0);
    function getNum(e) {
        setNum(e.target.value)
    }

    const countSum = useMemo(() => {
        let result = 0
        for (let i = 1; i <= num; i++) {
            result += i
        }
        return result;
    }, [num])
    return (
        <>
            <h1>Задача 72</h1>
            <p>Создайте компонент для отображения списка чисел от 1 до N, где N - число,
                введенное пользователем с клавиатуры. Используйте useMemo, чтобы вычислить
                сумму списка чисел только при изменении N.
            </p>
            <input onChange={getNum}></input>
            <h1>{countSum}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task72;