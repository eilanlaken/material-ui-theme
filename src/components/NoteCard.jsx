import React from 'react';
import {
    makeStyles,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    IconButton,
    Typography,
    Avatar
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'work') return '#fff234';
            if (note.category === 'money') return '#14f300';
            if (note.category === 'todos') return '#04f264';
            return '#002244';
        }
    }
});

const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note);    

    return (
        <div>
            <Card elevation={3}>
                <CardHeader 
                  avatar={
                    <Avatar className={classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                  }
                  action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                  }
                  title={note.title}
                  subheader={note.category}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default NoteCard;