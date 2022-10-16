import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { LocationOn, Twitter, Business, Language } from '@mui/icons-material';
import React from 'react';

export const LocationInformation = ({ userState }) => {
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '15px',
      }}
    >
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LocationOn />
          <Typography>{location}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <Twitter />
          <Typography>{twitter_username ? twitter_username : 'Jonh Doe'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <Business />
          <Typography>{company ? company : 'not Avalable'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <Language />
          {blog ? (
            <a href={blog} target='_blank'>
              <Typography>{blog}</Typography>
            </a>
          ) : (
            <Typography>not Avalable</Typography>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};
