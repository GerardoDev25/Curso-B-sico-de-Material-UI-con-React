import { Grid, CardMedia } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { PricipalInformation } from '../../components/PricipalInformation';
import { Description } from '../Description';

export const UserCard = ({ userState }) => {
  const { avatar_url } = userState;

  return (
    // <h1>hollo everyone</h1>
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '15px',
      }}
    >
      <Grid item xs={3}>
        <CardMedia
          component={'img'}
          image={avatar_url}
          sx={{ borderRadius: '50%', marginLeft: '5px' }}
          alt={avatar_url}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction={'column'}
          spacing={1}
          sx={{
            margin: '30px',
          }}
        >
          <PricipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
};
