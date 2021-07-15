import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  thumbnail: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function BookmarkCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

<<<<<<< HEAD
  const { title, url, thumbnail, caption, id} = props.bookMark;
  // console.log('ID in BookmarkCard', id)
=======
  const { title, url, thumbnail, caption } = props.title;

>>>>>>> dev
  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={caption} />
      {/* <CardMedia
                // className={classes.thumbnail}
                // image={props.thumbnail}
                // title={props.thumbnailTitle}
            /> */}
     <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    url: {url}
                </Typography>
            </CardContent>
            <CardActions disableSpacing={false} >
                {/* Dummy tag (example of a tag would be Sport, Programming etc) */}
<<<<<<< HEAD
      <button onClick={() => props.deleteBookmark(id)}>Delete</button>
      <button onClick={() => props.editBookmark(id)}>Edit</button>
      {/* </CardActions> */}
=======
      <Button variant="outlined">What Should I Do?</Button>
      </CardActions>
>>>>>>> dev
    </Card>
  );
}
