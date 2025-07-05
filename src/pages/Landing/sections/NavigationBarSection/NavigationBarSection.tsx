import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { MutableRefObject } from 'react';

export const NavigationBarSection = ({
  pricingSectionRef,
  teamSectionRef,
  contactSectionRef,
}: {
  pricingSectionRef: MutableRefObject<HTMLDivElement | null>;
  teamSectionRef: MutableRefObject<HTMLDivElement | null>;
  contactSectionRef: MutableRefObject<HTMLDivElement | null>;
}): JSX.Element => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        height: '100px',
        backgroundColor: 'background.paper',
      }}
    >
      <Toolbar
        sx={{ height: '100%', px: '50px', justifyContent: 'space-between' }}
      >
        {/* Logo section - left empty as in original code */}
        <Box display="flex" alignItems="center" gap={1.5} />

        {/* Navigation items */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          gap="50px"
        >
          <Button
            sx={{
              height: '30px',
              borderRadius: '20px',
              padding: 0,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
            onClick={() =>
              pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Typography
              fontFamily="'Poppins', Helvetica"
              fontWeight={600}
              fontSize="16px"
              lineHeight="24px"
              color="text.primary"
            >
              Pricing
            </Typography>
          </Button>

          <Button
            sx={{
              height: '30px',
              borderRadius: '20px',
              padding: 0,
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
            onClick={() =>
              teamSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <Typography
              fontFamily="'Poppins', Helvetica"
              fontWeight={600}
              fontSize="16px"
              lineHeight="24px"
              color="text.primary"
            >
              Team
            </Typography>
          </Button>

          <Box display="flex" gap={5}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={
                <RocketLaunchIcon
                  sx={{ width: '20px', height: '20px', color: 'white' }}
                />
              }
              sx={{
                height: '60px',
                padding: '16px 50px',
                borderRadius: '20px',
              }}
              onClick={() =>
                contactSectionRef.current?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              <Typography
                fontFamily="'Poppins', Helvetica"
                fontWeight={600}
                fontSize="16px"
                lineHeight="24px"
                color="#ffffff"
              >
                Contact
              </Typography>
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
