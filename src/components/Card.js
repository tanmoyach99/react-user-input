import React from "react";
import Button from "./Button";
import Reuse from "./Reuse";

const Card = ({ handleChange, handleSubmit, user }) => {
  return (
    <Reuse>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">age</label>
          <input
            type="text"
            name="age"
            value={user.age}
            id="name"
            onChange={handleChange}
          />
        </div>
        <Button color="purple" onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </form>
    </Reuse>
  );
};

export default Card;
