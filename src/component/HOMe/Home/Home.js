import React from 'react';
import NaviBar from '../../Shared/NaviBar/NaviBar';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import BottomBanner from '../BottomBanner/BottomBanner';
import DentalCare from '../DentalCare/DentalCare';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import HomeAppointment from '../HomeAppointment/HomeAppointment';
import MyContact from '../Mycontact/Mycontact';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <NaviBar></NaviBar>
      <Banner> </Banner>
      <BottomBanner></BottomBanner>
      <Services> </Services>
      <DentalCare></DentalCare>
      <HomeAppointment> </HomeAppointment>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Doctor></Doctor>
      <MyContact> </MyContact>
      <Footer></Footer>

    </div>
  );
};

export default Home;