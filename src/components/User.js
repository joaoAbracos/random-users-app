import React from "react";
function user(props) {
  return (
    <>
      {props ? (
        <div key={props.user?.phone} className="user-box">
          <img
            src={props.user?.picture?.thumbnail}
            alt={props.user?.name?.first}
          />
          <h2>{props.user?.name?.first}</h2>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default user;
