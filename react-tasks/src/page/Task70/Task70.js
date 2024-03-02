import { Link } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'

function Task70() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    function getNum1(e) {
        setNum1(e.target.value)
    }
    function getNum2(e) {
        setNum2(e.target.value)
    }

    const countSum = useMemo(() => {
        return +num1 + +num2
    }, [num1, num2])

    return (
        <>
            <h1>Задача 70</h1>
            <p>Создайте компонент React, который отображает сумму двух чисел. Используй хук
                useState для хранения значений чисел и хук useMemo для кэширования
                результата суммы. При изменении значений чисел, сумма должна
                пересчитываться только тогда, когда необходимо
            </p>
            <input onChange={getNum1}></input>
            <input onChange={getNum2}></input>
            <h1>{countSum}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task70;