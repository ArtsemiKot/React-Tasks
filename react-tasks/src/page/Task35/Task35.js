import { Link } from "react-router-dom";
import { useState} from 'react';
function Task35() {
    const [flag, setFlag] = useState(false)

    function changeButton() {
        if (!flag) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }
    return (
        <>
            <h1>Задача№35</h1>
            <p>Текст кнопки открыто меняется на закрыто по нажатию на себя</p>
            <button onClick={changeButton}>{flag ? 'Открыто' : 'Закрыто'}</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task35;