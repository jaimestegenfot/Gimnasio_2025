import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Badge } from 'react-bootstrap';
import './Clases.css';
import cardio from '../img/salas/cardio.jpg';
import yoga from '../img/salas/yoga.jpg';
import crossfit from '../img/salas/CrossFit.jpg';
import kickboxing from '../img/salas/box.jpg';
const Clases = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const categorias = [
    { id: 'todos', nombre: 'Todas las Clases' },
    { id: 'cardio', nombre: 'Cardio' },
    { id: 'fuerza', nombre: 'Fuerza' },
    { id: 'yoga', nombre: 'Yoga & Pilates' },
    { id: 'combate', nombre: 'Artes Marciales' }
  ];

  const clases = [
    {
      id: 1,
      nombre: "HIIT Cardio",
      categoria: "cardio",
      instructor: "Carlos Rodríguez",
      nivel: "Intermedio",
      duracion: "45 min",
      descripcion: "Entrenamiento de alta intensidad que combina ejercicios cardiovasculares y de fuerza.",
      horarios: ["Lunes 9:00", "Miércoles 18:00", "Viernes 10:00"],
      imagen: cardio,
      capacidad: 20,
      inscritos: 15,
      requisitos: ["Ropa deportiva", "Toalla", "Agua"],
      beneficios: ["Quema de calorías", "Mejora cardiovascular", "Tonificación muscular"]
    },
    {
      id: 2,
      nombre: "Power Yoga",
      categoria: "yoga",
      instructor: "Ana Martínez",
      nivel: "Todos los niveles",
      duracion: "60 min",
      descripcion: "Clase dinámica que combina posturas tradicionales con ejercicios de fuerza.",
      horarios: ["Martes 8:00", "Jueves 19:00", "Sábado 11:00"],
      imagen: yoga,
      capacidad: 25,
      inscritos: 18,
      requisitos: ["Mat de yoga", "Ropa cómoda", "Agua"],
      beneficios: ["Flexibilidad", "Fuerza", "Reducción de estrés"]
    },
    {
      id: 3,
      nombre: "CrossFit",
      categoria: "fuerza",
      instructor: "Miguel Sánchez",
      nivel: "Avanzado",
      duracion: "60 min",
      descripcion: "Entrenamiento funcional de alta intensidad que mejora la fuerza y resistencia.",
      horarios: ["Lunes 7:00", "Miércoles 17:00", "Viernes 8:00"],
      imagen: crossfit,
      capacidad: 15,
      inscritos: 12,
      requisitos: ["Ropa deportiva", "Zapatillas de crossfit", "Agua"],
      beneficios: ["Fuerza total", "Resistencia", "Condición física general"]
    },
    {
      id: 4,
      nombre: "Kickboxing",
      categoria: "combate",
      instructor: "Laura Gómez",
      nivel: "Intermedio",
      duracion: "50 min",
      descripcion: "Clase de artes marciales que combina técnicas de boxeo y patadas.",
      horarios: ["Martes 18:00", "Jueves 20:00", "Sábado 10:00"],
      imagen: kickboxing,
      capacidad: 20,
      inscritos: 16,
      requisitos: ["Guantes de boxeo", "Vendas", "Ropa deportiva"],
      beneficios: ["Coordinación", "Autodefensa", "Cardio intenso"]
    }
  ];

  const handleClassClick = (clase) => {
    setSelectedClass(clase);
    setShowModal(true);
  };

  return (
    <div className="clases-page">
      {/* Hero Section */}
      <div className="clases-hero" style={{backgroundImage: "url('https://img.freepik.com/fotos-premium/filas-pesas-mancuernas-gimnasio_38535-556.jpg')"}}>
        <Container>
          <h1>Nuestras Clases</h1>
          <p>Descubre una variedad de clases diseñadas para todos los niveles</p>
        </Container>
      </div>

      {/* Filtros de Categorías */}
      <div className="categorias-section py-4">
        <Container>
          <div className="categorias-filtro">
            {categorias.map(categoria => (
              <Button
                key={categoria.id}
                variant="outline-warning"
                className="mx-2 mb-2"
              >
                {categoria.nombre}
              </Button>
            ))}
          </div>
        </Container>
      </div>

      {/* Lista de Clases */}
      <Container className="my-5">
        <Row>
          {clases.map(clase => (
            <Col md={6} lg={4} key={clase.id} className="mb-4">
              <Card className="clase-card h-100">
                <div className="clase-imagen-container">
                  <Card.Img variant="top" src={clase.imagen} />
                  <Badge bg="warning" className="nivel-badge">
                    {clase.nivel}
                  </Badge>
                </div>
                <Card.Body>
                  <Card.Title>{clase.nombre}</Card.Title>
                  <div className="clase-info">
                    <p><i className="fas fa-user"></i> {clase.instructor}</p>
                    <p><i className="fas fa-clock"></i> {clase.duracion}</p>
                    <p><i className="fas fa-users"></i> {clase.inscritos}/{clase.capacidad}</p>
                  </div>
                  <Card.Text>{clase.descripcion}</Card.Text>
                  <div className="horarios-preview">
                    {clase.horarios.slice(0, 2).map((horario, index) => (
                      <Badge key={index} bg="light" text="dark" className="me-2">
                        {horario}
                      </Badge>
                    ))}
                    {clase.horarios.length > 2 && (
                      <Badge bg="light" text="dark">
                        +{clase.horarios.length - 2} más
                      </Badge>
                    )}
                  </div>
                </Card.Body>
                <Card.Footer>
                  <Button 
                    variant="warning" 
                    className="w-100"
                    onClick={() => handleClassClick(clase)}
                  >
                    Ver Detalles
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal de Detalles de Clase */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        {selectedClass && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedClass.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <img 
                    src={selectedClass.imagen} 
                    alt={selectedClass.nombre}
                    className="img-fluid rounded mb-3"
                  />
                  <div className="clase-detalles">
                    <h5>Información General</h5>
                    <ul className="list-unstyled">
                      <li><strong>Instructor:</strong> {selectedClass.instructor}</li>
                      <li><strong>Nivel:</strong> {selectedClass.nivel}</li>
                      <li><strong>Duración:</strong> {selectedClass.duracion}</li>
                      <li><strong>Capacidad:</strong> {selectedClass.inscritos}/{selectedClass.capacidad}</li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="horarios-completos">
                    <h5>Horarios Disponibles</h5>
                    <ul className="list-unstyled">
                      {selectedClass.horarios.map((horario, index) => (
                        <li key={index} className="mb-2">
                          <i className="fas fa-clock me-2"></i>
                          {horario}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="requisitos mt-4">
                    <h5>Requisitos</h5>
                    <ul>
                      {selectedClass.requisitos.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="beneficios mt-4">
                    <h5>Beneficios</h5>
                    <ul>
                      {selectedClass.beneficios.map((ben, index) => (
                        <li key={index}>{ben}</li>
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
                Inscribirse
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Clases; 