import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'
function Task46() {
    const [university, setUniversity] = useState([])
    const [flag, setFlag] = useState(false)
    async function getUnivesity() {
        const result = await axios.get('http://universities.hipolabs.com/search?country=Belarus')
        setUniversity(result.data)
    }
    useEffect(() => {
        getUnivesity();
    }, [])
    return (
        <>
            <h1>Задача№46</h1>
            <p>Совместить задачи 3 и 6. По клику на кнопку отображать университеты выбранной
                страны</p>
            <button onClick={() => setFlag(!flag)}>Нажми</button>
            {flag ? university.map((el) => <p>{el.name}</p>) : null}
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task46;