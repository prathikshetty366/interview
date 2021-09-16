import React from "react";
import items from "../userDetails.json";

function UserDetails() {
  return (
    <div>
      {items.map((item) => {
        return (
          <>
            <div className="card">
              <p><i>Id:</i>{item.id}</p>
              <p><i>Name:</i>{item.name}</p>
              <p><i>Age:</i>{item.age}</p>
              <p><i>Gender:</i>{item.gender}</p>
              <p><i>Email:</i>{item.email}</p>
              <p><i>Phone:</i>{item.phoneNo}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default UserDetails;
