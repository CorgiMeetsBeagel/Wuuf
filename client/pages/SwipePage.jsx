import React, { useState, useEffect } from 'react';

import Card from '../components/Card.jsx';
import { useDispatch, useSelector } from 'react-redux';
import userReducer, * as userActions from '../Slices/userSlice.js';
// import { useLoaderData } from 'react-router-dom';
import { setProfiles, getProfile } from '../Slices/userSlice.js';
import { makeMatch } from '../Slices/userSlice.js';

export default function SwipePage() {
  const dispatch = useDispatch();
  // Subscribe currentProfile and profiles to redux store
  const currentProfile = useSelector((state) => state.user.currentProfile);
  // const profiles = useSelector((state) => state.user.profiles);

  // Thunk for getting and refilling profiles in store
  const nextProfile = async (actualDispatch, getState) => {
    // Get the profile
    // actualDispatch(getProfile());
    // Check if stack is empty
    if (!getState().user.profiles.length) {
      let data;
      // Fill stack from database
      try {
        const result = await fetch(`/api/getprofiles`);
        data = await result.json();
      } catch (e) {
        // Default data
        data = {
          profiles: [
            {
              name: 'Barney',
              breed: 'Golden Retriever',
              age: '42',
              size: 'Much-Loved',
            },
          ],
        };
      }
      // Set the new profile from the stack results
      actualDispatch(setProfiles({ profiles: data.profiles }));
    } else actualDispatch(getProfile());
  };

  // A function to run after every swipe
  const sendSwipeResults = async (liked = false) => {
    let matched;
    try {
      // Message the server and tell them whether or not a profile was liked
      let response = await fetch('/api/swipe/match', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ target: currentProfile, liked }),
      });

      // Expect a response { matched: true/false }
      response = await response.json();
      matched = response.result;

      // If there was a match
      if (matched)
        // Store it in redux, thus re-rendering the match page
        dispatch((actualDispatch, getState) => {
          actualDispatch(makeMatch({ user: matched }));
        });
    } catch (e) {
      matched = false;
    }
    // Set up the next profile
    dispatch(nextProfile);
  };

  // Use effect to collect loader data
  useEffect(() => {
    // Writing an async function inside useEffect because useEffect can't support asynchronous actions itself
    const getProfiles = async () => {
      try {
        // Fetch from /api/getProfiles
        const result = await fetch(`/api/getprofiles`);
        // Expected an object { profiles: [...data] }
        const { profiles } = await result.json();
        // Instantiate the profiles on the store
        dispatch((actualDispatch, getState) => {
          actualDispatch(setProfiles({ profiles }));
        });
        // If the server fails to connect
      } catch (e) {
        dispatch((actualDispatch, getState) => {
          actualDispatch(setProfiles({ profiles: [] }));
        });
      }
    };

    // Run this function
    getProfiles();
  }, []);

  return (
    <div className='flex-col bg-slate-100 min-h-screen'>
      <h3>Swipe Page</h3>
      <div className=''>
        <Card {...currentProfile} />
      </div>
      <div className='flex justify-content'>
        <button className="btn btn-primary w-1/3 m-1" onClick={() => sendSwipeResults(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
           No Paw
        </button>
        <button className="btn btn-primary w-1/3 m-1" onClick={() => sendSwipeResults(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
           Paw
        </button>
      </div>
    </div>
  );
}
