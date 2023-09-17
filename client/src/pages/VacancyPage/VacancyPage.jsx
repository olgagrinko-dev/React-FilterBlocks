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

    useEffect(() => {
        const res = array.map((elem) => );
        console.log(res);
        setData(res[0]);
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
                    <h2>{data.responsibilities}</h2>
                    <p>{data.responsibilities}</p>
                </div>
                <div className={style.requirementsWork}>
                    <h2>{data.requirements}</h2>
                    <p>{data.requirements}</p>
                </div>
                <div className={style.conditionsWork}>
                    <h2>{data.conditions}</h2>
                    <p>{data.conditions}</p>
                </div>
            </div>
        </div>
    )
}

export default VacancyPage;