import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'
function Task49() {
    const [university, setUniversity] = useState([])
    async function getUnivesity() {
        const result = await axios.get('http://universities.hipolabs.com/search?country=Belarus')
        setUniversity(result.data)
    }
    useEffect(() => {
        getUnivesity();
    }, [])
    return (
        <>
            <h1>Задача№49</h1>
            <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
                http://universities.hipolabs.com/search?country=Belarus. API возвращает
                университеты страны переданной в качестве одного из доментов url. Ваша задача
                отображать все университеты в тег параграф.</p>
            {university.map((el) => <p>{el.name}</p>)}
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task49;