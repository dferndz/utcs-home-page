import React, { useCallback, useMemo, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";

import { PUBLIC_URL } from "../../constants";

type NavLinkProps = {
  title: string;
  path?: string;
  as_a?: boolean;
};

const NavLink = ({ title, path, as_a }: NavLinkProps) => {
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

  if (as_a)
    return (
      <a onClick={handleClick} href={url}>
        {title}
      </a>
    );

  return (
    <Nav.Link onClick={handleClick} href={url}>
      {title}
    </Nav.Link>
  );
};

export default NavLink;
