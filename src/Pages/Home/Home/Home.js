import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TopHeader from '../../Shared/TopHeader/TopHeader';
import Banner from '../Banner/Banner';
import HomeCampaign from '../HomeCampaign/HomeCampaign';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Volunteers from '../Volunteers/Volunteers';
import WhoWeAre from '../WhoWeAre/WhoWeAre';

const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Navigation></Navigation>
            <Banner></Banner>
            <WhoWeAre></WhoWeAre>
            <Review></Review>
            <HomeCampaign></HomeCampaign>
            <Success></Success>
            <Volunteers></Volunteers>
            <Footer></Footer>
        </div>
    );
};

export default Home;