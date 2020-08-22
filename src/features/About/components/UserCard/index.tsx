import React from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub, SiTwitter, SiLinkedin } from "react-icons/si";
import { VscLocation } from "react-icons/vsc";
import { Profile, Social } from "../../../../types";
import Tag from "../../../Github/components/Tag";

type Props = {
  profile: Profile;
  social?: Social;
};

const UserCard = ({ profile, social }: Props) => {
  return (
    <Card.Body>
      <Row>
        <Col xs={12} className="text-center">
          <Image src={profile.img} fluid roundedCircle />
        </Col>
        <Col className="mt-4">
          <h3>{`${profile.firstName} ${profile.lastName}`}</h3>
          <p style={{ margin: 0 }}>{profile.bio}</p>
          <div className="text-muted mt-2">
            <Tag data={profile.location} Component={VscLocation} />
          </div>
        </Col>
        <Col className="mt-4" xs={12}>
          <h5 style={{ margin: 0 }}>Contact</h5>
          <hr style={{ marginTop: "10px" }} />
          <a href={`mailto:${profile.email}`}>
            <HiOutlineMail className="mr-2" />
            <span>{profile.email}</span>
          </a>
        </Col>
        <Col className="mt-4" xs={12}>
          {social?.github && (
            <>
              <Tag
                as_link
                Component={SiGithub}
                data={social.github}
                text="Github"
              />
            </>
          )}
          {social?.linkedin && (
            <>
              <Tag
                as_link
                Component={SiLinkedin}
                data={social.linkedin}
                text="LinkedIn"
              />
            </>
          )}
          {social?.twitter && (
            <>
              <Tag
                as_link
                Component={SiTwitter}
                data={social.twitter}
                text="Twitter"
              />
            </>
          )}
        </Col>
      </Row>
    </Card.Body>
  );
};

export default UserCard;
