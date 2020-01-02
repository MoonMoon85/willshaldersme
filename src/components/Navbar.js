import React, { useState } from "react";
import NavbarContainer from "./NavbarContainer";
import { Link, useRouter } from "./../util/router.js";
import SectionButton from "./SectionButton";
import { useAuth } from "./../util/auth.js";

function Navbar(props) {
  const auth = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <h1 className="title has-text-weight-bold is-spaced is-3">{props.logo}</h1>
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <div className="navbar-item">
              <SectionButton
                parentColor={props.color}
                size="normal"
                href={props.buttonLink}
              >
                Contact
              </SectionButton>
            </div> 
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
