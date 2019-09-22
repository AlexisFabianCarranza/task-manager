import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../styles/task.css';

export default (props) => {
        return(
            <Card >
                <CardActionArea>
                    <CardMedia
                        style={{height: 30}}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={()=>props.taskUpdate(props.id, props.state,'next')}size="small" color="primary">
                    Siguiente
                </Button>
                <Button onClick={()=>props.taskUpdate(props.id, props.state,'previous')}size="small" color="primary">
                    atras
                </Button>
                <Button size="small" color="primary">
                    Editar
                </Button>
            </CardActions>
        </Card>
    )
}
