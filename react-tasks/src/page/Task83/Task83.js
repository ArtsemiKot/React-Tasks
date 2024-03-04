import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState, useContext } from 'react'
import { task83Context } from '../../Context/Context'

function Task83() {
    const datta = useContext(task83Context)
    const c = {
        black:'Белая',
        white:'Черная',
    }
    
    function changeColor(e){
        datta.setColorTeme(e.target.textContent)
    }
    return (
        <>
            <h1>Задача 83</h1>
            <p>Разработайте простое приложение для переключения между светлой и темной
                темами. Используйте useContext, чтобы хранить информацию о текущей теме
                (светлая или темная). В компоненте отобразите интерфейс, который позволяет
                пользователю переключаться между темами.
            </p>
            <h1>{c[datta.colorTeme]}</h1>
            <button onClick={changeColor}>Black</button>
            <button onClick={changeColor}>White</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task83;