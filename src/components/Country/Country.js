import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,area,region,flags} = props.country;
    return (
        <div className='country bg-warning'>
            <h2>Country Name: {name}</h2>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4>Region: {region}</h4>
        </div>
    );
};

export default Country;