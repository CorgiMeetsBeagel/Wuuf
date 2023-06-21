import React, { useState, useEffect } from "react";

import Card from "../components/Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import userReducer, * as userActions from "../Slices/userSlice.js";

export default function SwipePage() {

  const dispatch = useDispatch()
  const currentProfile = useSelector(state => state.user.currentProfile);
  const profiles = useSelector(state => state.user.profiles);

  let dog = {}
    
  const newProfile = () => { 
    dispatch(async (actualDispatch, getState) => {
    /*
    pops off a profile from the state.profiles 
    sets profile to current profile
    if state.profiles is empty
      fetch for new profiles
      set it to state
    */
    actualDispatch(userActions.getProfile()); 
    dog = await fetch(`/api/:${currentProfile}`);

    if(profiles.length===0){
      //refetch and repopulate the profiles array
    }
  });
  }

  //   if(profiles.length===0){
     
  //     //make fetch request for more profiles
  //   }
   
  // }
  const viewed = async () => {
    //post request for a interaction insert
    let res = fetch('./routes/swipeRoutes')

  }
  const noPaws = () => {
    newProfile();
  }
  const paws = () => {
    // called when click yes 
    // adds profile to matches
    //calss on the new profile
    newProfile();
  }
  // const [dog, setDog] = useState();
  // const [i, setI] = useState(0);
  // useEffect(() => {
  //   fetch("URL", {
  //     method: "GET",
  //   })
  //     .then((data) => {
  //       data.json();
  //     })
  //     .then(setDog(data));
  // }, []);


  return (
    <div>
      <h3>Swipe Page</h3>
      <Card info={dog}/>
      <span>
        <button className="btn btn-primary" onClick={noPaws}>No Paw</button>
        <button className="btn btn-primary" onClick={paws}>Paw</button>
      </span>
    </div>
  );
}
