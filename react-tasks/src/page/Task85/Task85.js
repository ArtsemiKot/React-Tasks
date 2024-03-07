import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'



// function Task85() {
//     const [flag, setFlage] = useState(false)

//     return (
//         <>
//             <h1>Задача 85</h1>
//             <p>Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off».
//                 По клику на кнопку текст меняется на противоположный
//             </p>
//             <button onClick={() => flag ? setFlage(false) : setFlage(true)}>{!flag ? 'on' : 'off'}</button >
//             <p><Link to='/'>Главная страница</Link></p>
//         </>);
// }

function reducer(state, action) {
    switch (action) {
        case 'changeFlage':
            return state ? false : true
    }
}
function Task85() {

    const [flage, dispatch] = useReducer(reducer, false)

    return (
        <>
            <h1>Задача 85</h1>
            <p>Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on» и «off».
                По клику на кнопку текст меняется на противоположный
            </p>
            <button onClick={() => dispatch('changeFlage')}>{!flage ? 'on' : 'off'}</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task85;