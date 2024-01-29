import { Link } from "react-router-dom";

function Task2() {
    const arr = [1, 4, 9, 16, 25]
    const new_arr = arr.map((el) => <h1>{Math.sqrt(el)}</h1>)
    return (
        <>
            <h1>Задача№2</h1>
            <p>2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
                отобразить на странице в виде h1</p>
            <p>Массив числе:{arr}</p>
            <p>Новый массив чисел:{new_arr}</p>

            <p><Link to='/'>HomePage</Link></p>
        </>
    );
}

export default Task2;