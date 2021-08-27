import React, { useMemo } from 'react';
import queryString from 'query-string';

// import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    /* ----My code---- */

    /* optener dato del query */
    const location = useLocation();
    const {query = ''} = queryString.parse(location.search);
    

    const [formValues, handleInputChange] = useForm({
        searchText: query,
    });
    
    const {searchText} = formValues;

    const heroFilter = useMemo(() => getHeroesByName(query), [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        /* estilo del query en url */
        history.push(`?query=${searchText}`);
        }

    /* ----End My code---- */
    return (
        <div>
            <h1>Heroes</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4 className="">Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            autoComplete="off"
                            className="form-control"
                            name="searchText"
                            onChange={handleInputChange}
                            placeholder="Find your hero"
                            type="text"
                            value={searchText}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        (query==='')
                            && <div className="alert alert-info">
                                Search a hero
                            </div>    
                    }
                    {
                        (query !=='' && heroFilter.length === 0)
                            && <div className="alert alert-danger">
                                Not found {query}!
                            </div>
                    }

                    {
                        heroFilter.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
