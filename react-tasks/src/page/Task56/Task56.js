import { Link } from 'react-router-dom'
import { useState } from 'react'

function Task56() {
    const [size, setSize] = useState('20')
    return (
        <>
            <h1>Задача 56</h1>
            <p>Изменение размера шрифта с использованием useState: Создайте компонент,
                который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на
                эти кнопки значение font-size изменяется соответствующим образом на +/– 1px
            </p>
            <h1 style={{ fontSize: size }}>Text</h1>
            <button onClick={() => setSize(+size + 1)}>+</button>
            <button onClick={() => setSize(+size - 1)}>-</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task56;