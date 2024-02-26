import { Link } from 'react-router-dom'
import { useState } from 'react'

function Task53() {
    const [color, setColor] = useState('black')

    function getNewColor(event) {
        setColor(event.target.textContent)
    }


    return (
        <>
            <h1>Задача 53</h1>
            <p>Изменение цвета с использованием useState: Создайте компонент выбора цвета,
                который позволяет пользователю выбирать цвет из списка и отображает цвет
                выбранного цвета на экране.
            </p>
            <ul onClick={getNewColor}>
                <li>green</li>
                <li>red</li>
                <li>blue</li>
                <li>black</li>
                <li>grey</li>
            </ul>
            <h1 style={{color:color}}>Hello</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task53;