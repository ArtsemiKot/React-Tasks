import { Link } from "react-router-dom";
import { useState } from 'react';
function Task45() {
    const [openParagraf, setOpenParagraf] = useState(false)

    function clickButton() {
        if (!openParagraf) {
            setOpenParagraf(true)
        } else {
            setOpenParagraf(false)
        }
    }

    return (
        <>
            <h1>Задача№45</h1>
            <p>Реализовать селектор, где по клику на копку отображается 3 параграфа. При
                повторном клике параграфы скрываются.</p>
            <button onClick={clickButton}>Открыть меню</button>
            {openParagraf ? <div><p>Сегодня</p><p>занятие</p><p>в 20:00</p></div> : null}
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task45;