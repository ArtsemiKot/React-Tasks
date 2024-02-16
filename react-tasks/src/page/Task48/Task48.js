import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'
function Task48() {
    const [ipAdress, setIPAdress] = useState([])
    async function showIP() {
        const result = await axios.get('https://api.ipify.org/?format=json')
        setIPAdress(result.data.ip)
    }

    useEffect(() => {
        showIP()
    }, [])
    return (
        <>
            <h1>Задача№48</h1>
            <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
                https://api.ipify.org/?format=json. API возвращает ваш ip-адрес. Ваша задача
                отображать ip-адрес в тег h1.</p>
            <h1>{ipAdress}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task48;