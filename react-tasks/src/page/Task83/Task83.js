import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { task83Context } from '../../Context/Context'

function Task83() {
    const color = useContext(task83Context);

    function changeColor() {
        if (color.flag) {
            color.setFlag(false);
            color.setBackgroundWhite('black')
            color.setBackgroundBlack('white')
        } else {
            color.setFlag(true);
            color.setBackgroundWhite('white');
            color.setBackgroundBlack('black')
        }
    }
    return (
        <div style={{ backgroundColor: color.backgroundWhite, color: color.backgroundBlack }}>
            <h1>Задача 83</h1>
            <p>Разработайте простое приложение для переключения между светлой и темной
                темами. Используйте useContext, чтобы хранить информацию о текущей теме
                (светлая или темная). В компоненте отобразите интерфейс, который позволяет
                пользователю переключаться между темами.
            </p>
            <button style={{ backgroundColor: color.backgroundBlack, color: color.backgroundWhite }} onClick={changeColor}>{color.flag ? 'black' : 'white'}</button>
            <p><Link to='/' style={{ backgroundColor: color.backgroundWhite, color: color.backgroundBlack }}>Главная страница</Link></p>
        </div>
    );
}

export default Task83;