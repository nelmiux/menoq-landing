import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import { fullSizeCenteredFlexBox } from './styles';

const Loading = () => {
  return (
    <Box sx={fullSizeCenteredFlexBox}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
