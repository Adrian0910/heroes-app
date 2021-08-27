import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    /* usar useMemo solo para casos donde se deprecie el procesamiento */

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               heroes.map( hero => (
                   <HeroCard key={hero.id}
                       {...hero}
                   />
               ))
           } 
        </div>
    )
}
