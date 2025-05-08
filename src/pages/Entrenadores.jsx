import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Badge } from 'react-bootstrap';
import './Entrenadores.css';
import ana from '../img/entrenadores/ana.jpg';
import carlos from '../img/entrenadores/CarlosR.jpg';
import miguel from '../img/entrenadores/miguel.jpg';
import laura from '../img/entrenadores/laura.jpg';
const Entrenadores = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const entrenadores = [
    {
      id: 1,
      nombre: "Carlos Rodríguez",
      especialidad: "CrossFit y Entrenamiento Funcional",
      experiencia: "8 años",
      certificaciones: [
        "CrossFit Level 3 Trainer",
        "Certificación en Nutrición Deportiva",
        "Entrenador Personal Certificado ACE"
      ],
      biografia: "Carlos es un apasionado del fitness con más de 8 años de experiencia. Se especializa en entrenamiento funcional y CrossFit, ayudando a sus clientes a alcanzar sus objetivos de manera efectiva y segura.",
      imagen: carlos,
      redes: {
        instagram: "@carlosfit",
        facebook: "Carlos Rodríguez Fitness",
        linkedin: "carlos-rodriguez-fitness"
      },
      horarios: [
        "Lunes a Viernes: 6:00 - 14:00",
        "Sábados: 8:00 - 12:00"
      ],
      clientes: 150,
      logros: [
        "Entrenador del Año 2022",
        "Campeón Regional de CrossFit 2021",
        "Más de 1000 clientes transformados"
      ]
    },
    {
      id: 2,
      nombre: "Ana Martínez",
      especialidad: "Yoga y Pilates",
      experiencia: "10 años",
      certificaciones: [
        "Instructora de Yoga RYT-500",
        "Pilates Mat y Reformer",
        "Meditación y Mindfulness"
      ],
      biografia: "Ana es una instructora certificada en yoga y pilates con una década de experiencia. Su enfoque holístico combina posturas físicas con técnicas de respiración y meditación para un bienestar completo.",
      imagen: ana,
      redes: {
        instagram: "@anayoga",
        facebook: "Ana Martínez Yoga",
        linkedin: "ana-martinez-yoga"
      },
      horarios: [
        "Lunes a Viernes: 7:00 - 15:00",
        "Domingos: 9:00 - 13:00"
      ],
      clientes: 200,
      logros: [
        "Instructora Certificada Internacionalmente",
        "Especialista en Yoga Terapéutico",
        "Más de 5000 clases impartidas"
      ]
    },
    {
      id: 3,
      nombre: "Miguel Sánchez",
      especialidad: "Entrenamiento de Fuerza y Nutrición",
      experiencia: "12 años",
      certificaciones: [
        "Certificación NSCA-CSCS",
        "Nutrición Deportiva Avanzada",
        "Entrenamiento de Fuerza y Acondicionamiento"
      ],
      biografia: "Miguel es un experto en entrenamiento de fuerza y nutrición deportiva. Su enfoque científico y personalizado ha ayudado a numerosos atletas y clientes a alcanzar sus objetivos de rendimiento.",
      imagen: miguel,
      redes: {
        instagram: "@miguelfitness",
        facebook: "Miguel Sánchez Fitness",
        linkedin: "miguel-sanchez-fitness"
      },
      horarios: [
        "Lunes a Viernes: 8:00 - 16:00",
        "Sábados: 9:00 - 13:00"
      ],
      clientes: 180,
      logros: [
        "Entrenador de Atletas Profesionales",
        "Especialista en Nutrición Deportiva",
        "Más de 2000 planes personalizados"
      ]
    },
    {
      id: 4,
      nombre: "Laura Gómez",
      especialidad: "Artes Marciales y Cardio",
      experiencia: "6 años",
      certificaciones: [
        "Cinturón Negro en Kickboxing",
        "Entrenadora de Boxeo",
        "Especialista en Cardio"
      ],
      biografia: "Laura es una experta en artes marciales y entrenamiento cardiovascular. Su energía y dedicación inspiran a sus clientes a superar sus límites y alcanzar nuevos niveles de condición física.",
      imagen: laura,
      redes: {
        instagram: "@laurakickbox",
        facebook: "Laura Gómez Fitness",
        linkedin: "laura-gomez-fitness"
      },
      horarios: [
        "Lunes a Viernes: 16:00 - 22:00",
        "Domingos: 10:00 - 14:00"
      ],
      clientes: 120,
      logros: [
        "Campeona Nacional de Kickboxing",
        "Instructora Certificada de Boxeo",
        "Más de 800 clientes entrenados"
      ]
    }
  ];

  const handleTrainerClick = (trainer) => {
    setSelectedTrainer(trainer);
    setShowModal(true);
  };

  return (
    <div className="entrenadores-page">
      {/* Hero Section */}
      <div className="entrenadores-hero">
        <Container>
          <h1>Nuestros Entrenadores</h1>
          <p>Profesionales certificados listos para guiarte en tu camino al éxito</p>
        </Container>
      </div>

      {/* Lista de Entrenadores */}
      <Container className="my-5">
        <Row>
          {entrenadores.map(entrenador => (
            <Col md={6} lg={3} key={entrenador.id} className="mb-4">
              <Card className="entrenador-card h-100">
                <div className="entrenador-imagen-container">
                  <Card.Img variant="top" src={entrenador.imagen} />
                  <div className="entrenador-experiencia">
                    <span>{entrenador.experiencia}</span>
                    <small>de experiencia</small>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{entrenador.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {entrenador.especialidad}
                  </Card.Subtitle>
                  <div className="entrenador-info">
                    <p><i className="fas fa-users"></i> {entrenador.clientes} clientes</p>
                    <div className="certificaciones-preview">
                      {entrenador.certificaciones.slice(0, 2).map((cert, index) => (
                        <Badge key={index} bg="light" text="dark" className="me-2">
                          {cert}
                        </Badge>
                      ))}
                      {entrenador.certificaciones.length > 2 && (
                        <Badge bg="light" text="dark">
                          +{entrenador.certificaciones.length - 2} más
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Card.Text className="mt-3">
                    {entrenador.biografia.substring(0, 100)}...
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button 
                    variant="warning" 
                    className="w-100"
                    onClick={() => handleTrainerClick(entrenador)}
                  >
                    Ver Perfil Completo
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal de Detalles del Entrenador */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        {selectedTrainer && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedTrainer.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={4}>
                  <img 
                    src={selectedTrainer.imagen} 
                    alt={selectedTrainer.nombre}
                    className="img-fluid rounded mb-3"
                  />
                  <div className="redes-sociales">
                    <h5>Redes Sociales</h5>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fab fa-instagram"></i>
                        <a href={`https://instagram.com/${selectedTrainer.redes.instagram}`} target="_blank" rel="noopener noreferrer">
                          {selectedTrainer.redes.instagram}
                        </a>
                      </li>
                      <li>
                        <i className="fab fa-facebook"></i>
                        <a href={`https://facebook.com/${selectedTrainer.redes.facebook}`} target="_blank" rel="noopener noreferrer">
                          {selectedTrainer.redes.facebook}
                        </a>
                      </li>
                      <li>
                        <i className="fab fa-linkedin"></i>
                        <a href={`https://linkedin.com/in/${selectedTrainer.redes.linkedin}`} target="_blank" rel="noopener noreferrer">
                          {selectedTrainer.redes.linkedin}
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="entrenador-detalles">
                    <h4>Biografía</h4>
                    <p>{selectedTrainer.biografia}</p>

                    <h4>Certificaciones</h4>
                    <ul>
                      {selectedTrainer.certificaciones.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>

                    <h4>Horarios de Atención</h4>
                    <ul>
                      {selectedTrainer.horarios.map((horario, index) => (
                        <li key={index}>{horario}</li>
                      ))}
                    </ul>

                    <h4>Logros Destacados</h4>
                    <ul>
                      {selectedTrainer.logros.map((logro, index) => (
                        <li key={index}>{logro}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cerrar
              </Button>
              <Button variant="warning">
                Contactar Entrenador
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Entrenadores; 