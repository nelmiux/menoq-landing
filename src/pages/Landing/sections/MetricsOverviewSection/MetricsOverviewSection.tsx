import { Box, Paper, Stack, Typography } from '@mui/material';

// Data for the cards to enable mapping
const metricsCards = [
  {
    number: '1',
    title: 'Personalized Daily Tips',
    description: 'Mini actions aligned with your body',
  },
  {
    number: '3',
    title: 'Menopause-Smart Nutrients',
    description: 'The right foods for your hormones',
  },
  {
    number: '5',
    title: 'Brain Boost Strategy',
    description: 'Science-backed clarity in 3 minutes',
  },
  {
    number: '7',
    title: 'Progress Points to Unlock',
    description: 'Small wins that spark motivation',
  },
];

export const MetricsOverviewSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        gap: '60px',
        px: { xs: 2, md: '55px' },
        py: '120px',
        bgcolor: '#f1e8f3',
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        spacing={2.5}
        sx={{ width: '100%' }}
      >
        <Typography variant="h2" color="text.primary" sx={{ mt: '-1px' }}>
          Your Custom Weekly MenoQ Reset
        </Typography>

        <Typography
          variant="body1"
          color="#2d2d2d"
          align="center"
          sx={{
            fontFamily: "'Mulish', Helvetica",
            fontSize: '16px',
            lineHeight: '20.8px',
          }}
        >
          Every week, your dashboard updates with fresh insights, actions, and
          science—designed to help you feel better fast.
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={3.75}
        sx={{ width: '100%', mb: '-73px' }}
      >
        {metricsCards.map((card, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              px: 2,
              py: 6,
              flex: 1,
              bgcolor: '#ffffff',
              borderRadius: '20px 20px 0 0',
              overflow: 'hidden',
              borderBottom: '4px solid #f2bfaf',
              boxShadow: '34.85px 29.63px 48.34px rgba(50, 101, 255, 0.05)',
            }}
          >
            <Typography
              variant="h2"
              color="#2d2d2d"
              align="center"
              sx={{
                alignSelf: 'stretch',
                mt: '-4px',
                color: '#2D2D2D',

                textAlign: 'center',
                /* Display M */
                fontFamily: 'Poppins',
                fontSize: '38px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '130%',
                letterSpacing: '-0.76px',
              }}
            >
              {card.number}
            </Typography>

            <Box sx={{ alignSelf: 'stretch' }}>
              <Typography
                variant="h3"
                color="#2d2d2d"
                align="center"
                sx={{
                  fontFamily: "'Mulish', Helvetica",
                  fontSize: '20px',
                  lineHeight: '26px',
                  fontWeight: 700,
                  mb: 0.5,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                variant="body1"
                color="#2d2d2d"
                align="center"
                sx={{
                  fontFamily: "'Mulish', Helvetica",
                  fontSize: '16px',
                  lineHeight: '20.8px',
                }}
              >
                {card.description}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};
