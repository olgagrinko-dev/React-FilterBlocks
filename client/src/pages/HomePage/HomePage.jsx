import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

function HomePage() {
    const array = [{ id: 1, heder: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', workday: 'Полный рабочий день', city: 'Новый Уренгой' },
    { id: 2, heder: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
    { id: 3, heder: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
    { id: 4, heder: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' }];

    const result = array.map((elem) => <Link to={`/vacancy/${elem.id}`}> <div className={style.item}>
        <h2>{elem.heder}</h2>
        <div className={style.flex}>
            <p>{elem.salary}</p>
            <p>{elem.workday}</p>
        </div>
        <div className={style.flex}>
            <div className={style.img}></div>
            <p>{elem.city}</p>
        </div>
    </div> </Link>)
    
    return (
        <div>
            <Input icon={<IconSearch />} placeholder="Введите название вакансии" />
            <div>{result}</div>
        </div>
    )
}

export default HomePage;