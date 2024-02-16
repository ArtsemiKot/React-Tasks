import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'
function Task47() {
    const [img, setImg] = useState([])
    async function showImg() {
        const result = await axios.get('https://dog.ceo/api/breeds/image/random')
        setImg(result.data)
    }

    useEffect(() => {
        showImg()
    }, [])
    return (
        <>
            <h1>Задача№47</h1>
            <p>При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
                https://dog.ceo/api/breeds/image/random. API возвращает ссылку на случайные
                изображения. Ваша задача отображать картинки в img.</p>
            <img src={img.message} alt="" />
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task47;