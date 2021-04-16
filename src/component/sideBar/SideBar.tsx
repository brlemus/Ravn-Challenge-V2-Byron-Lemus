import React from 'react';
import './SideBar.scss';
import { useQuery, gql } from '@apollo/client';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Person } from '../../interfaces/Person';
import ArrowRight from '../../assets/images/arrow-right.svg';
import Loading from '../loading/Loading';
import ErrorMsg from '../error/ErrorMsg';

const ALL_PEOPLE = 
    gql`
        query GetAllPeople($first: Int, $after: String) {
            allPeople(first:$first, after: $after) {    
                pageInfo{
                    hasNextPage
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
};

const SideBar = (props: SIDEBARPROPS) =>{

    const { loading, error, data, fetchMore  } = useQuery(ALL_PEOPLE, {
        variables: { first: 5, after: null }
    });

    const hasNextPage = data?.allPeople.pageInfo.hasNextPage;
    const endCursor = data?.allPeople.pageInfo.endCursor;

    const loadMore =() =>{
        fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult: any , { fetchMoreResult }) => {
            fetchMoreResult.allPeople.people= [
                ...prevResult.allPeople.people,
                ...fetchMoreResult.allPeople.people
            ];
            return fetchMoreResult;
            }
        });
    };

    const [refInfiniteScroll] = useInfiniteScroll({
        loading,
        hasNextPage,
        onLoadMore: loadMore,
        disabled: !!error,
        rootMargin: '0px 0px 400px 0px',
      });

    return(
       <aside className='sideBar'>
        {loading && !data?<Loading />:''}
        {error?<ErrorMsg />:''}
        {data?
        <>
            <ul className="ulSideBar">
                {data.allPeople.people.map((item: Person) =>
                    <li key={item.id} className="liSideBar">
                        <button onClick={() => props.setIdPerson(item.id)}>
                            <h2 className="personName">{item.name}</h2>
                            <p className="personSpeciesHomeworld">{`${item.species?item.species.name:'Human'} from ${item.homeworld?.name}`}</p>
                        </button>
                        <img src={ArrowRight} alt="" className="imgStyle"/>
                    </li>              
                )}
                {(loading || hasNextPage) && (           
                    <li ref={refInfiniteScroll}><Loading /></li>
                )}
            </ul>
        </>
        :''}
       
       </aside>
    );
};

export default SideBar;