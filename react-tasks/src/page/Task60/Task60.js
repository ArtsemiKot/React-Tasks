import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Task60() {
    const [num, setNum] = useState(0)

    useEffect(() => {
        setTimeout(() => setNum(+num + 1), 1000)
    }, [num])
    return (
        <>
            <h1>Задача 60</h1>
            <p>Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
                который увеличивает значение счетчика на 1 каждую секунду с использованием
                useEffect.
            </p>
            {num}
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task60;