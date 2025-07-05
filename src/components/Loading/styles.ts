const flexBox = {
  display: 'flex',
};

const centeredFlexBox = {
  ...flexBox,
  justifyContent: 'center',
  alignItems: 'center',
};

export const fullSizeCenteredFlexBox = {
  ...centeredFlexBox,
  width: '100%',
  height: '100%',
};
