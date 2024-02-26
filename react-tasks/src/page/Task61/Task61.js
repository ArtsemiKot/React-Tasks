import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Task61() {
    const [value, setValue] = useState('')

    async function getInfo() {
        const result = await axios.get('https://api.ipify.org/?format=json')
        setValue(result.data.ip)
    }

    useEffect(()=>{
        getInfo()
    },[])
    return (
        <>
            <h1>Задача 61</h1>
            <p>Запрос к API с использованием useState и useEffect: Создайте компонент, который
                выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
                данные в заголовок.
            </p>
            <h1>{value}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task61;