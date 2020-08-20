import React, { useCallback, useMemo, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";

import { PUBLIC_URL } from "../../constants";

type NavLinkProps = {
  title: string;
  path?: string;
};

const NavLink = ({ title, path }: NavLinkProps) => {
  const history = useHistory();

  const url = useMemo(() => (path ? `${PUBLIC_URL}${path}` : "#"), [
    path,
    PUBLIC_URL,
  ]);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      history.push(url);
    },
    [url]
  );

  return (
    <Nav.Link onClick={handleClick} href={url}>
      {title}
    </Nav.Link>
  );
};

export default NavLink;
