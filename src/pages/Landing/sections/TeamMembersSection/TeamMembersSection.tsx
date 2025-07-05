import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

// Team members data for mapping
const teamMembers = [
  {
    id: 1,
    name: 'Kay Bloom',
    title: 'CEO, The Menopause Professor',
    description:
      'With a passion for menopause and a love for research, Kay delivers menopause tools so women can thrive.',
    image:
      'https://c.animaapp.com/mc2y1iih8FijXj/img/profile-image-placeholder-2.png',
    tags: ['Scientist', 'Researcher', 'CEO'],
  },
  {
    id: 2,
    name: 'Nelma Perera',
    title: 'CTO, AI Architect',
    description:
      'Nelma is a forward-thinking and hands-on technology leader with a proven track record of steering product visions and technical executions.',
    image:
      'https://c.animaapp.com/mc2y1iih8FijXj/img/profile-image-placeholder-2-1.png',
    tags: ['Engineer', 'Researcher', 'CTO'],
  },
  {
    id: 3,
    name: 'Kalila Kubatko',
    title: 'Graphic Designer',
    description:
      'With a passion for color and a love for clean lines, Kalila brings all our wildest design dreams to life.',
    image:
      'https://c.animaapp.com/mc2y1iih8FijXj/img/profile-image-placeholder-2-2.png',
    tags: ['UI/UX', 'Product', 'Usability'],
  },
];

export const TeamMembersSection = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        padding: '120px 55px',
        backgroundColor: '#5c2751',
        width: '100%',
      }}
    >
      <Stack alignItems="center" spacing={2.5} width="100%">
        <Typography
          variant="h2"
          color="text.primary"
          sx={{ mt: '-1px', color: 'white' }}
        >
          Meet our team
        </Typography>

        <Typography
          variant="body1"
          color="white"
          textAlign="center"
          sx={{
            fontFamily: 'var(--body-m-font-family)',
            fontSize: 'var(--body-m-font-size)',
            fontWeight: 'var(--body-m-font-weight)',
            letterSpacing: 'var(--body-m-letter-spacing)',
            lineHeight: 'var(--body-m-line-height)',
          }}
        >
          Get to know the faces behind the scenes and learn about the values
          that drive us.
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={3.75}
        width="100%"
        justifyContent="center"
      >
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            sx={{
              width: 370,
              borderRadius: '20px',
              border: '1px solid #e5f4f2',
              boxShadow: '34.85px 29.63px 48.34px rgba(50, 101, 255, 0.05)',
            }}
          >
            <CardContent
              sx={{
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Stack spacing={2} alignItems="center" width="100%">
                <Avatar
                  src={member.image}
                  alt={`${member.name} profile`}
                  sx={{ width: 100, height: 100 }}
                />

                <Stack spacing={0.75} width="100%">
                  <Typography
                    variant="h3"
                    textAlign="center"
                    color="neutral.900"
                    sx={{
                      fontFamily: "'Poppins', Helvetica",
                      fontSize: '21px',
                      fontWeight: member.id === 2 ? 700 : 600,
                      lineHeight: '27.3px',
                    }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    textAlign="center"
                    color="neutral.700"
                    sx={{
                      fontFamily: "'Mulish', Helvetica",
                      fontSize: '16px',
                      lineHeight: '20px',
                    }}
                  >
                    {member.title}
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                variant="body1"
                textAlign="left"
                color="#2d2d2d"
                sx={{
                  fontFamily: "'Mulish', Helvetica",
                  fontSize: '16px',
                  lineHeight: '25.6px',
                }}
              >
                {member.description}
              </Typography>

              <Stack
                direction="row"
                spacing={2.5}
                width="100%"
                justifyContent="center"
                alignItems="self-end"
                height="100%"
              >
                {member.tags.map((tag, index) => (
                  <Typography
                    key={index}
                    sx={{
                      width: '83.33px',
                      fontFamily: "'Poppins', Helvetica",
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#9c27b0',
                      textAlign: 'center',
                      lineHeight: '20px',
                    }}
                  >
                    {tag}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};
