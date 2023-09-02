import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import style from './style.module.scss';

function HomePage() {
    const array = [{ heder: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', workday: 'Полный рабочий день', city: 'Новый Уренгой' },
    { heder: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
    { heder: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
    { heder: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' }];

    const result = array.map((elem) => <div className={style.item}>
        <h2>{elem.heder}</h2>
        <div className={style.flex}>
            <p>{elem.salary}</p>
            <p>{elem.workday}</p>
        </div>
        <div className={style.flex}>
            <div className={style.img}></div>
            <p>{elem.city}</p>
        </div>
    </div>)

    return (
        <div>
            <Input icon={<IconSearch />} placeholder="Введите название вакансии" />
            <div>{result}</div>
        </div>
    )
}

export default HomePage;