import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';
import Social from '../Social/Social';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import Banner from '../Banner/Banner';
import House from '../House/House';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <House></House>
            <SpecialOffer></SpecialOffer>
            <Subscribe></Subscribe>
            <Social></Social>
            <Footer></Footer>
        </div>
    );
};

export default Home;