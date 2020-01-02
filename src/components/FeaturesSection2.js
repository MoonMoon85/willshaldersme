import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features2 from "./Features2";
import "./FeaturesSection2.scss";
import NextToJump from './../images/bet-easy-njt.jpg'

function ProjectNav ({ selected, onUpdateLanguage }) {
  const languages = ['Project One', 'Project Two', 'Project Three', 'Project Four']

  return (
    <nav className='container'>
      <div className='is-spaced is-centered'>
        
        {languages.map((language) => (
          <button 
            key={language}
            className='btn-clear nav-link'
            style={language === selected ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(language)}>
            {language}
          </button>
        ))}
      </div> 
    </nav>
  )
}

class FeaturesSection2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedProject: 'Project One'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage (selectedProject) {
    this.setState({
      selectedProject
    })
  }

  render() {
    const { selectedProject } = this.state

    return (
      <Section color={this.props.color} size={this.props.size}>
        <div className="container">
          <SectionHeader
            title={this.props.title}
            subtitle={this.props.subtitle}
            centered={true}
            size={3}
          />
          <ProjectNav
            selected={selectedProject}
            onUpdateLanguage={this.updateLanguage}
          />
          <div className="FeaturesSection2__box box">
            {selectedProject === 'Project One' && (
              <Features2
                columns={1}
                items={[
                  {
                    title: "BetEasy - Next To Jump Feature",
                    body:
                      "React, REST API, Webpack, JSON",
                    image: `${NextToJump}`
                  }
                ]}
              />
            )}

            {selectedProject === 'Project Two' && (
              <Features2
                columns={1}
                items={[
                  {
                    title: "Project Two",
                    body:
                      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                    image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg"
                  }
                ]}
              />
            )}

            {selectedProject === 'Project Three' && (
              <Features2
                columns={1}
                items={[
                  {
                    title: "Project Three",
                    body:
                      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                    image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg"
                  }
                ]}
              />
            )}

            {selectedProject === 'Project Four' && (
              <Features2
                columns={1}
                items={[
                  {
                    title: "Project Four",
                    body:
                      "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
                    image: "https://uploads.divjoy.com/undraw-fish_bowl_uu88.svg"
                  }
                ]}
              />
            )}           
          </div>
        </div>
      </Section>
    );
  }
}

export default FeaturesSection2;
