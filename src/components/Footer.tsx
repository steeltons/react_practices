import { Box, Container, Link, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { IconType } from 'react-icons';
import { FaVk } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';


interface SocialMediaButtonProps {
    link : string,
    label : string,
    icon : IconType
}

const StyledFooterTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialMediaButton = ({link, label, icon : Icon} : SocialMediaButtonProps) => {
    return (
        <IconButton
            href={ link }
            aria-label={ label }
        >
            <Icon />
        </IconButton>
    )
}

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 4, mt: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">

          <Grid spacing={{ xs: 12, md: 4 }}>
            <StyledFooterTypography variant="h6" gutterBottom>
              Самые высокие здания
            </StyledFooterTypography>
            <StyledFooterTypography variant="body2">
              © {new Date().getFullYear()} Jenjetsu.com
            </StyledFooterTypography>
          </Grid>

          {/* Разделы */}
          <Grid spacing={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Разделы
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <FooterLink href="#top10" variant="body2">
                Топ-10 высоток
              </FooterLink>
              <FooterLink href="#new" variant="body2">
                Новинки
              </FooterLink>
              <FooterLink href="#about" variant="body2">
                О проекте
              </FooterLink>
              <FooterLink href="#contact" variant="body2">
                Контакты
              </FooterLink>
            </Box>
          </Grid>

        {/* Соц. Медиа */}
          <Grid spacing={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Следите за нами
            </Typography>
            <Box>
              <SocialMediaButton 
                link='https://vk.com'
                label='Vk группа'
                icon={FaVk}
              />
              <SocialMediaButton 
                link='https://web.telegram.org/'
                label='Tg канал'
                icon={SiTelegram}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer