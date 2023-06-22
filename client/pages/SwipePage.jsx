import React, { useState, useEffect } from 'react';

import Card from '../components/Card.jsx';
import { useDispatch, useSelector } from 'react-redux';
import userReducer, * as userActions from '../Slices/userSlice.js';
import { useLoaderData } from 'react-router-dom';

export default function SwipePage() {
  const dispatch = useDispatch();
  const currentProfile = useSelector((state) => state.user.currentProfile);
  const profiles = useSelector((states) => state.user.profiles);

  useEffect(() => {
    const newProfiles = useLoaderData();
    dispatch((actualDispatch, newProfiles) => {
      actualDispatch(setProfiles({ profiles }));
    });
  }, []);

  return (
    <div>
      <h3>Swipe Page</h3>
      <Card {...currentProfile} />
      <span>
        <button className="btn btn-primary" onClick={noPaws}>
          No Paw
        </button>
        <button className="btn btn-primary" onClick={paws}>
          Paw
        </button>
      </span>
    </div>
  );
}
