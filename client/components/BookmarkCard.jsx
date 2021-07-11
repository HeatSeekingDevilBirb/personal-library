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

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.title}
                subheader={props.caption}
            />
            <CardMedia
                className={classes.thumbnail}
                image={props.thumbnail}
                title={props.thumbnailTitle}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing={false}>
                {/* Dummy tag (example of a tag would be Sport, Programming etc) */}
                <Button variant="outlined">Default</Button>
            </CardActions>
        </Card>
    );
}
