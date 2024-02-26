import { Link } from 'react-router-dom'
import { useState } from 'react'

function Task52() {
    const [inp, inpValue] = useState('')
    const [flage, setFlage] = useState(false)
    function getValue(event) {
        inpValue(event.target.value)
    }

    function clickButton() {
        if (!flage) {
            setFlage(true)
        } else {
            setFlage(false)
        }
    }
    return (
        <>
            <h1>Задача 52</h1>
            <p>Отображение текста с использованием useState: Создайте компонент, который
                предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
                отображается текст, а при нажатии на "Скрыть" текст скрывается.
            </p>
            <h1>{inp}</h1>
            <input onChange={getValue}></input>
            <button onClick={clickButton}>Показать</button>
            <button onClick={clickButton}>Скрыть</button>
            {flage ? <h1>{inp}</h1> : null}
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task52;