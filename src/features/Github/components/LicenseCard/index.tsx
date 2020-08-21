import React from "react";
import { Card } from "react-bootstrap";

import BadgeGroup from "../BadgeGroup";
import ViewOnGithub from "../ViewOnGithub";
import Link from "../../../../components/Navbar/Link";

import useLicense from "../../hooks/useLicense";
import { HiOutlineExternalLink } from "react-icons/hi";

type Props = {
  license: string;
  className: string;
};

const LicenseCard = ({ license, className }: Props) => {
  const { data, isLoading, errors } = useLicense(license);

  if (isLoading) return null;

  if (data)
    return (
      <Card className={className}>
        <Card.Body>
          <h5 className="text-primary">
            <Link as_a title={data.name} />
          </h5>
          <span>{data.description}</span>

          <BadgeGroup
            title="Permissions"
            variant="success"
            data={data.permissions}
          />
          <BadgeGroup
            title="Conditions"
            variant="warning"
            data={data.conditions}
          />
          <BadgeGroup
            title="Limitations"
            variant="danger"
            data={data.limitations}
          />
          <ViewOnGithub
            Icon={HiOutlineExternalLink}
            text="See more"
            path={data.html_url}
            variant="outline-secondary"
          />
        </Card.Body>
      </Card>
    );

  return (
    <Card className={className}>
      <Card.Body>License not found</Card.Body>
    </Card>
  );
};

export default LicenseCard;
