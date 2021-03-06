import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../selectors/getHeroByPublisher'
import { HeroCards } from './HeroCards';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <div
            className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'
        >
            {
                heroes.map(hero => (
                    < HeroCards key={hero.id} {...hero} />
                ))
            }
        </div>
    )
}

/* 
<li key={hero.id}>
                        {hero.superhero}
                    </li>
*/