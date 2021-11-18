import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";
import Html from './../images/html.svg'
import Css from './../images/css.svg'
import Workflow from './../images/workflow.svg'
import Javascript from './../images/react.svg'

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Strong experience in React",
              description:
                "Highly proficient in modern JavaScript front end technologies. ES6+, React, React Native and the surrounding eco system. Building scalable, reusable and tested components. With strong functional programming fundamentals.",
              image: `${Javascript}`
            },
            {
              title: "I like workflow tools",
              description:
                "Using tools like Webpack or Babel. Building and maintaining CI/CD pipelines. Creating and working within Git workflows. Experience in Bitrise, AWS, Vercel, Netlify and Bitbucket pipelines.",
              image: `${Workflow}`
            },
            {
              title: "And CSS",
              description:
                "Building responsive scalable components and apps. Experience with styled components, emotion, tailwind and sass. I have an eye for design and impactful user experience. I am a proponent for design systems and reusability.",
              image: `${Css}`
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
