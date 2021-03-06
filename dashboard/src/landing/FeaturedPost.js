import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardActions, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function FeaturedPost(props) {
  const { posts } = props;
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={4}>
      {posts.map((post) => (
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
              image={post.image}
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
              <Button size="small">LIHAT</Button>
              <Button size="small">DAFTAR</Button>
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
  </Container>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;