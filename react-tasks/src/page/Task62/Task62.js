import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Task62() {
    const [time, setTime] = useState('');

    function getTime() {
        const date = new Date();
        const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        const minuts = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        setTime(`${hours}:${minuts}:${seconds}`);
    }

    useEffect(() => {
        setInterval(() => getTime(), 1000);
    }, [])
    return (
        <>
            <h1>Задача 62</h1>
            <p>Таймер с использованием useState и useEffect: Создайте компонент, который
                отображает текущее время и обновляет его каждую секунду.
            </p>
            <h1>{time}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task62;