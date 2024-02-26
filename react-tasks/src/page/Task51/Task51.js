import { Link } from 'react-router-dom'
import { useState } from 'react'

function Task51() {
    const [inp, inpValue] = useState('')

    function getValue(event) {
        inpValue(event.target.value)
    }
    return (
        <>
            <h1>Задача 51</h1>
            <p>Форма с использованием useState: Создайте компонент текстового поля, который
                позволяет пользователю вводить текст и отображает его в реальном времени.
            </p>
            <h1>{inp}</h1>
            <input onChange={getValue}></input>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task51;