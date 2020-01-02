import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function SectionButton(props) {
  const {
    parentColor,
    size,
    state,
    fullWidth,
    // Passed to button element
    ...otherProps
  } = props;

  return (
    <AnchorLink
      className={
        "button" +
        ([
          "primary",
          "info",
          "success",
          "warning",
          "danger",
          "black",
          "dark"
        ].includes(parentColor)
          ? ` is-${parentColor} is-inverted`
          : "") +
        (["white", "light"].includes(parentColor) || !parentColor
          ? " is-primary"
          : "") +
        (size ? ` is-${size}` : "") +
        (state ? ` is-${state}` : "") +
        (fullWidth ? " is-fullwidth" : "")
      }
      {...otherProps}
    >
      {props.children}
    </AnchorLink>
  );
}

export default SectionButton;
