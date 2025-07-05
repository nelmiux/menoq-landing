import { Route, Routes } from 'react-router-dom';

import { Box } from '@mui/material';

import Landing from '@/pages/Landing';
import { useEffect } from 'react';
import { mainBoxContainer } from './styles';

const AppRoutes = () => {
  return (
    <Box sx={mainBoxContainer}>
      <Routes>
        <Route key="/" path="/" element={<Landing />} />
        <Route
          key="/facebook"
          path="/facebook"
          element={<FacebookRedirect />}
        />
      </Routes>
    </Box>
  );
};

const FacebookRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://m.facebook.com/groups/bloomerbrigade/';
  }, []);
  return null;
};

export default AppRoutes;
