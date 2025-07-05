import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Box, Button, Stack, Typography } from '@mui/material';
import { MutableRefObject } from 'react';

// Data for the hero section
const heroData = (
  contactSectionRef: MutableRefObject<HTMLDivElement | null>,
  featuresSectionRef: MutableRefObject<HTMLDivElement | null>,
) => ({
  title: 'Modern Menopause Wellness',
  description:
    'Personalized daily tips, nutrition protocols, and science-backed support designed for your body—finally.',
  buttons: [
    {
      text: 'Contact',
      variant: 'contained',
      icon: <RocketLaunchIcon sx={{ width: 20, height: 20, color: 'white' }} />,
      color: 'secondary',
      onClick: () =>
        contactSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
        }),
    },
    {
      text: 'Features',
      variant: 'outlined',
      icon: null,
      color: 'primary',
      onClick: () =>
        featuresSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
        }),
    },
  ],
});

export const HeroBannerSection = ({
  contactSectionRef,
  featuresSectionRef,
}: {
  contactSectionRef: MutableRefObject<HTMLDivElement | null>;
  featuresSectionRef: MutableRefObject<HTMLDivElement | null>;
}): JSX.Element => {
  const heroDataInstance = heroData(contactSectionRef, featuresSectionRef);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 7,
        py: 15,
        bgcolor: 'primary.light',
        width: '100%',
        height: '690px',
      }}
    >
      <Stack spacing={10} alignItems="flex-start">
        <Stack spacing={5} alignItems="flex-start" sx={{ maxWidth: '648px' }}>
          <Typography
            variant="h1"
            color="text.primary"
            sx={{
              fontFamily: 'Poppins',
              fontSize: '67px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '130%' /* 87.1px */,
              letterSpacing: '-1.675px',
            }}
          >
            {heroDataInstance.title}
          </Typography>

          <Typography
            color="text.primary"
            sx={{
              fontFamily: "'Mulish', Helvetica",
              fontSize: '21px',
              fontWeight: 400,
              lineHeight: '31.5px',
            }}
          >
            {heroDataInstance.description}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2.25}>
          {heroDataInstance.buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant as 'contained' | 'outlined'}
              color={button.color as 'primary' | 'secondary'}
              startIcon={button.icon}
              sx={{
                height: '60px',
                borderRadius: '20px',
                px: 6.25,
                py: 2,
                ...(index === 0 && {
                  bgcolor: 'secondary.main',
                  '&:hover': {
                    bgcolor: 'secondary.dark',
                  },
                }),
                ...(index === 1 && {
                  bgcolor: '#ffffff',
                  border: '1px solid black',
                  color: 'black',
                }),
                ...(index === 0 && {
                  color: 'white',
                }),
                transition: 'all 0.3s ease',
              }}
              onClick={button.onClick}
            >
              {button.text}
            </Button>
          ))}
        </Stack>
      </Stack>

      <Box sx={{ width: '450px', height: '450px', position: 'relative' }}>
        <Box sx={{ position: 'relative', height: '401px', top: '21px' }}>
          <Box
            sx={{
              position: 'absolute',
              width: '401px',
              height: '401px',
              top: 0,
              left: '25px',
              bgcolor: '#5c27514f',
              borderRadius: '200.69px',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '147px',
              height: '147px',
              top: '18px',
              left: '303px',
              borderRadius: '73.28px',
              border: '31.55px solid',
              borderColor: 'primary.dark',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '86px',
              height: '86px',
              top: '244px',
              left: 0,
              borderRadius: '43px',
              border: '31.55px solid',
              borderColor: 'secondary.main',
            }}
          />
          <Box
            component="img"
            src="https://c.animaapp.com/mc2y1iih8FijXj/img/star.svg"
            alt="Star"
            sx={{
              position: 'absolute',
              width: '23px',
              height: '23px',
              top: '153px',
              left: '379px',
            }}
          />
          <Box
            component="img"
            src="https://c.animaapp.com/mc2y1iih8FijXj/img/star.svg"
            alt="Star"
            sx={{
              position: 'absolute',
              width: '23px',
              height: '23px',
              top: '288px',
              left: '72px',
            }}
          />
          <Box
            component="img"
            sx={{
              position: 'absolute',
              width: '499px',
              height: '499px',
              top: -45,
              left: -20,
              objectFit: 'cover',
            }}
            alt="App screenshot"
            src="https://c.animaapp.com/mc2y1iih8FijXj/img/large-q-square--4--1.png"
          />
        </Box>
      </Box>
    </Box>
  );
};
