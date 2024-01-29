import { Link } from "react-router-dom";
import style from './style.module.css'
import img from './assets/code.png'
import img1 from './assets/code1.png'
import img2 from './assets/code2.png'

function Task10() {
   const arr = [
        {
            title: 'Блюдо 1',
            description: 'Салат',
            image: img
        },
        {
            title: 'Блюдо 2',
            description: 'Суп',
            image: img1
        },
        {
            title: 'Блюдо 3',
            description: 'Компот',
            image: img2
        }
    ]
    const result = arr.map((el) => {
        return <div><h1>{el.title}</h1><p>{el.description}</p><img alt="img" src={el.image} /></div>
     })
return (
    <>
        <h1>Задача№10</h1>
        <p>Реализуйте компонент, который принимает массив объектов с полями title –
            название рецепта, description – описание рецепта и image – картинка блюда. Для
            каждого объекта создайте карточку с заголовком, описанием и изображением.
            Добавьте немного стилей
        </p>
        <p>Результат:{result}</p>
        <p><Link to='/'>Главная страница</Link></p>
    </>
);
}

export default Task10;