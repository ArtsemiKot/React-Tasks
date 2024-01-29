import { Link } from "react-router-dom";
import style from './style.module.css'
function Task11() {
const arr = [1,'fff', 2, 'ccc']
const result = arr.map((el)=>{
    if(isNaN(el)){
        return (<p className={style.color1}>{el}</p>)
    }else{
        return (<p className={style.color2}>{el}</p>)
    }
})
    return (
        <>
            <h1>Задача№11</h1>
            <p>Создайте компонент, который принимает статичный массив чисел и строк. Если
                элемент - число, то отобразите его в параграфе с зеленым цветом текста, если
                строка - с синим. </p>
                <p>Результат:{result}</p>
            <p><Link to='/'>Главная страница</Link></p>
        </>
    );
}

export default Task11;