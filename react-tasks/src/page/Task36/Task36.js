import { Link } from "react-router-dom";
import { useState } from 'react';
function Task36() {
    const [open, setOpen] = useState(false)

    function clickButton() {
        if (!open) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    return (
        <>
            <h1>Задача№36</h1>
            <p>Сделай компонент выезжающего меню из 3 параграфов. по нажатию на кнопку ,,открыть,, отображаешь меню. </p>
            <button onClick={clickButton}>Открыть меню</button>
            {open ? <div><p>1</p><p>2</p><p>3</p></div> : null}
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task36;