import { Box, Container, Typography } from '@mui/material';
import { useRef } from 'react';
import { ContactSection } from './sections/ContactSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { HeroBannerSection } from './sections/HeroBannerSection';
import { MetricsOverviewSection } from './sections/MetricsOverviewSection';
import { NavigationBarSection } from './sections/NavigationBarSection';
import { PricingPlansSection } from './sections/PricingPlansSection';
import { TeamMembersSection } from './sections/TeamMembersSection';

const Landing = (): JSX.Element => {
  const pricingSectionRef = useRef(null);
  const teamSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);

  return (
    <Box
      sx={{
        bgcolor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
      data-model-id="419:8332"
    >
      <Container maxWidth={false} sx={{ width: '100%' }}>
        <Box sx={{ position: 'relative', mx: '-25px' }}>
          {/* Navigation Bar Section */}
          <Box sx={{ mb: 0 }}>
            <NavigationBarSection
              pricingSectionRef={pricingSectionRef}
              teamSectionRef={teamSectionRef}
              contactSectionRef={contactSectionRef}
            />

            <Box
              component="img"
              sx={{
                position: 'absolute',
                width: '118px',
                height: '37px',
                top: '31px',
                left: '58px',
                objectFit: 'cover',
              }}
              alt="Full logo"
              src="https://c.animaapp.com/mc2y1iih8FijXj/img/full-logo--8--1.png"
            />
          </Box>

          {/* Hero Banner Section */}
          <Box sx={{}}>
            <HeroBannerSection
              contactSectionRef={contactSectionRef}
              featuresSectionRef={featuresSectionRef}
            />
          </Box>

          {/* Features Section */}
          <Box sx={{}} id="feature-section" ref={featuresSectionRef}>
            <FeaturesSection />
          </Box>

          {/* Metrics Overview Section */}
          <Box sx={{}} id="metrics-overview-section">
            <MetricsOverviewSection />
          </Box>

          {/* Team Members Section */}
          <Box id="team-members-section" ref={teamSectionRef}>
            <TeamMembersSection />
          </Box>

          {/* Pricing Plans Section */}
          <Box id="pricing-plans-section" ref={pricingSectionRef}>
            <PricingPlansSection />
          </Box>

          {/* Contact Section */}
          <Box sx={{}} id="contact-section" ref={contactSectionRef}>
            <ContactSection />
            <Box
              component="footer"
              sx={{
                display: 'flex',
                height: '80px',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: '60px',
                py: '24px',
                bgcolor: '#5c2751',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Mulish', Helvetica",
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#ffffff',
                  lineHeight: '22.4px',
                  whiteSpace: 'nowrap',
                }}
              >
                © 2025 MenoQ
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Landing;
