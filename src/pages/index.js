import React from "react";
import Navbar from "./../components/Navbar";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ContactSection from "./../components/ContactSection";
import HeroImage from "./../images/hero.svg"


function IndexPage(props) {

  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo='Will Shalders'
        buttonLink="#contact"
      />
      <HeroSection
        color="white"
        size="medium"
        title="Hello! I'm Will. Senior frontend developer in Melbourne."
        buttonText="Let's have a chat!"
        buttonLink="#contact"
        image={HeroImage}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="A little about me."
        subtitle="I am a Senior Front End Developer with 10 years experience. My skills help bridge the gap between design and back end, understanding business requirements and providing tech feasibility. Currently leading a team of developers working in React Native building a highly interactive fast moving application."
      />
      {/* <FeaturesSection2
        color="white"
        size="medium"
        title="Stuff I've worked on"
        subtitle="A small collection of work"
      /> */}
      <ContactSection
        color="white"
        size="medium"
        title="Get in touch"
        subtitle="Phone: 0416 116 297 | Email: info@willshalders.me"
        showNameField={true}
        buttonText="Send message"
        buttonLink="#contact"
      />
      {/* <Footer
        color="white"
        size="normal"
        logo="https://uploads.divjoy.com/logo.svg"
        copyright="© 2019 Company"
      /> */}
    </>
  );
}

export default IndexPage;
