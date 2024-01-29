import { Link } from "react-router-dom";

function Task5() {
    const arr = [1, 'art', 2, 'kot']
    const new_arr = arr.map((el) => {
        if (isNaN(el)) {
            return <p>{el}</p>
        } else {
            if (el % 2 === 0) {
                return <p>{el} четное</p>
            } else {
                return <p>{el} нечетное</p>
            }
        }
    })
    return (
        <>
            <h1>Задача№5</h1>
            <p>5. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в
                случае числа четность и нечетность текущего значения в параграфе, в случае
                строки отобразить саму строку в параграфе
            </p>
            <p>Массив:{arr}</p>
            <p>Результат:{new_arr}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task5;