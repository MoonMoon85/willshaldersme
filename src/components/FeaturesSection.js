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
              title: "I write HTML",
              description:
                "Mobile first, clean & semantic. I can use JSX or write it the old fashined way.",
              image: `${Html}`
            },
            {
              title: "And CSS",
              description:
                "I am comfortable with Sass but also use the React css ecosystem.",
              image: `${Css}`
            },
            {
              title: "I like to automate",
              description:
                "Using tools like Webpack or Gulp. Wrting tests and working with CI/CD",
              image: `${Workflow}`
            },
            {
              title: "And of course Javscript",
              description:
                "Strong programming fundamentals using Vanilla and React are my go to's",
              image: `${Javascript}`
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
