import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const { token } = useAuth();

  const handleAdminEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handleAdmin = (e) => {
    const user = { email };
    e.preventDefault();
    fetch("https://radiant-beyond-52380.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          console.log(result);
          alert("added admin successfully");
        } else if (result.matchedCount > 0 && result.modifiedCount === 0) {
          alert("user already admin");
        } else {
          console.log(result);
          alert("users not exits");
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleAdmin}>
        <TextField
          id="standard-basic"
          sx={{ marginRight: "10px", width: "30%" }}
          placeholder="emailAddress*"
          variant="standard"
          onBlur={handleAdminEmail}
        />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
