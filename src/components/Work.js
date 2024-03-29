import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Image,
  Card,
  CardDeck,
  Nav,
  Jumbotron,
  ToggleButtonGroup,
  ToggleButton,
  Figure
} from "react-bootstrap";

import sshot3 from "./images/sshot3.jpg";
import sshot4 from "./images/sshot4.jpg";
import sshot from "./images/Sshot.jpg";
import sshot1 from "./images/sshot1.jpg";
import about1 from "./images/About1.png";
import about2 from "./images/About2.png";
import about3 from "./images/About3.png";
import about4 from "./images/About4.png";
import about5 from "./images/About5.png";
import about6 from "./images/About6.png";
import about7 from "./images/About7.png";
import about8 from "./images/About8.png";
import about9 from "./images/About9.png";
import about11 from "./images/About11.png";
import about12 from "./images/About12.png";
import about13 from "./images/About13.png";

import { Map, InfoSquare, KanbanFill } from "react-bootstrap-icons";

function Work() {
  return (
    <div className="width1">
      <h2 className="heading">How can we help?</h2>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Container>
        <Row>
          <Col xs={6}>
            <h2 className="heading2">What kind of work can I get done?</h2>
            <br />
            <p className="paragraph">
              You can find just about any job you can imagine. We have jobs
              ranging from delivery to website development. You can find a
              variety of jobs that suit you on Freelancer.com. Just complete
              your profile and let us know your skill sets so we can match you
              to the right jobs
            </p>
            <br />
            <br />

            <Button variant="primary">Post a project</Button>
          </Col>
          <Col xs={6}>
            <img alt="" width="100%" src={sshot3} />
          </Col>
        </Row>
      </Container>

      <hr></hr>

      <Container>
        <Row>
          <Col>
            <h4 className="heading">
              Our job search can return a full range of results:
            </h4>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <Row>
          <Col className="size2">
            <Map className="size1" />
            <br />
            <p className="paragraph2">
              Small jobs, large jobs, anything in between
            </p>
          </Col>
          <Col className="size2">
            <InfoSquare className="size1" />
            <br />
            <p className="paragraph2">Fixed price or hourly projects</p>
          </Col>
          <Col className="size2">
            <KanbanFill className="size1" />
            <br />
            <p className="paragraph2">International and local jobs.</p>
          </Col>

          <Col className="size2">
            <InfoSquare className="size1" />
            <br />
            <p className="paragraph2">
              Specific skills, price, and schedule requirements
            </p>
          </Col>
        </Row>
      </Container>

      <br />
      <br />

      <br />
      <br />
      <Container fluid className="contcolor1">
        <Row>
          <Col>
            <img alt="" width="80%" src={sshot4} />
          </Col>
          <Col className="coldown">
            <h1 className="heading3">How do I get started?</h1>
            <h4 className="heading3"> Complete your profile</h4> <br />
            <p className="paragraph1">
              {" "}
              Select your skills and expertise Upload a professional profile
              photo Go through the Verification Center checklist
            </p>
            <h4 className="heading3">
              Browse jobs that suit your skills, expertise, price, and schedule
            </h4>{" "}
            <br />
            <p className="paragraph1">
              We have jobs available for all skills. Maximize your job
              opportunities by optimizing your filters. Save your search and get
              alerted when relevant jobs are available.
            </p>
            <h4 className="heading3"> Write your best bid</h4> <br />
            <p className="paragraph1">
              {" "}
              Put your best foot forward and write the best pitch possible. Read
              the project and let the clients know you understand their brief.
              Tell them why you're the best person for this job. Writing a new
              brief for each project is more effective than using the same one!
            </p>
            <h4 className="heading3"> Get awarded and earn</h4> <br />
            <p className="paragraph1">
              {" "}
              Get ready to work once you get hired. Deliver high quality work
              and earn the agreed amount.
            </p>
            <br />
            <br />
            <Button variant="primary">Post a project</Button>
          </Col>
        </Row>
      </Container>

      <Container className="container1">
        <Row>
          <Col sm={6}>
            <h2> Manage Your Career. </h2> <br />
            <p>
              {" "}
              Stay up to date on the Freelancer.com marketplace and keep in
              touch with your clients.
            </p>
            <p>
              {" "}
              Collaborate with your clients on the go and get alerted on the
              latest jobs with our mobile app and desktop platform.{" "}
            </p>
            <p>
              {" "}
              Our job alerts system will keep you updated once new projects that
              fit your skills and expertise become available. Bid away!{" "}
            </p>
          </Col>
          <Col sm={6}>
            <Image src={about1} fluid />
          </Col>
        </Row>
      </Container>

      <Container className="container1">
        <Row>
          <Col sm={6}>
            <Image src={about2} fluid />
          </Col>
          <Col sm={6}>
            <h2> Safe and Secure. </h2> <br />
            <p>
              Freelancer.com is a community that values your trust and safety as
              our number one priority:
            </p>
            <ul>
              <li>
                {" "}
                State-of-the-art security for your funds. All transactions are
                secured with DigiCert 4096-bit SSL encryption.
              </li>
              <li>
                Request for Milestone Payments from your clients to make sure
                that your hard earned money gets to you safely.
              </li>
              <li>
                Our representatives are available 24/7 to assist you with any
                issues.{" "}
              </li>{" "}
            </ul>
          </Col>
        </Row>
      </Container>

      <Jumbotron fluid className="jumbotron big-banner banner2">
        <Container fluid className="trail">
          <Row>
            {" "}
            <Col>
              {" "}
              <h2> So what are you waiting for? </h2>{" "}
            </Col>{" "}
          </Row>
          <br />
          <Row>
            {" "}
            <Col>
              {" "}
              Search for the right job and write your best bid proposal now.{" "}
            </Col>{" "}
          </Row>
          <br />
          <Button variant="outline-light" size="lg">
            {" "}
            Browse Jobs{" "}
          </Button>
        </Container>
      </Jumbotron>
      <section>
        <Container fluid className="ccontainer">
          <Row>
            {" "}
            <Col>
              {" "}
              <h2> Testimonials from other Freelancers </h2>{" "}
            </Col>{" "}
          </Row>
          <br />
          <Row>
            {" "}
            <span>
              {" "}
              Still not convinced? Hear it from these people whose lives have
              changed through working on Freelancer.com. These are some of our{" "}
            </span>{" "}
          </Row>
          <Row>
            {" "}
            <Col>
              {" "}
              proud freelancers who've built themselves up through
              Freelancer.com.{" "}
            </Col>{" "}
          </Row>
        </Container>

        <Container fluid className="hcontainer">
          <Row>
            <Col sm={4}>
              <Figure>
                <Figure.Image rounded width={366} height={261} src={about11} />
                <Figure.Caption>
                  <i>
                    {" "}
                    <span>
                      {" "}
                      "I honestly do not know where I would be if I hadn't
                      discovered Freelancer when I did. It has formed the
                      backbone of support for me over recent years."{" "}
                    </span>{" "}
                  </i>
                  <hr className="hrsmall"></hr>
                  <b> Elizabeth March </b>
                  <p> Copywriter </p>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col sm={4}>
              <Figure>
                <Figure.Image rounded width={366} height={261} src={about12} />
                <Figure.Caption>
                  <i>
                    {" "}
                    <span>
                      {" "}
                      "The best thing Freelancer.com offers is the independence
                      to work. I can work in any place around the world, even on
                      a boat in the middle of the sea."{" "}
                    </span>{" "}
                  </i>
                  <hr className="hrsmall"></hr>
                  <b> Federico Gonzales </b>
                  <p> Industrial Designer </p>
                </Figure.Caption>
              </Figure>
            </Col>
            <Col sm={4}>
              <Figure>
                <Figure.Image rounded width={366} height={261} src={about13} />
                <Figure.Caption>
                  <i>
                    {" "}
                    <span>
                      {" "}
                      "The money on Freelancer is great. I think as Freelancer
                      gets bigger and more people begin to understand the power
                      of crowdsourcing it will only get stronger. I see this as
                      the way of the future for work and I am so excited to be
                      in on it at the ground level -- it will only get better."{" "}
                    </span>{" "}
                  </i>
                  <hr className="hrsmall"></hr>
                  <b> Jessie Weatherley </b>
                  <p> Marketing Expert </p>
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>

        <br />
        <br />

        <hr />
      </section>
      <Container fluid className="bcontainer">
        <Row>
          {" "}
          <Col>
            {" "}
            <h2> Additional Help </h2>{" "}
          </Col>{" "}
        </Row>
        <br />
        <Row>
          {" "}
          <Col> Not sure where to start? Check out the links below: </Col>{" "}
        </Row>
        <br />
        <Row>
          {" "}
          <Col sm={6}>
            {" "}
            <Nav.Link href="#">
              {" "}
              How to Get Started at Freelancer.com{" "}
            </Nav.Link>{" "}
          </Col>{" "}
          <Col sm={6}>
            {" "}
            <Nav.Link href="#">
              {" "}
              Successful freelancing on Freelancer.com{" "}
            </Nav.Link>{" "}
          </Col>{" "}
        </Row>

        <Row>
          {" "}
          <Col sm={6}>
            {" "}
            <Nav.Link href="#"> Tips for new freelancers </Nav.Link>{" "}
          </Col>{" "}
          <Col sm={6}>
            {" "}
            <Nav.Link href="#"> Tips for winning projects </Nav.Link>{" "}
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}

export default Work;
