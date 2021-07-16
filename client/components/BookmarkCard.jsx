import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditBookMarkModal from './modals/EditBookMarkModal';

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

  const { title, id, url, thumbnail, caption, category_id, user_id } =
    props.bookMark;

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={caption} />
      <CardMedia
                // className={classes.thumbnail}
                // image={props.thumbnail}
                // title={props.thumbnailTitle}
            />
      <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {url}
                </Typography>
            </CardContent>
            <CardActions disableSpacing={false} >
                {/* Dummy tag (example of a tag would be Sport, Programming etc) */}
      <button onClick={() => props.deleteBookmark(id)}>Delete</button>
      </CardActions>
      <button
        className='buttonEditBookmark'
        type='button'
        onClick={() => setExpanded(true)}
      >
        Edit
      </button>
      <EditBookMarkModal 
        bookMark={props.bookMark}
        show={expanded}
        onClose={() => setExpanded(false)}
      />
    </Card>
  );
}
