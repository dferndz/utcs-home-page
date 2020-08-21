import React, { useCallback, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "./Link";
import { PUBLIC_URL } from "../../constants";

import { Page } from "../../pages";

type Props = {
  pages: Page[];
  title?: string;
};

const NavigationBar = ({ pages, title }: Props) => {
  const history = useHistory();
  const handleNavBrandClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      history.push(PUBLIC_URL);
    },
    [history]
  );
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href={PUBLIC_URL} onClick={handleNavBrandClick}>
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {pages &&
              pages.map((page: Page, key: number) => (
                <Link title={page.title} path={page.path} key={key} />
              ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
