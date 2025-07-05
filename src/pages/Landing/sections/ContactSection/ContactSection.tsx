import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Alert,
  Box,
  Button,
  Divider,
  InputAdornment,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { SetStateAction, useState } from 'react';

// Contact information data
const contactInfo = [
  {
    icon: <PhoneIcon fontSize="small" />,
    text: '(504) 373-8432',
  },
  {
    icon: <EmailIcon fontSize="small" />,
    text: 'kay.bloom@menoq.com',
  },
];

export const ContactSection = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [fullNameError, setFullNameError] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [successSubmit, setSuccessSubmit] = useState(false);

  const handleFullNameChange = (e: {
    target: { value: SetStateAction<string>; validity: { valid: any } };
  }) => {
    setFullName(e.target.value);
    if (e.target.validity.valid) {
      setFullNameError(false);
    } else {
      setFullNameError(true);
    }
  };

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string>; validity: { valid: any } };
  }) => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleSubmit = async (e: {
    preventDefault: () => void;
    target: { checkValidity: () => any };
  }) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      try {
        const response = await fetch(
          'https://zo5r875ma9.execute-api.us-east-1.amazonaws.com/prod/contact',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName, email }),
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setResponseMessage(
          'Thank you for contacting us! We will get back to you soon.',
        );
        setSubmitError('');
        setFullName('');
        setEmail('');
        setSuccessSubmit(true);
      } catch (error) {
        console.error('Error posting data:', error);
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        setSubmitError('Failed to post data: ' + errorMessage);
        setResponseMessage('');
        setSuccessSubmit(false);
      }
    } else {
      alert('Form is invalid! Please check the fields and try again.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '60px 55px',
        bgcolor: 'primary.main',
        width: '100%',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          padding: '60px',
          bgcolor: 'background.paper',
          borderRadius: '20px',
          border: 1,
          borderColor: 'primary.main',
          width: '100%',
          maxWidth: '1170px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <Typography
            variant="h2"
            color="text.primary"
            sx={{ maxWidth: '465px' }}
          >
            Let&apos;s get in touch!
          </Typography>

          <Typography variant="body1" color="text.primary">
            Got questions about the Landing Page UI Kit? Our team is here to
            help. Contact us for quick and friendly support.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2.5}
          sx={{ width: '100%' }}
        >
          <Stack spacing={1.25} sx={{ maxWidth: '465px' }}>
            {contactInfo.map((item, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                spacing={0.75}
              >
                {item.icon}
                <Typography variant="body1" color="text.primary">
                  {item.text}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Stack spacing={2.5} sx={{ width: '100%', maxWidth: '465px' }}>
            <TextField
              fullWidth
              required
              placeholder="Full Name"
              value={fullName}
              error={fullNameError}
              inputProps={{
                pattern: '[A-Za-z ]+',
              }}
              helperText={
                fullNameError
                  ? 'Please enter a valid full name (letters and spaces only)'
                  : ''
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon fontSize="small" />
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        mx: 0.5,
                        height: '20px',
                        bgcolor: 'rgba(92, 39, 81, 0.1)',
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
              onChange={handleFullNameChange}
            />

            <TextField
              fullWidth
              required
              placeholder="Email"
              error={emailError}
              value={email}
              helperText={emailError ? 'Please enter a valid email' : ''}
              inputProps={{
                type: 'email',
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon fontSize="small" />
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        mx: 0.5,
                        height: '20px',
                        bgcolor: 'rgba(92, 39, 81, 0.1)',
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
              onChange={handleEmailChange}
            />

            <Button
              variant="contained"
              color="primary"
              sx={{
                bgcolor: '#f95cdd',
                width: 'fit-content',
                '&:hover': {
                  bgcolor: '#e04bc7',
                },
              }}
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Paper>
      <Snackbar
        open={successSubmit}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={() => setSuccessSubmit(false)}
      >
        <Alert severity="success">{responseMessage}</Alert>
      </Snackbar>
      <Snackbar
        open={!!submitError}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={() => setSubmitError('')}
      >
        <Alert severity="error">{submitError}</Alert>
      </Snackbar>
    </Box>
  );
};
