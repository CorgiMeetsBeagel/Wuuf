import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SwipePage from '../pages/SwipePage.jsx';


export default function MatchPage() {

  // const [dogs, setDogs] = useState([]);
  // useEffect(() => {
  //   const fetchDogs = async () => {
  //     try {

  //  const waitDogs = await  fetch('/api/matches/', {
  //               method: 'GET',
  //           });
  //       const dogs = await waitDogs.json();
  //       // console.log('Dogs array: ', dogs);
  //       setDogs(dogs);
        
  //     }
  //     catch (err) {
  //       console.log('There was an error fetching data: ', err);
  //     }
  //   };
  //   fetchDogs();
  // }, []);

  // const userMatches = useSelector(state => state.user.matches)

  // Dummy array for testing purposes only
  const userMatches = [];
  for (let i = 0; i < 50; i++) {
    userMatches.push({
      id: `test-id-${i}`,
      name: `test-name-${i}`,
      breed: `test-breed-${i}`,
      age: `test-age-${i}`,
      size: `test-size-${i}`,
      sex: `test-sex-${i}`,
      image: `test-image-${i}`,
    })
  }

  return (
    <div className='flex h-screen'>
      <div className='flex-1 w-3/4 justify-center'>
        <SwipePage />
        {/* <h1>Sample Header</h1>
        <p>Sample Paragraph</p> */}
      </div>
      <div className='flex-initial w-1/4 overflow-y-auto bg-slate-100'>
        {userMatches.map(match => {
          return (
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" /> 
              <div className="collapse-title text-xl font-medium">
                {/* Might have to change property of match depending on response from server */}
                {match.image} {match.name}
              </div>
              <div className="collapse-content"> 
              {/* Might have to change property of match depending on response from server */}
                <p>{match.username}</p>
                <p>{match.breed}</p>
                <p>{match.age}</p>
                <p>{match.size}</p>
                <p>{match.gender}</p>
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}


 