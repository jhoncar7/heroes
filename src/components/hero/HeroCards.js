import React from 'react'
import { Link } from 'react-router-dom';
import { heroeImages } from '../../helpers/heroImages';


export const HeroCards = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const imagePath = `assets/${id}.jpg`;

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div
                className='card'
            >
                <div className='row no-gutters'>
                    <div className='col-4'>
                        {/* <img src={imagePath} className='card-img' alt={superhero} /> */}
                        <img src={heroeImages(`./${id}.jpg`)} className='card-img' alt={superhero} />
                        {/* <img src={'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2013/07/237629-top-chicos-superheroes.jpg?itok=TRcx_pTY'} className='card-img-top' alt={superhero} /> */}
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>

                            {
                                (alter_ego !== characters) &&
                                <p className='card-muted'>{characters}</p>
                            }

                            <Link to={`/hero/${id}`}>
                                Mas Info...
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
