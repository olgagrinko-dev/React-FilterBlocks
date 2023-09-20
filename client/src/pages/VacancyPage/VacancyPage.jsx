import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import array from '../../Storag/Storag.json';
import style from './style.module.scss';

function VacancyPage() {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const result = array.filter((elem) => elem.id == id);
        console.log(result);
        setData(result[0]);
    }, []);

    return (
        <div className={style.wrapper}>
            <div className={style.vacancy}>
                <h1>{data.header}</h1>

                <div className={style.info}>
                    <h2>{data.salary}</h2>
                    <p>{data.workday}</p>
                </div>

                <div className={style.city}>
                    <div className={style.img}></div>
                    <p>{data.city}</p>
                </div>
            </div>

            <div className={style.infoWork}>
                <div className={style.responsibilitiesWork}>
                    <h2>Обязанности:</h2>
                    <ul>{data.responsibilities?.map((elem) => <li>{elem}</li>)}</ul>
                </div>

                <div className={style.requirementsWork}>
                    <h2>Требования:</h2>
                    <ul>{data.requirements?.map((elem) => <li>{elem}</li>)}</ul>
                </div>

                <div className={style.conditionsWork}>
                    <h2>Условия:</h2>
                    <ul>{data.conditions?.map((elem) => <li>{elem}</li>)}</ul>
                </div>
            </div>
        </div>
    )
}

export default VacancyPage;