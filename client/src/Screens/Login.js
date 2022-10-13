import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import login from "../Assets/login.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password, "hello");
  return (
    <Grid
      container
      lg={12}
      style={{
        backgroundColor: "palevioletred",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container item lg={8} style={{ height: "60vh", width: "100%" }}>
        <Grid
          container
          item
          lg={6}
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRight: "1px solid grey",
          }}
        >
          <img style={{ height: "70%", width: "100%" }} src={login} />
        </Grid>
        <Grid
          container
          alignContent={"flex-start"}
          item
          lg={6}
          style={{ height: "100%", width: "100%", backgroundColor: "white" }}
        >
          <Grid
            container
            item={12}
            style={{
              height: "10%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 style={{ margin: 0 }}>Log in</h2>
          </Grid>
          <Grid container item={12} style={{ justifyContent: "center", alignItems: "center" }}>
            <Grid container item={12} style={{ height: 2, backgroundColor: "lightgrey", width: "70%" }}></Grid>
          </Grid>

          <Grid container item lg={12} style={{ marginTop: 120 }}>
            <Grid
              item={12}
              style={{
                height: "10%",
                width: "100%",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                display: "flex",
              }}
            >
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-basic"
                label="Enter Email"
                size="medium"
                variant="outlined"
                style={{ width: "60%" }}
              />
            </Grid>
            <Grid
              item={12}
              style={{
                height: "10%",
                width: "100%",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                display: "flex",
                marginTop: 20,
              }}
            >
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="outlined-basic"
                label="Enter Password"
                size="medium"
                variant="outlined"
                style={{ width: "60%" }}
              />
            </Grid>
            <Grid
              item={12}
              style={{
                height: "10%",
                width: "100%",
                alignItems: "center",
                display: "flex",
                marginTop: 20,
                paddingLeft: 125,
              }}
            >
              <input type="checkbox"></input>
              <h3 style={{ paddingLeft: 10 }}>Remember Me</h3>
            </Grid>
            <Grid container item={12} style={{ justifyContent: "center", marginTop: 20 }}>
              <Button
                style={{ backgroundColor: "purple", width: "60%", height: "50px", color: "white", fontWeight: "bold" }}
              >
                Login
              </Button>
            </Grid>

            <Grid container item={12} style={{ justifyContent: "center" }}>
              <Link to="/signUp" style={{ textDecoration: "none" }}>
                <h5
                  style={{
                    margin: 0,
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  SignUp Now..!
                </h5>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
