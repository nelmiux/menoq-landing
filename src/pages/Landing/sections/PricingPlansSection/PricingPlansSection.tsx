import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Chip, Container, Paper, Stack, Typography } from '@mui/material';

export const PricingPlansSection = (): JSX.Element => {
  // Plan data for mapping
  const plans = [
    {
      name: 'Trial',
      price: '$0',
      period: '(14-Day Trial)',
      description: 'Get started with expert insight, no obligation',
      features: ['3 Daily Tips', 'Goal-Based Insights', 'Symptom Check'],
      isFeatured: false,
    },
    {
      name: 'Core',
      price: '$28',
      period: '/month',
      description: 'Daily guidance tailored to your biology and goals.',
      features: [
        '3 Custom Daily Tips',
        'Personalized Nutrition Protocol',
        'Monthly Workshops',
        'Community Access (Read Only)',
      ],
      isFeatured: false,
    },
    {
      name: 'Elite',
      price: '$88',
      period: '/month',
      description:
        'Advanced tools and personalized action plans for total transformation.',
      features: [
        'Smart Daily Tip Stacking',
        'Personalized Recipes & Protocol',
        'Community Q&A Access',
        'Weekly Action Plan',
        'Full Replay Vault',
      ],
      isFeatured: true,
    },
  ];

  return (
    <Paper
      sx={{
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden',
        boxShadow: '0px 0px 12px 4px rgba(0, 0, 0, 0.12)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(223,212,221,1) 53%)',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" mb={8}>
          <Typography variant="h2" color="text.primary" sx={{ mt: '-1px' }}>
            Pick Your Perfect Plan
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.primary"
            sx={{
              fontFamily: "'Mulish', Helvetica",
              fontSize: '16px',
              lineHeight: '20.8px',
            }}
          >
            Find the perfect plan for your business with our flexible pricing
            options.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4,
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          {plans.map((plan, index) => (
            <Paper
              key={index}
              sx={{
                borderRadius: '5px',
                position: 'relative',
                backgroundColor: plan.isFeatured ? 'primary.main' : 'white',
                color: plan.isFeatured ? 'white' : 'primary.main',
                p: 3,
                width: { xs: '100%', sm: '320px' },
                height: 'auto',
                mt: 0,
              }}
              elevation={plan.isFeatured ? 4 : 1}
            >
              {plan.isFeatured && (
                <Chip
                  label="MOST POPULAR"
                  sx={{
                    position: 'absolute',
                    top: 24,
                    right: 24,
                    backgroundColor: 'white',
                    color: 'primary.dark',
                    fontWeight: 800,
                    fontSize: '10px',
                    letterSpacing: '0.83px',
                  }}
                />
              )}

              <Stack spacing={2}>
                <Box
                  sx={{ height: '46px', display: 'flex', alignItems: 'center' }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 600,
                      fontSize: '2.5rem',
                      lineHeight: '46px',
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography
                    sx={{
                      ml: 1,
                      fontWeight: 500,
                      fontSize: '17px',
                      mt: 1,
                    }}
                  >
                    {plan.period}
                  </Typography>
                </Box>

                <Stack spacing={1}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 600,
                      fontSize: '20px',
                    }}
                  >
                    {plan.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '12px',
                      width: '232px',
                    }}
                  >
                    {plan.description}
                  </Typography>
                </Stack>

                <Stack spacing={2}>
                  {plan.features.map((feature, idx) => (
                    <Box
                      key={idx}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <CheckCircleIcon
                        sx={{
                          width: '20px',
                          height: '20px',
                          mr: 1,
                        }}
                      />
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: '12px',
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {/* <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    borderRadius: '5px',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '15px',
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                    },
                    opacity: plan.isFeatured ? 1 : 0.8,
                  }}
                >
                  Choose plan
                </Button> */}
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Paper>
  );
};
