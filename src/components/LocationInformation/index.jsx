import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { LocationOn, Twitter, Business, Language } from '@mui/icons-material';
import React from 'react';

export const LocationInformation = ({ userState }) => {
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOn />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Twitter />
          <Typography>{twitter_username ? twitter_username : 'Jonh Doe'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Business />
          <Typography>{company ? company : 'not Avalable'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Language />
          <Typography>{blog ? blog : 'not Avalable'}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
