import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { LocationInformation } from '../../components/LocationInformation';
import { PaperInformation } from '../../components/PaperInformation';

export const Description = ({ userState }) => {
  const { bio } = userState;

  return (
    <>
      <Stack>
        <Typography>
          {bio
            ? bio
            : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio voluptatum expedita nihil,'}
        </Typography>
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};
