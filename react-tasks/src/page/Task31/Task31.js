import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
function Task31() {
    const [res, setRes] = useState({});

    async function getRequest() {
        const request = await fetch('https://api.ipify.org/?format=json', {
            method: 'GET'
        })
        setRes(await request.json());
    }

    useEffect(() => {
        getRequest()
    }, [])
    return (
        <>
            <h1>Задача№31</h1>
            <p>Запрос к API с использованием useState и useEffect: Создайте компонент, который выполняет запрос к
                API https://api.ipify.org/?format=json и отображает полученные данные в заголовок.</p>
            <h1>{Object.entries(res)}</h1>
            <h1>{console.log(Object.entries(res))}</h1>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task31;