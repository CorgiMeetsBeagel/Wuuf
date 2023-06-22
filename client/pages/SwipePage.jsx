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
    <div>
      <h3>Swipe Page</h3>
      <Card {...currentProfile} />
      <span>
        <button
          className="btn btn-primary"
          onClick={() => sendSwipeResults(false)}
        >
          No Paw
        </button>
        <button
          className="btn btn-primary"
          onClick={() => sendSwipeResults(true)}
        >
          Paw
        </button>
      </span>
    </div>
  );
}
