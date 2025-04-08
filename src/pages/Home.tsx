import React from 'react';
import Hero from '../components/Hero';
import StemSection from '../components/StemSection';
import Events from '../components/Events';
import Newsletter from '../components/Newsletter';
import Magazine from '../components/Magazine';
import Community from '../components/Community';
import Alumni from '../components/Alumni';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <StemSection />
            <Events />
            <Newsletter />
            <Magazine />
            <Community />
            <Alumni />
        </>
    );
};

export default Home;