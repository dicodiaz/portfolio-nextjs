import { motion } from 'framer-motion';
import { FC } from 'react';
import { Badge, Button, Col, Image, Row } from 'react-bootstrap';
import { ProjectType } from '../data/projects';

export type HighlightedProjectProps = {
  data: ProjectType;
  image: string;
  onSeeProjectClick: (project: ProjectType) => void;
};

const HighlightedProject: FC<HighlightedProjectProps> = ({ data, image, onSeeProjectClick }) => {
  const { title, description, languages } = data;

  return (
    <Col className="px-md-2">
      <Row className="mx-0 g-0 mb-4 flex-column flex-md-row">
        <Col
          md={6}
          className="mb-4 mb-md-0 d-flex align-items-md-center justify-content-md-center overflow-hidden h-25rem"
        >
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image src={image} alt={title} fluid />
          </motion.div>
        </Col>
        <Col className="ps-md-4">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="fs-h4">{title}</h4>
            <p>{description}</p>
            <Row xs="auto" className="mx-0 g-0 mb-1">
              {languages.map((language) => (
                <Badge key={language} bg="white">
                  {language}
                </Badge>
              ))}
            </Row>
            <div>
              <Button onClick={() => onSeeProjectClick(data)}>See Project</Button>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Col>
  );
};

export default HighlightedProject;
