import { AppBar, Button, Toolbar, Typography, Box, IconButton, Drawer, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
    active: string;
};

interface ButtonNavbarProps extends NavbarProps {
    index : string
    buttonText : string,
    linkTo? : string
};

const headerButtonLabels = [
    {
        index: '1',
        buttonText: 'Главная',
        linkTo: '/'
    },
    {
        index: '2',
        buttonText: 'Список зданий',
        linkTo: '/list'
    },
    {
        index: '3',
        buttonText: 'Контакты',
        linkTo: '/contacts'
    },
]

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

function SelectedButton({active, index, buttonText, linkTo} : ButtonNavbarProps) {
    const buttonVariant = (active === index) 
        ? 'contained'
        : 'text'

    return (
        <Link to={(linkTo) ? linkTo : ''}>
            <Button variant={ buttonVariant } color="info" size="medium">{ buttonText }</Button>
        </Link>
    )
};

function SelectedStyledMenuItem({active, index, buttonText, linkTo} : ButtonNavbarProps) {
    const selected = (active === index);

    return (
        <Link to={(linkTo) ? linkTo : ''}>
            <StyledMenuItem selected={ selected }>{ buttonText }</StyledMenuItem>
        </Link>
    )
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
                        {headerButtonLabels.map((obj) => (
                            <SelectedButton active={ active } index={ obj.index } buttonText={ obj.buttonText } linkTo={ obj.linkTo } />
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
                                {headerButtonLabels.map((obj) => (
                                    <SelectedStyledMenuItem active={ active } index={ obj.index } buttonText={ obj.buttonText } linkTo={ obj.linkTo } />
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
