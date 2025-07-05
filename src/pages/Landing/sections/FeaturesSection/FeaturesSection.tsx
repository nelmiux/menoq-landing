import { Box, Grid, Paper, Stack, Typography } from '@mui/material';

// Feature data for mapping
const features = [
  {
    id: 1,
    title: 'Personalized Daily Tips',
    icon: 'https://c.animaapp.com/mc2y1iih8FijXj/img/flyingsaucer.svg',
    alt: 'Flying saucer',
  },
  {
    id: 2,
    title: 'Nutrition Blueprint',
    icon: 'https://c.animaapp.com/mc2y1iih8FijXj/img/magicwand.svg',
    alt: 'Magic wand',
  },
  {
    id: 3,
    title: 'Smart Symptom Tracking',
    icon: 'https://c.animaapp.com/mc2y1iih8FijXj/img/boundingbox.svg',
    alt: 'Bounding box',
  },
  {
    id: 4,
    title: 'Expert Workshops',
    icon: 'https://c.animaapp.com/mc2y1iih8FijXj/img/package.svg',
    alt: 'Package',
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        py: 15,
        px: 7,
        gap: 7.5,
        bgcolor: '#f5ebf3',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ position: 'relative', width: '540px', height: '450px' }}>
        <Box
          sx={{
            position: 'relative',
            width: '429px',
            height: '379px',
            top: '33px',
            left: '41px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '379px',
              height: '379px',
              top: 0,
              left: '50px',
              bgcolor: 'secondary.main',
              borderRadius: '189.31px',
            }}
          />

          <Box
            component="img"
            sx={{
              position: 'absolute',
              width: '100px',
              height: '126px',
              top: '63px',
              left: 0,
            }}
            alt="Subtract"
            src="https://c.animaapp.com/mc2y1iih8FijXj/img/subtract.svg"
          />

          <Box
            component="img"
            sx={{
              position: 'absolute',
              width: '50px',
              height: '63px',
              top: '208px',
              left: '364px',
            }}
            alt="Subtract"
            src="https://c.animaapp.com/mc2y1iih8FijXj/img/subtract.svg"
          />
        </Box>

        <Box
          component="img"
          sx={{
            position: 'absolute',
            width: '492px',
            height: '492px',
            top: '-20px',
            left: '50px',
            objectFit: 'cover',
          }}
          alt="Phone app screenshot"
          src="https://c.animaapp.com/mc2y1iih8FijXj/img/large-q-square--5--1.png"
        />
      </Box>

      <Stack spacing={6.25} sx={{ flex: 1 }}>
        <Stack spacing={2.5}>
          <Typography variant="h2" color="text.primary" sx={{ mt: '-1px' }}>
            What Makes MenoQ Different
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
            fontFamily="'Mulish', Helvetica"
          >
            It&apos;s not one-size-fits-all. MenoQ evolves with your symptoms,
            goals, and biology.
          </Typography>
        </Stack>

        <Box
          sx={{
            boxShadow: '34.85px 29.63px 48.34px rgba(50, 101, 255, 0.05)',
          }}
        >
          <Grid container spacing={2.5}>
            {features.map((feature, index) => (
              <Grid item xs={6} key={feature.id}>
                <Paper
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2.5,
                    gap: 2.5,
                    border: '1px solid #fcedff',
                    borderRadius: '20px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 1.5,
                      bgcolor: 'secondary.light',
                      borderRadius: '12.2px',
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: '25.61px',
                        height: '25.61px',
                      }}
                      alt={feature.alt}
                      src={feature.icon}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      mt: '-1px',
                      fontSize: 'var(--body-l-font-size)',
                      fontWeight: 'var(--body-l-font-weight)',
                      letterSpacing: 'var(--body-l-letter-spacing)',
                      lineHeight: 'var(--body-l-line-height)',
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};
