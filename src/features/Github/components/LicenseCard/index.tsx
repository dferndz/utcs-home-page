import React, { useState, useCallback } from "react";
import { Card, Modal, Button } from "react-bootstrap";

import BadgeGroup from "../BadgeGroup";
import ViewOnGithub from "../ViewOnGithub";
import Link from "../../../../components/Navbar/Link";

import useLicense from "../../hooks/useLicense";
import useLicenseRaw from "../../hooks/useLicenseRaw";
import { HiOutlineExternalLink } from "react-icons/hi";

type Props = {
  license: string;
  className: string;
  username: string;
  repo: string;
  branch: string;
};

const LicenseCard = ({ license, className, username, repo, branch }: Props) => {
  const { data, isLoading, errors } = useLicense(license);
  const [isOpen, setIsOpen] = useState(false);
  const rawLicense = useLicenseRaw(username, repo, branch);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  if (isLoading) return null;

  if (data && !errors)
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
          {rawLicense.data && !rawLicense.errors && (
            <Button variant="secondary" block onClick={handleOpen}>
              View license
            </Button>
          )}
        </Card.Body>
        <Modal onHide={handleClose} show={isOpen}>
          <Modal.Header closeButton>License</Modal.Header>
          <Modal.Body>{rawLicense.data}</Modal.Body>
        </Modal>
      </Card>
    );

  if (rawLicense.data && !rawLicense.errors) {
    return (
      <Card className={className}>
        <Card.Body>
          <h5 className="text-primary">
            <Link as_a title="License" />
          </h5>
          {rawLicense.data}
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <Card.Body>License not found</Card.Body>
    </Card>
  );
};

export default LicenseCard;
