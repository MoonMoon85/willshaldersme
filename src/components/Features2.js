import React from "react";
import "./Features2.scss";

function Features2(props) {
  return (
    <div className="Features2 columns is-multiline is-centered is-gapless">
      {props.items.map((item, index) => (
        <div
          className={
            "Features2__column column" +
            (props.columns === 1 ? " is-full" : "") +
            (props.columns === 2 ? " is-half" : "") +
            (props.columns === 3 ? " is-one-third" : "") +
            (props.columns === 4 ? " is-one-quarter" : "")
          }
          key={index}
        >
          <div className="Features2__item has-text-centered">
            <h1 className="title is-4 is-spaced has-text-dark">{item.title}</h1>
            <figure className="Features2__image image">
              <img src={item.image} alt={item.title} />
            </figure>
            <h2 className="subtitle is-6 has-text-dark">{item.body}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features2;
