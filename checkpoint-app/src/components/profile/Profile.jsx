import React, { useState } from "react";

function Profile() {
  const [fullName, setfullName] = useState("Zaineb boubker");
  const [bio, setbio] = useState(
    "An enigma wandering through the chaos, drawn to beauty in all its forms, art, and fleeting moments of silence. Always observing, rarely seen, and never truly known."
  );
  const [imgSrc, setimgSrc] = useState("./images/zaineb.jpg");
  const [profession, setprofession] = useState("LifeSurviver");
    const [show, setshow] = useState(true);

   function handleimg() {
    setshow(!show)
}

  return (
    <div>
          <button onClick={handleimg}> {show ? "HIDE" : "SHOW"} </button>
      {show ? (
        <div>
          <h1> {fullName} </h1>
          <p> {bio} </p>
          <img src={imgSrc} alt="" width="400px" />
          <h5> {profession} </h5>
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
