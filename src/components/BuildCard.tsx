import { Card, CardMedia, Box, CardContent, Typography, CardActions, Button } from "@mui/material";
import { styled } from "@mui/material/styles";


interface ComponentProps {
    building: {
        img: string,
        title: string,
        description: string[]
    },
    cardNumber: number
}

const StyledTypograhy = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(1)
}))


function BuildingCard({ building, cardNumber } : ComponentProps) {
    return (
        <Card sx={{ display: 'flex' }}>
            <Box>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        { building.title }
                    </Typography>
                    { building.description.map((item, ind) => (
                        <StyledTypograhy key={ ind } variant="body2">
                            { item }
                        </StyledTypograhy>
                    )) }
                </CardContent>
                <CardActions sx={{ justifyContent: 'start' }}>
                    <Button size="small">Подробнее</Button>
                </CardActions>
            </Box>
            <CardMedia 
                component= "img"
                alt= { building.title }
                image= { building.img }
            />
        </Card>
    )
}

export default BuildingCard