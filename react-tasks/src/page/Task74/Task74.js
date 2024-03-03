import { Link } from 'react-router-dom'
import {useMemo, useState } from 'react'
import axios from 'axios';

function Task74() {
    const [ip, setIp] = useState()
    async function getData() {
        const result = await axios.get('https://api.ipify.org/?format=json')
        return result.data.ip
    }
    useMemo(async () => {
        const res = await getData()
        setIp(res)
    }, [])
    return (
        <>
            <h1>Задача 74</h1>
            <p>Реализуйте компонент, который отображает IP-адрес пользователя. IP-адрес
                должен быть получен с использованием useMemo при монтировании
                компонента и кэширован для избегания повторных запросов к API при
                обновлении других частей компонента. https://api.ipify.org/?format=json
            </p>
            <h1>{ip}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task74;