import { Link } from "react-router-dom";

function Task15() {
    const pwd1 = '1234567'
    const pwd2 = '1234567'

    function show() {
        try {
            if (!/^[\w\d\!\@\#\&\^\*\.]{8,}$/gm.test(pwd1)) throw new Error('Не подходит пароль')
            if (!/^[\w\d\!\@\#\&\^\*\.]{8,}$/gm.test(pwd2)) throw new Error('Не подходит пароль')
            if (pwd1 === pwd2) {
                console.log(true);
            } else {
                console.log(false);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <h1>Задача№15</h1>
            <p>На входе 2 статичные переменные пароля. По клику на кнопку необходимо
                реализовать метод валидации. Написать регулярное выражение: пароль от 8
                символов, содержит числа, буквы, !@#$^&*. Результат отобразить в консоль</p>
            <button onClick={show}>click me</button>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task15;