import { Box, Container, Typography } from "@mui/material"
import Navbar from "../components/Navbar"
import structures from "../data";
import { useParams } from "react-router-dom";

const BuildingCard = ({structureId} : {structureId : number}) => {
    const title = structures[structureId].title
    const description = structures[structureId].description
    const img = structures[structureId].img

    return (
        <>
            <Box sx={{ padding: 2, maxWidth: "900px", margin: "auto" }}>
                <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: 'gray' }}>
                    {title}
                </Typography>

                <img
                    src={img}
                    alt={title}
                    style={{ width: "100%", maxHeight: '500px', objectFit: 'contain'}}
                />
            </Box>
            <Box mt={3} sx={{ display: 'flex', flexBasis: '100%', textAlign: 'justify', columnGap: 5}}>
                {description.map((text: string, index: number) => (
                <Typography key={index} variant="body1" paragraph sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 0 }}>
                    {text}
                </Typography>
                ))}
            </Box>
        </>
    )
}

const Building = () => {
    const { structureId } = useParams<{ structureId : string }>()

    return (
        <div>
            <Navbar />
            <Container maxWidth='xl' >
                <BuildingCard structureId={ Number(structureId) } />
            </Container>
        </div>
    )
}

export default Building