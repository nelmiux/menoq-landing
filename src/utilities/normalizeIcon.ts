import { SvgIcon } from '@mui/material';

export const normalizeIcon = (Icon: typeof SvgIcon) => {
  const genericIcon = Icon as object;

  return ('default' in genericIcon ? genericIcon.default : Icon) as typeof SvgIcon;
};
