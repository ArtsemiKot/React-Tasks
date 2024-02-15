import { Link } from "react-router-dom";
import { useState } from 'react';
function Task44() {
    const [inp, setInp] = useState('')

    function doChangeValue(e) {
        setInp(e.target.value)
    }
    return (
        <>
            <h1>Задача№44</h1>
            <p>Создайте форму ввода, в которой пользователь может вводить своё имя и
                отображать его под формой.</p>
            <input onChange={doChangeValue}></input>
            <p>{inp}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task44;