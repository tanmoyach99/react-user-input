import { useState } from "react";
import Card from "./components/Card";
import Modals from "./components/Modals";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const [err, setErr] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim().length < 1 || user.name.trim().length < 1) {
      setErr("please fill in the ALL field");
      return;
    }
    if (+user.age < 0) {
      setErr("age cant be minus");
      return;
    }
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });

    setUser((prev) => {
      return {
        ...prev,
        name: "",
        age: "",
      };
    });
  };
  console.log(users);

  return (
    <div className="app">
      <Card
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />

      {err ? <Modals err={err} setErr={setErr} /> : <Users users={users} />}
    </div>
  );
}

export default App;
