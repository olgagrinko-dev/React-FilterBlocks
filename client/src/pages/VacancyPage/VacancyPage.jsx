import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import array from '../../Storag/Storag.json';

function VacancyPage() {
    const { id } = useParams();

    useEffect(() => {
        const result = array.filter((elem) => elem.id == id);
        console.log(result);
    }, [])

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default VacancyPage;