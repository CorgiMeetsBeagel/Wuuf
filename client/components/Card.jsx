import React from "react";
export default function Card(props) {
  const pooch = props.info;

  // like function
  // function handleLike() {
  //   const data = { id: id, userId: userId };
  //   //send a post request to back end
  //   //fetch ('someURL', method:Post)
  //   fetch("URL", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: json.stringify(data),
  //   })
  //     .then((data) => {
  //       data.json();
  //     })
  //     .then((response) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       next({ err: { message: "match request unsuccessful " } });
  //     });
  //   //Invoke the parent function to update state of current dog
  //   handleChangeDog();
  // }

  // dislike function
  // function handleDislike() {
  //   //invoke the parent function to update
  //   handleChangeDog();
  // }

  return (
    <div className="card">
      <p>name: bella</p>
      <p>breed:</p>
      <p>age:</p>
    </div>
  );
}
