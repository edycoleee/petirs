import React from "react";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardActions, Container } from '@mui/material';
import { Link, Outlet } from "react-router-dom";
import { getEvent } from "../repository/dataEvent";

function IndexSertifikat() {
    let dataEvents = getEvent();
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={4}>
      {dataEvents.map((post) => (
        <Grid item key={post.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              sx={{
                // 16:9
                //pt: '56.25%',
              }}
              image={""}
              alt={post.imageLabel}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
              {post.title}
              </Typography>
              <Typography>
              {post.description}, {post.date}
              </Typography>
            </CardContent>
            <CardActions>
              <Box sx={{ml:"10px"}}/>
              <Link
            to={`/serti/${post.linkSerti}`}
          >
            E-Sertifikat
          </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Outlet />
  </Container>
  );
}

export default IndexSertifikat;
