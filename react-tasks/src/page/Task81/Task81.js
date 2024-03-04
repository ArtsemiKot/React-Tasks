import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { task81Context } from '../../Context/Context';


function Task81() {
    const data = useContext(task81Context)
    const valueLanguage = {
        rus: 'Русский',
        en: 'Английский',
        sp: 'Испанский',
    }

    function changeLanguage(e) {
        data.setLanguage(e.target.textContent)
    }
    return (
        <>
            <h1>Задача 81</h1>
            <p>Создайте приложение, где пользователь сможет выбирать язык интерфейса
                (например, английский или испанский). Используйте useContext для сохранения
                текущего выбранного языка и перевода текста в выбранный язык в компонентах.
            </p>
            <h1>{valueLanguage[data.language]}</h1>
            <button onClick={changeLanguage}>rus</button>
            <button onClick={changeLanguage}>en</button>
            <button onClick={changeLanguage}>sp</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task81;