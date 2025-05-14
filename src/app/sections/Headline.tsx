'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import iconLinks from '../data/iconLinks';
import '../styles/headline.scss';

const iconsAnimation = {
  opacity: [0, 1],
  y: [200, -5, 0],
  x: [-200, 5, 0],
  scale: [1, 1, 1.1, 1],
  rotate: [0, 0, -10, 10, 0],
  transition: { ease: 'easeOut', duration: 2, delay: 2 },
};

const Headline: FC = () => {
  return (
    <Container
      as="section"
      id="headline"
      className="bg-dark text-white min-vh-100 d-flex align-items-center px-3 px-md-5"
      fluid
    >
      <Row className="mx-0 g-0 pt-5">
        <Col md={7}>
          <Row className="mx-0 g-0 flex-column flex-md-row">
            <Col className="ps-md-4 ps-lg-5">
              <h1 className="text-primary fs-h2">
                Hey There.
                <br />
                I&apos;m Dico.
              </h1>
              <h5 className="font-roboto fs-h4">I&apos;m a Full-Stack Software Developer</h5>
              <p className="font-poppins">
                I can help you build a product, feature, or website. Please look through some of my
                work and experience. If you like what you see and have a project you need to be
                coded, don&apos;t hesitate to contact me.
              </p>
            </Col>
            <Col
              xs="auto"
              md={{ order: 'first' }}
              className="d-md-flex flex-md-column justify-content-md-center"
            >
              <motion.div animate={iconsAnimation}>
                <Row xs="auto" className="mx-0 g-0 flex-md-column">
                  {iconLinks.map((icon) => {
                    const { id, href, Icon } = icon;

                    return (
                      <a
                        key={id}
                        href={href}
                        className="fs-3 px-2 px-md-0 py-md-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Headline;
