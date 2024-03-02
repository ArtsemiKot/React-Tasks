import { Link } from 'react-router-dom'
import { useEffect, useRef,useMemo, useState } from 'react'

function Task71() {
    const [num, setNum] = useState(0);
    function getNum(e) {
        setNum(e.target.value)
    }

    const countFactorial = useMemo(() => {
        let result = 1
        for (let i = 1; i <= num; i++) {
            result *= i
        }
        return result;
    }, [num])
    return (
        <>
            <h1>Задача 71</h1>
            <p>Разработайте компонент, который выполняет факториал числа при вводе
                значения в текстовое поле. Используйте useMemo, чтобы кэшировать результаты
                вычислений для разных введенных значений и отображать их без повторных
                вычислений.
            </p>
            <input onChange={getNum}></input>
            <h1>{countFactorial}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task71;