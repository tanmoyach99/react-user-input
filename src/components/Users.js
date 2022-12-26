import React from "react";
import Reuse from "./Reuse";

const Users = ({ users, callBack }) => {
  return (
    <Reuse>
      <div className="user">
        <h3 className="user-details">Max (32 years old)</h3>
        {users.length > 0 &&
          users.map((user) => {
            return (
              <h3 className="user-details">
                {user.name}({user.age} years old)
              </h3>
            );
          })}
      </div>
    </Reuse>
  );
};

export default Users;
