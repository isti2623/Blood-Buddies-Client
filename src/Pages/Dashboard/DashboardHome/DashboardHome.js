import { Grid } from '@mui/material';
import React from 'react';
import MyPost from '../MyPost/MyPost';

const DashboardHome = () => {
    return (
        <Grid item xs={12}>
            <MyPost></MyPost>
        </Grid>
    );
};

export default DashboardHome;