'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'usehooks-ts';
import skills from '../data/skills';
import '../styles/skills.scss';

const Skills: FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Container
      id="skills"
      className="bg-dark text-white text-center text-md-start py-6 px-3 px-md-5"
      fluid
    >
      <Row xs={1} md={3} className="mx-0 g-0">
        {skills.map((skill, index) => {
          const { id, title, Bullet, names } = skill;
          return (
            <Col key={id} className="skill">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: isDesktop ? 0.5 * index : 0 }}
                viewport={{ once: true }}
              >
                <h4 className="d-flex align-items-center justify-content-center justify-content-md-start mb-4">
                  <Bullet className="text-primary fs-6 me-2" />
                  <span className="font-roboto fs-h4">{title}</span>
                </h4>
                <Row xs={1} className="mx-0 g-0">
                  {names.map((name) => (
                    <Col key={name} className="fs-h6">
                      {name}
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Skills;
