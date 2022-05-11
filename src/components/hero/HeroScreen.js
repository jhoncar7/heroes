import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { heroeImages } from '../../helpers/heroImages';
import { getHeroById } from '../selectors/getHeroById';
/* import batman from "../../assets/dc-batman.jpg"; */ //recurso statico

export const HeroScreen = () => {

    const { heroeId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    const handleReturn = () => {
        navigate(-1);
        console.log('return');
    }

    if (!hero) {
        return <Navigate to='/' />
    }

    const imagePath = `/assets/${hero.id}.jpg`;

    return (
        <div className='row mt-5'>

            <div className='col-4'>
                <img
                    /* src={imagePath}  */ //desde public/assets
                    /* src={batman} */ // import
                    src={heroeImages(`./${hero.id}.jpg`)}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                    alt={hero.superhero} />
            </div>

            <div className='col-8 animate__animated animate__bounce'>
                <h3>{hero.superhero}</h3>
                <ul className='list-group'>
                    <li className='list-group-item'><b>Alter ego: </b>{hero.alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
                    <li className='list-group-item'><b>First Appearance: </b>{hero.first_appearance}</li>
                </ul>
                <h5 className='mt-3'>characters</h5>
                <p>{hero.characters}</p>

                <button
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >Regresar</button>
            </div>

        </div>
    )
}
