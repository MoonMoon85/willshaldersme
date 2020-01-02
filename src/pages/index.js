import React from "react";
import Navbar from "./../components/Navbar";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import FeaturesSection2 from "./../components/FeaturesSection2";
import ContactSection from "./../components/ContactSection";
import Footer from "./../components/Footer";
import { useRouter } from "./../util/router.js";
import HeroImage from "./../images/hero.svg"


function IndexPage(props) {
  const router = useRouter();

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
        title="Hello! I'm Will, a frontend developer in Melbourne."
        buttonText="Let's have a chat!"
        buttonLink="#contact"
        image={HeroImage}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="A little about me."
        subtitle="I am a front end developer with 8+ years experience. I have worked in a wide variety of environments, from a boutique four person agency to an enterprise level software development team. My skills help bridge the gap between design and back end. I use html, css and javascript to build responsive, functional web sites & apps."
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
        subtitle="Phone: 0416 116 297, email: info@willshalders.me or fill in the form below."
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