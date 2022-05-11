import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCards } from '../hero/HeroCards';
import { getHeroesByName } from '../selectors/getHeroesByName';
import queryString from "query-string";


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    /* const query = queryString.parse(location.search); */

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    const heroesFileted = useMemo(() => getHeroesByName(q), [q]);
    //console.log(heroesFileted);

    const handleSearch = (e) => {
        e.preventDefault();//evita el refresh del navegador
        //console.log(searchText);
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Busquedas</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Buscar un heroe'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                    </form>

                    <button
                        type='submit'
                        className='btn btn-outline-primary mt-1'
                    >
                        Buscar...
                    </button>
                </div>

                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '') ?
                            <div className='alert alert-info'>Buscar un Heroe</div>
                            :
                            (heroesFileted.length === 0) && <div className='alert alert-danger'>No hay resultados: {q}</div>
                    }
                    {
                        heroesFileted.map(hero => (
                            <HeroCards key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}
