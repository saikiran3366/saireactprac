import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import login from "../Assets/login.jpg";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [radio, setRadio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, cpwd, mobile, dob, address, radio);

    setName("");
    setEmail("");
    setPassword("");
    setCpwd("");
    setMobile("");
    setDob("");
    setAddress("");
    setRadio("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        lg={12}
        style={{
          backgroundColor: "plum",
          height: "100vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container item lg={8} style={{ height: 800, width: "100%" }}>
          <Grid
            container
            item
            lg={6}
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "white",
              alignContent: "flex-start",
              borderRight: "1px solid grey",
            }}
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
              <h2 style={{ margin: 0 }}>Register</h2>
            </Grid>
            <Grid container item={12} style={{ justifyContent: "center", alignItems: "center" }}>
              <Grid container item={12} style={{ height: 2, backgroundColor: "lightgrey", width: "70%" }}></Grid>
            </Grid>
            <Grid
              container
              item
              lg={12}
              style={{ height: "12%", width: "100%", justifyContent: "center", paddingTop: 20 }}
            >
              <Grid container item lg={10} style={{ height: "100%", width: "70%" }}>
                <Grid container item lg={3} style={{ height: "100%" }}>
                  <h4>Name</h4>
                </Grid>
                <Grid container item lg={0.5} style={{ height: "100%" }}>
                  <h4>:</h4>
                </Grid>
                <Grid container item lg={8.5} style={{ height: "100%", alignItems: "center" }}>
                  <TextField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="outlined-basic"
                    label="Enter Name"
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                </Grid>
              </Grid>
              <Grid container item lg={10} style={{ height: "100%", width: "70%" }}>
                <Grid container item lg={3} style={{ height: "100%" }}>
                  <h4>Email</h4>
                </Grid>
                <Grid container item lg={0.5} style={{ height: "100%" }}>
                  <h4>:</h4>
                </Grid>
                <Grid container item lg={8.5} style={{ height: "100%", alignItems: "center" }}>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="outlined-basic"
                    label="Email Address"
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                </Grid>
              </Grid>

              <Grid container item lg={10} style={{ height: "100%", width: "70%" }}>
                <Grid container item lg={3} style={{ height: "100%" }}>
                  <h4>Psssword</h4>
                </Grid>
                <Grid container item lg={0.5} style={{ height: "100%" }}>
                  <h4>:</h4>
                </Grid>
                <Grid container item lg={8.5} style={{ height: "100%", alignItems: "center" }}>
                  <TextField
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="outlined-basic"
                    label="Password"
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                </Grid>
              </Grid>
              <Grid container item lg={10} style={{ height: "100%", width: "70%" }}>
                <Grid container item lg={3} style={{ height: "100%" }}>
                  <h4>Confirm Pwd</h4>
                </Grid>
                <Grid container item lg={0.5} style={{ height: "100%" }}>
                  <h4>:</h4>
                </Grid>
                <Grid container item lg={8.5} style={{ height: "100%", alignItems: "center" }}>
                  <TextField
                    type="password"
                    value={cpwd}
                    onChange={(e) => setCpwd(e.target.value)}
                    id="outlined-basic"
                    label="Confirm Password"
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                </Grid>
              </Grid>
              <Grid container item lg={10} style={{ height: "100%", width: "70%" }}>
                <Grid container item lg={3} style={{ height: "100%" }}>
                  <h4>Mobile</h4>
                </Grid>
                <Grid container item lg={0.5} style={{ height: "100%" }}>
                  <h4>:</h4>
                </Grid>
                <Grid container item lg={8.5} style={{ height: "100%", alignItems: "center" }}>
                  <TextField
                    type="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    id="outlined-basic"
                    label="Mobile Num"
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                </Grid>
              </Grid>
              <Grid container item lg={10} style={{ height: "100%", width: "70%" }}>
                <Grid container item lg={3} style={{ height: "100%" }}>
                  <h4>Date of Birth</h4>
                </Grid>
                <Grid container item lg={0.5} style={{ height: "100%" }}>
                  <h4>:</h4>
                </Grid>
                <Grid container item lg={8.5} style={{ height: "100%", alignItems: "center" }}>
                  <TextField
                    autoFocus={true}
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    id="outlined-basic"
                    label="Date Of Birth"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                    style={{ width: "80%" }}
                  />
                </Grid>
              </Grid>

              <Grid container item lg={10} style={{ height: "100%", width: "70%" }}>
                <Grid container item lg={3} style={{ height: "100%" }}>
                  <h4>Gender</h4>
                </Grid>
                <Grid container item lg={0.5} style={{ height: "100%" }}>
                  <h4>:</h4>
                </Grid>
                <Grid container item lg={8.5} style={{ height: "100%", alignItems: "center" }}>
                  <FormControl>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                      <FormControlLabel
                        value="Female"
                        onChange={(e) => setRadio(e.target.value)}
                        control={<Radio checked={radio === "Female"} />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        onChange={(e) => setRadio(e.target.value)}
                        control={<Radio checked={radio === "male"} />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        onChange={(e) => setRadio(e.target.value)}
                        control={<Radio checked={radio === "other"} />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container item lg={10} style={{ height: "100%", width: "70%" }}>
                <Grid container item lg={3} style={{ height: "100%" }}>
                  <h4>Address</h4>
                </Grid>
                <Grid container item lg={0.5} style={{ height: "100%" }}>
                  <h4>:</h4>
                </Grid>
                <Grid container item lg={8.5} style={{ height: "100%", alignItems: "center" }}>
                  <textarea
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    style={{ width: "78%", maxLines: 5, height: 50 }}
                  ></textarea>
                </Grid>
              </Grid>

              <Grid container item={12} style={{ justifyContent: "center", marginTop: 30 }}>
                <Button
                  // onClick={handleSubmit}
                  type="submit"
                  style={{
                    backgroundColor: "purple",
                    width: "30%",
                    height: "40px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
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
              <h2 style={{ margin: 0 }}>Your Details </h2>
            </Grid>
            <Grid container item={12} style={{ justifyContent: "center", alignItems: "center" }}>
              <Grid container item={12} style={{ height: 2, backgroundColor: "lightgrey", width: "70%" }}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
