import { Link } from "react-router-dom";

function Task1() {
    const arr = [1, 2, 3, 4, 5]
    const new_arr = arr.map((el) => el ** 2)
    return (
        <>
            <h1>Задача№1</h1>
            <p>1. На входе статичный массив чисел. Ваша задача каждое число массива возвести в
                квадрат и отобразить на странице</p>
            <p>Массив числе:{arr}</p>
            <p>Новый массив чисел:{new_arr}</p>



            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task1;