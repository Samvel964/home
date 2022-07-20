import './style.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({title, description, img}) {
  return (
    <div className='container '>
      <Card sx={{ maxWidth: 345,minHeight:360,backgroundColor:'#252424'}} className="main-Card border">
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color:'white'}}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
