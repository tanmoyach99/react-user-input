import React from "react";
import Button from "./Button";
import Reuse from "./Reuse";

const Modals = ({ err, setErr }) => {
  const click = () => {
    setErr("");
  };
  return (
    <Reuse>
      <div className="user">
        <h3 className="user-details">{err}</h3>
      </div>

      <Button color="red" onClick={click}>
        okay
      </Button>
    </Reuse>
  );
};

export default Modals;
