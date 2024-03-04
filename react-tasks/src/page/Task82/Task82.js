import { Link } from 'react-router-dom'
import { useCallback, useMemo, useState, useContext } from 'react'
import { task82Context } from '../../Context/Context';

function Task82() {
    const data = useContext(task82Context)
    return (
        <>
            <h1>Задача 82</h1>
            <p>Разработайте приложение для отображения текущей погоды. Используйте
                useContext, чтобы хранить информацию о погоде (температура, влажность,
                скорость ветра и т. д.). В компоненте отобразите эту информацию о погоде.
            </p>
            <p>{data.id}</p>
            <p>{data.temp}</p>
            <p>{data.humidity}</p>
            <p>{data.speedWind}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>);
}

export default Task82;