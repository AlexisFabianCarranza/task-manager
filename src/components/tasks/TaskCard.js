import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../styles/basic.css';

export default class TaskCard extends Component {
    render(){
        return(
            <Card className='card'>
                <CardActionArea>
                    <CardMedia
                        style={{height: 30}}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Titulo de la tarea via props
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Descripcion de la tarea via prop
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Eliminar
                    </Button>
                    <Button size="small" color="primary">
                    Editar
                    </Button>
                </CardActions>
            </Card>
        )
    }
}
