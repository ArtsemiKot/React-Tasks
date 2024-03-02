import { Link } from 'react-router-dom'
import { useEffect, useRef, useState, useMemo } from 'react'

function Task73() {
    const [str, setStr] = useState('')

    function keepString(e) {
        setStr(e.target.value)
    }

    const reverseString = useMemo(() => {
        return str.split('').reverse().join('')
    })
    return (
        <>
            <h1>Задача 73</h1>
            <p>Напишите программу, которая принимает строку от пользователя и выводит ее в
                обратном порядке. Используй хук useState для хранения строки и хук useMemo
                для кэширования результата.
            </p>
            <input onChange={keepString}></input>
            <h1>{reverseString}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task73;