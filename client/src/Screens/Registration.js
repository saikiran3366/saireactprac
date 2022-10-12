import "../styles/Styles.css";
import { Typography, AppBar, Toolbar, TextField, Button, Box, Grid } from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
export default function Registration() {
  const [name, setName] = useState(" ");

  //   const handleChange=()=>{
  //     setState({
  //         target.name=e.target.value
  //     })
  //   }

  console.log(name, "sdkjh");
  return (
    <div className="App">
      <AppBar>
        <toolbar>
          <h1>SIGNIN FORM </h1>
        </toolbar>
      </AppBar>

      <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
      <form>
        <Grid>
          <TextField
            style={{ width: "200px", marginTop: "80px" }}
            type="text"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField style={{ width: "200px", margin: "5px" }} type="date" variant="outlined" />
          <br />
          <Grid>
            <input
              type="checkbox"
              id="createLP_jobFunction_1"
              name="inputName"
              value="inputValue"
              //   checked={this.state["inputName"].has("inputValue")}
              //   onChange={this.handleCheckboxChange}
            />
            Check Box
          </Grid>
          <br />
          <TextField style={{ width: "200px", margin: "5px" }} type="password" label="Password" variant="outlined" />
          <br />
          <TextField style={{ width: "200px", margin: "5px" }} type="number" label="Mobile Num" variant="outlined" />
          <br />
          <TextField style={{ width: "200px", margin: "5px" }} type="color" label="Colour" variant="outlined" />
          <br />
          <input style={{ width: "200px", margin: "5px" }} type="range" label="City" variant="outlined" />
          <br />
          <TextField style={{ width: "200px", margin: "5px" }} type="file" variant="outlined" />
          <br />
          <Grid>
            <input style={{ margin: "5px" }} type="radio" variant="outlined" />
            Male
            <input style={{ margin: "5px" }} type="radio" variant="outlined" />
            FeMale
          </Grid>
          <br />
          <TextField style={{ width: "200px", margin: "5px" }} type="search" variant="outlined" label="Search" />
          <br />
          <TextField style={{ width: "200px", margin: "5px" }} type="month" variant="outlined" />
          <br />

          <br />
          <Button variant="contained" color="primary" type="button">
            save
          </Button>
        </Grid>
      </form>
    </div>
  );
}

// import React from "react";
// import { Grid } from "@mui/material";

// export default function Registration() {
//   return (
//     <Grid container lg={12} style={{ height: "100vh", width: "100%", justifyContent: "center" }}>
//       <Grid item lg={10} style={{ backgroundColor: "green", flexDirection: "column", height: "50%" }}>
//         <Grid
//           item
//           lg={12}
//           style={{
//             backgroundColor: "blue",
//             justifyContent: "center",
//             alignItems: "center",
//             display: "flex",
//             color: "white",
//             height: "60px",
//             // width: "100%",
//             fontWeight: "bold",
//             fontSize: 18,
//             flexDirection: "column",
//           }}
//         >
//           Registration Page
//         </Grid>
//         <Grid
//           container
//           item
//           lg={10}
//           style={{
//             backgroundColor: "lightgreen",
//             height: 100,
//             width: "100%",
//           }}
//         ></Grid>
//       </Grid>
//     </Grid>
//   );
// }
