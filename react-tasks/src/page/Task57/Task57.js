import { Link } from 'react-router-dom'
import { useState } from 'react'

function Task57() {
    const [flage, setFlage] = useState(false)

    function clickButton() {
        if (!flage) {
            setFlage(true)
        } else {
            setFlage(false)
        }
    }
    return (
        <>
            <h1>Задача 57</h1>
            <p>Отображение навигации с использованием useState: По нажатию на кнопку
                “бургер” отображать блок навигации из 4 параграфов.
            </p>

            <button onClick={clickButton}>Текст</button>
            {flage ? <div><p>1</p><p>2</p><p>3</p></div>:null}
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task57;