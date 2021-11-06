import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import TopHeader from '../../Shared/TopHeader/TopHeader';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Navigation></Navigation>
            <Banner></Banner>
        </div>
    );
};

export default Home;