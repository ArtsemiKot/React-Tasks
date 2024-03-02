import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Task63() {
    const [value, setValue] = useState('')

    async function getRandomNumber() {
        const result = await axios.get(`http://numbersapi.com/${Math.floor(Math.random() * 30)}`)
        setValue(result.data)
    }

    useEffect(()=>{
        getRandomNumber();
    },[])
    return (
        <>
            <h1>Задача 63</h1>
            <p>Факты с использованием useState и useEffect: http://numbersapi.com/:id. Создайте
                компонент React, который при первичном рендеринге отправляет запрос к API с
                рандомно сгенерированным числом и отображает результат в консоль.
            </p>
            <p>{value}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task63;