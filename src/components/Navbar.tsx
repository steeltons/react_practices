import { AppBar, Button, Toolbar, Typography, Box, IconButton, Drawer, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { useState } from "react";

interface NavbarProps {
    active: string;
};

interface ButtonNavbarProps extends NavbarProps {
    index : string
    buttonText : string
};

const headerButtonLabels: string[] = ['Главная', 'Список зданий', 'Контакты'];

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px'

}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    transition: 'background-color 0.3s linear',

    ":hover": {
        backgroundColor: '#66ccff',
    },
    "&.Mui-selected": {
        backgroundColor: '#0099ff'
    }
}))

function SelectedButton({active, index, buttonText} : ButtonNavbarProps) {
    const buttonVariant = (active === index) 
        ? 'contained'
        : 'text'

    return <Button variant={ buttonVariant } color="info" size="medium">{ buttonText }</Button>
};

function SelectedStyledMenuItem({active, index, buttonText} : ButtonNavbarProps) {
    const selected = (active === index);

    return <StyledMenuItem selected={ selected }>{ buttonText }</StyledMenuItem>
};


const Navbar = ({ active } : NavbarProps) => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => {
        setOpen(newOpen)
    }

    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '28px'
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{color: "#5d8aa8"}}>
                        Самые высокие здания и сооружения
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {/* Замена Button для отображения активных кнопок */}
                        {headerButtonLabels.map((text, index) => (
                            <SelectedButton active={ active } index={ (index + 1).toString() } buttonText={ text } />
                        ))}
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton aria-label="Menu button" onClick={() => toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={ open }
                            onClose={() => toggleDrawer(false)}
                        >
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}
                                >
                                    <IconButton onClick={() => toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box>
                                {/* Замена MenuItem для отображения активных кнопок */}
                                {headerButtonLabels.map((text, index) => (
                                    <SelectedStyledMenuItem active={ active } index={ (index + 1).toString() } buttonText={ text } />
                                ))}
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;
