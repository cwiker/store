//import logo from './logo.svg';
//import './App.css';
//import React from 'react';
//import { Typography, AppBar, Toolbar, CssBaseline, Container, StyleSheet, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
//import MedicalServicesTwoToneIcon from '@mui/icons-material/MedicalServicesTwoTone';
// import Product from "./pages/Product";
// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
import Login from "./pages/Login";
//import Cart from "./pages/Cart";
//import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6]



const App = () => {
  
  //const classes = useStyles();

  return (
    <Login />
    // <>
    //   <CssBaseline />
    //   <AppBar position="relative" color="primary" size="large">
    //     <Toolbar>
    //       <MedicalServicesTwoToneIcon/>
    //         General Store
    //       <Typography variant="h6"></Typography>
    //     </Toolbar>
    //   </AppBar>
    //   <main>
    //     <div className={classes.container}>
    //       <Container maxWidth="sm" >
    //         <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
    //           General Store
    //         </Typography>
    //         <Typography variant="h5" align="center" color="textSecondary" paragraph>
    //           Welcome to the General Store in Valentine: Perveyor of Only the Highest Quality Consumables, Herbs, & Medicinals.
    //         </Typography>
    //         <div className={classes.button}>
    //           <Grid container spacing={2} justify="center">
    //             <Grid item>
    //               <Button variant="contained" color="secondary">
    //                 Available Products
    //               </Button>
    //             </Grid>
    //             <Grid item>
    //               <Button variant="contained" color="secondary">
    //                 Login
    //               </Button>
    //             </Grid>
    //           </Grid>
    //         </div>
    //       </Container>
    //     </div>
    //     <Container className={classes.cardGrid} maxWidth="md">
    //       <Grid container spacing={4}>
    //         {cards.map((card) => (

    //         <Grid item key={card} xs={12} sm={6} mid={4}>
    //           <Card className={classes.card}>
    //             <CardMedia 
    //             className={classes.CardMedia}
    //             image="https://img.atwiki.jp/rdr2jp/attach/63/46/Worths%20General%20Store.jpg"
    //             title="image title"
    //             />
    //             <CardContent className={classes.cardContent}>
    //               <Typography gutterBottom variant="h5">
    //                 Heading
    //               </Typography>
    //               <Typography>
    //                 Media card. Use this section to decribe content.
    //               </Typography>

    //             </CardContent>
    //             <CardActions>
    //               <Button size="small" color="primary">View</Button>
    //               <Button size="small" color="primary">Edit</Button>
    //             </CardActions>
    //           </Card>
    //         </Grid>
    //         ))}
    //       </Grid>
    //     </Container>
    //     </main>
    //     <footer className={classes.footer}>
    //           <Typography variant="h6" align="center" gutterBottom>
    //             Home  |  About  |  Account  |  Contact
    //           </Typography>
    //           <Typography variant="subtitle1" align="center" color="textSecondary">
    //             © 2022 CMW™® Inc. - All Rights Reserved
    //           </Typography>
    //     </footer>
      
    // </>
  );
}

export default App;
