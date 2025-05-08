import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Modal, Form } from 'react-bootstrap';
import './Inicio.css';
import cardio from '../img/salas/cardio.jpg';
import yoga from '../img/salas/yoga.jpg';
import pesas from '../img/salas/pesas.jpg';


//imagenes de los testimonios
import ana from '../img/testimonios/ana.jpg';
import juan from '../img/testimonios/juan.jpg';
import maria from '../img/testimonios/maria.jpg';
const Inicio = () => {
  const [showModal, setShowModal] = useState(false);

  const testimonios = [
    {
      nombre: "María García",
      texto: "¡El mejor gimnasio que he conocido! Los entrenadores son excelentes.",
      imagen: maria,
      resultado: "Perdió 15kg en 6 meses"
    },
    {
      nombre: "Juan Pérez",
      texto: "He logrado resultados increíbles gracias a GymFit.",
      imagen: juan,
      resultado: "Ganó 8kg de masa muscular"
    },
    {
      nombre: "Ana López",
      texto: "El ambiente es increíble y las clases son muy motivadoras.",
      imagen: ana,
      resultado: "Mejoró su resistencia un 40%"
    }
  ];

  const instalaciones = [
    {
      titulo: "Área de Pesas",
      descripcion: "Equipamiento de última generación",
      imagen: pesas
    },
    {
      titulo: "Sala de Cardio",
      descripcion: "Máquinas modernas para tu entrenamiento",
      imagen: cardio
    },
    {
      titulo: "Estudio de Yoga",
      descripcion: "Espacio tranquilo para tu práctica",
      imagen: yoga
    }
  ];

  return (
    <div className="inicio-page">
      
      {/* Banner Principal con Carousel */}
      <Carousel className="hero-carousel">
        <Carousel.Item>
          <div className="hero-banner" style={{backgroundImage: "url('https://img.freepik.com/fotos-premium/filas-pesas-mancuernas-gimnasio_38535-556.jpg')"}}>
            <Container>
              <h1>¡Transforma tu vida con GymFit!</h1>
              <p>Tu camino hacia una vida más saludable comienza aquí</p>
              <Button variant="warning" size="lg" onClick={() => setShowModal(true)}>
                ¡Únete ahora!
              </Button>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hero-banner" style={{backgroundImage: "url('https://www.lavozdegalicia.es/default/2023/10/10/00121696953721821352478/Foto/SO11C2F3_18015.jpg')"}}>
            <Container>
              <h1>Clases Personalizadas</h1>
              <p>Entrenadores expertos para guiarte en tu camino</p>
              <Button variant="warning" size="lg">Ver Clases</Button>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Contador de Estadísticas */}
      <div className="stats-section py-5">
        <Container>
          <Row className="text-center">
            <Col md={3}>
              <div className="stat-item">
                <h2>1000+</h2>
                <p>Miembros Activos</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <h2>20+</h2>
                <p>Clases Diarias</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <h2>4+</h2>
                <p>Entrenadores Expertos</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <h2>24/7</h2>
                <p>Soporte al Cliente</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Presentación */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Bienvenido a GymFit</h2>
            <p className="lead">
              En GymFit nos dedicamos a transformar vidas a través del fitness y el bienestar.
              Nuestro compromiso es brindarte las mejores instalaciones y el mejor equipo de
              entrenadores para que alcances tus objetivos.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Instalaciones de primer nivel</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Entrenadores certificados</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Programas personalizados</span>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="video-container">
            <iframe width="560" 
            height="315" 
            src="https://www.youtube-nocookie.com/embed/tUykoP30Gb0?si=SVlKaynmOMCcp-Vx" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

            </iframe>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Instalaciones */}
      <div className="instalaciones-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Nuestras Instalaciones</h2>
          <Row>
            {instalaciones.map((instalacion, index) => (
              <Col md={4} key={index}>
                <Card className="instalacion-card">
                  <Card.Img variant="top" src={instalacion.imagen} />
                  <Card.Body>
                    <Card.Title>{instalacion.titulo}</Card.Title>
                    <Card.Text>{instalacion.descripcion}</Card.Text>
                    <Button variant="outline-warning">Ver más</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Beneficios */}
      <div className="benefits-section py-5">
        <Container>
          <h2 className="text-center mb-4">¿Por qué elegir GymFit?</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4 benefit-card">
                <Card.Body>
                  <i className="fas fa-dumbbell benefit-icon"></i>
                  <Card.Title>Equipamiento Moderno</Card.Title>
                  <Card.Text>
                    Contamos con la última tecnología en equipos de fitness.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 benefit-card">
                <Card.Body>
                  <i className="fas fa-user-friends benefit-icon"></i>
                  <Card.Title>Entrenadores Certificados</Card.Title>
                  <Card.Text>
                    Profesionales altamente capacitados para guiarte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 benefit-card">
                <Card.Body>
                  <i className="fas fa-clock benefit-icon"></i>
                  <Card.Title>Horarios Flexibles</Card.Title>
                  <Card.Text>
                    Abrimos temprano y cerramos tarde para tu comodidad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonios con Carrusel */}
      <div className="testimonios-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Lo que dicen nuestros miembros</h2>
          <Carousel>
            {testimonios.map((testimonio, index) => (
              <Carousel.Item key={index}>
                <div className="testimonio-slide">
                  <img 
                    src={testimonio.imagen} 
                    alt={testimonio.nombre}
                    className="rounded-circle mb-3"
                  />
                  <h4>{testimonio.nombre}</h4>
                  <p className="testimonio-texto">{testimonio.texto}</p>
                  <p className="testimonio-resultado">{testimonio.resultado}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>

      {/* Promociones */}
      <div className="promotions-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h2>¡Oferta Especial!</h2>
              <p className="lead">Únete ahora y obtén 2 meses gratis en tu membresía anual.</p>
              <ul className="promo-features">
                <li><i className="fas fa-check"></i> Acceso a todas las clases</li>
                <li><i className="fas fa-check"></i> Entrenador personal gratis</li>
                <li><i className="fas fa-check"></i> Evaluación física completa</li>
              </ul>
            </Col>
            <Col md={4} className="text-center">
              <Button variant="warning" size="lg" onClick={() => setShowModal(true)}>
                ¡Aprovecha ahora!
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal de Registro */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>¡Únete a GymFit!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <h4>Beneficios de tu membresía</h4>
              <ul className="membership-benefits">
                <li>Acceso ilimitado a todas las instalaciones</li>
                <li>Clases grupales incluidas</li>
                <li>Entrenador personal (1 sesión/mes)</li>
                <li>Acceso a la app exclusiva</li>
                <li>Descuentos en suplementos</li>
              </ul>
            </Col>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control type="text" placeholder="Tu nombre" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="tu@email.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control type="tel" placeholder="Tu teléfono" />
                </Form.Group>
                <Button variant="warning" className="w-100">
                  Solicitar Información
                </Button>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Inicio; 