import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-page">
      {/* Header */}
      <div className="contacto-header" style={{ backgroundImage: "url('https://areagym.ro/wp-content/uploads/2022/06/areagym-07-1024x683.jpeg')" }}>
        <Container>
          <h1>Contacto</h1>
          <p>Estamos aquí para ayudarte</p>
        </Container>
      </div>

      {/* Información de Contacto y Formulario */}
      <Container className="my-5">
        <Row>
          {/* Información de Contacto */}
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Información de Contacto</Card.Title>
                <div className="contacto-info">
                  <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h5>Dirección</h5>
                      <p>Av. Principal 123, Ciudad</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h5>Teléfono</h5>
                      <p>+123 456 7890</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h5>Email</h5>
                      <p>info@gymfit.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-clock"></i>
                    <div>
                      <h5>Horario de Atención</h5>
                      <p>Lunes a Viernes: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>

                <div className="redes-sociales mt-4">
                  <h5>Síguenos</h5>
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-youtube"></i>
                    </a>
                     


                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Formulario de Contacto */}
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>Envíanos un Mensaje</Card.Title>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tu nombre" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="tu@email.com" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="text" placeholder="Asunto del mensaje" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={4} 
                      placeholder="Tu mensaje"
                    />
                  </Form.Group>
                  <Button variant="warning" type="submit">
                    Enviar Mensaje
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Mapa */}
      <div className="mapa-section">
        <Container>
          <Row>
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Card.Title>Ubicación</Card.Title>
                  <div className="mapa-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses!2s!4v1645564750986!5m2!1ses!2s"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contacto; 