import React, { useState } from 'react';
import './SideBar.scss';
import { useQuery, gql } from '@apollo/client';
import { Person } from '../../interfaces/Person';
import ArrowRight from '../../assets/images/arrow-right.svg'

const ALL_PEOPLE = 
    gql`
        query GetAllPeople {
            allPeople(first:5) {    
                pageInfo{
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                
                }
                people {
                    id
                    name
                    species{
                        name
                    }
                    homeworld{
                        name
                    }
                }
            }
        }
    `;

interface SIDEBARPROPS {
    setIdPerson: React.Dispatch<React.SetStateAction<string>>;
}


const SideBar = (props: SIDEBARPROPS) =>{
    const { loading, error, data } = useQuery(ALL_PEOPLE);
    return(
       <aside className='sideBar'>
        {loading?<p>Loading...</p>:''}
        {error?<p>Error :(</p>:''}
        {data?
        <div >
            <ul>
                {data.allPeople.people.map((item: Person) =>
                    <li key={item.id} className="liSideBar">
                        <button onClick={() => props.setIdPerson(item.id)}>
                            <h2 className="personName">{item.name}</h2>
                            <p className="personSpeciesHomeworld">{`${item.species?item.species.name:'Human'} from ${item.homeworld?.name}`}</p>
                        </button>
                        <img src={ArrowRight} className="imgStyle"/>
                    </li>              
                )}
            </ul>
        </div>
        :''}
       
       </aside>
    );
}

export default SideBar;