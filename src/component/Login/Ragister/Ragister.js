import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import loginimg from "../../../images/login.png";
import { useHistory, useLocation, useParams } from "react-router";

const Ragister = () => {
  const { location } = useParams();
  console.log(location);
  const history = useHistory();

  const { signUpHandle, user, error, isLoading, setError } = useAuth();
  // handle inputfield
  const [formData, setFormData] = useState({});
  const hanldleTextField = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newFormData = { ...formData };
    newFormData[field] = value;
    setFormData(newFormData);
  };
  console.log(formData);

  // handle from
  const handleOnBlur = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      setError("Your two passwords are not the same");
    } else {
      signUpHandle(formData.email, formData.password, formData.name);
      alert("successfully Created");
      history.push(`/${location}`);
    }
  };
  return (
    <Container>
      <Box>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", mb: 5, color: "#41F1FF" }}
            >
              
              Register Form
            </Typography>
            {!isLoading && (
                  <form 
                onSubmit={handleOnBlur}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  margin: "0 auto",
                }}
              >
                <TextField
                    required
                  id="outlined-required"
                  placeholder="Your Name*"
                  type="text"
                  name="name"
                  onBlur={hanldleTextField}
                />
                <TextField
                  required
                  id="outlined-required"
                  type="email"
                  name="email"
                  placeholder="Your email*"
                  sx={{ mt: 2 }}
                  onBlur={hanldleTextField}
                />
                <TextField
                  id="outlined-disabled"
                  name="password"
                  type="password"
                  placeholder="Your password*"
                  sx={{ my: 2 }}
                  onBlur={hanldleTextField}
                />
                <TextField
                  id="outlined-disabled"
                  name="password2"
                  type="password"
                  placeholder="Retype password*"
                  sx={{ my: 2 }}
                  onBlur={hanldleTextField}
                />
                <Link
                  style={{
                    textDecoration: "none",
                    marginBottom: "10px",
                    color: "blue",
                  }}
                  to="/login"
                >
                  
                  Have a account ?
                </Link>

                <Button type="submit" variant="contained">
                  
                  Register
                </Button>
              </form>
            )}
            {isLoading && (
              <div style={{ textAlign: "center", marginTop: "200px" }}>
                <CircularProgress />
              </div>
            )}

            {user.email && (
              <Alert sx={{ mt: 2 }} severity="success">
                user Created successfully
              </Alert>
            )}

            {error && (
              <Alert sx={{ mt: 2 }} severity="error">
                {error}
              </Alert>
            )}
          </Grid>
          <Grid item md={6} xs={12}>
            <img width="100%" src={loginimg} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Ragister;
