import React from 'react';
import './Content.scss';
import { useQuery, gql } from '@apollo/client';
import { Person } from '../../interfaces/Person';

interface PROPS {
    idPerson: string;
}

const capitalize = (str: string) =>{
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

const PERSON_DETAILS = 
    gql`
        query GetPersonDetails($idPerson: ID) 
        {
            person(id: $idPerson) {
                id
                eyeColor
                hairColor
                skinColor
                birthYear
                starshipConnection {
                    starships {
                        name
                    }
                }
            }
        }
    `;

const Content = (props: PROPS) =>{    
    const { data } = useQuery(PERSON_DETAILS, {variables: {idPerson: props.idPerson}});
    return(
       <main className="mainContent">
            {data?
                <div style={{textAlign:"center"}}>
                    <h2 className='titleInformation'>General Information</h2>
                    <ul>
                        <li className="liContent">
                            <h2 className="titleListContent">Eye Color</h2>
                            <p className="valueListContent">{capitalize(data.person.eyeColor)}</p>
                        </li>
                        <li className="liContent">
                            <h2 className="titleListContent">Hair Color </h2>
                            <p className="valueListContent">{capitalize(data.person.hairColor)}</p>
                        </li>
                        <li className="liContent">
                            <h2 className="titleListContent">Skin Color</h2>
                            <p className="valueListContent">{capitalize(data.person.skinColor)}</p>
                        </li>
                        <li className="liContent">
                            <h2 className="titleListContent">Birth Year</h2>
                            <p className="valueListContent">{data.person.birthYear}</p>
                        </li>
                    </ul>
                    <h2 className='titleInformation'>Vehicles</h2>
                    <ul>
                        {data.person.starshipConnection.starships.map((item: Person) =>
                        <li key={item.name} className="liContent">
                            <h2 className="titleListContent">{item.name}</h2>
                        </li>              
                        )}
                    </ul>
                </div>
            :''}
       </main>
    );
}

export default Content;