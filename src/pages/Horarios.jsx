import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Badge } from 'react-bootstrap';
import './Horarios.css';

const Horarios = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedDay, setSelectedDay] = useState('lunes');

  const dias = [
    { id: 'lunes', nombre: 'Lunes' },
    { id: 'martes', nombre: 'Martes' },
    { id: 'miercoles', nombre: 'Miércoles' },
    { id: 'jueves', nombre: 'Jueves' },
    { id: 'viernes', nombre: 'Viernes' },
    { id: 'sabado', nombre: 'Sábado' },
    { id: 'domingo', nombre: 'Domingo' }
  ];

  const clases = [
    {
      id: 1,
      nombre: "HIIT Cardio",
      instructor: "Carlos Rodríguez",
      nivel: "Intermedio",
      duracion: "45 min",
      capacidad: 20,
      inscritos: 15,
      dias: {
        lunes: ["9:00", "18:00"],
        martes: [],
        miercoles: ["9:00", "18:00"],
        jueves: [],
        viernes: ["9:00"],
        sabado: ["10:00"],
        domingo: []
      }
    },
    {
      id: 2,
      nombre: "Power Yoga",
      instructor: "Ana Martínez",
      nivel: "Todos los niveles",
      duracion: "60 min",
      capacidad: 25,
      inscritos: 18,
      dias: {
        lunes: [],
        martes: ["8:00", "19:00"],
        miercoles: [],
        jueves: ["8:00", "19:00"],
        viernes: [],
        sabado: ["11:00"],
        domingo: ["9:00"]
      }
    },
    {
      id: 3,
      nombre: "CrossFit",
      instructor: "Miguel Sánchez",
      nivel: "Avanzado",
      duracion: "60 min",
      capacidad: 15,
      inscritos: 12,
      dias: {
        lunes: ["7:00", "17:00"],
        martes: [],
        miercoles: ["7:00", "17:00"],
        jueves: [],
        viernes: ["7:00"],
        sabado: ["9:00"],
        domingo: []
      }
    },
    {
      id: 4,
      nombre: "Kickboxing",
      instructor: "Laura Gómez",
      nivel: "Intermedio",
      duracion: "50 min",
      capacidad: 20,
      inscritos: 16,
      dias: {
        lunes: [],
        martes: ["18:00", "20:00"],
        miercoles: [],
        jueves: ["18:00", "20:00"],
        viernes: [],
        sabado: ["10:00"],
        domingo: []
      }
    }
  ];

  const handleClassClick = (clase, horario) => {
    setSelectedClass({ ...clase, horarioSeleccionado: horario });
    setShowModal(true);
  };

  return (
    <div className="horarios-page">
      {/* Hero Section */}
      <div className="horarios-hero" style={{ backgroundImage: `url('https://www.ciudaris.com/blog/wp-content/uploads/como-aprovechar-maximo-gimnasio-departamento.jpg')` }}>
        <Container>
          <h1>Horarios de Clases</h1>
          <p>Planifica tu entrenamiento con nuestro horario semanal</p>
        </Container>
      </div>

      {/* Selector de Día */}
      <div className="dias-selector py-4">
        <Container>
          <div className="dias-buttons">
            {dias.map(dia => (
              <Button
                key={dia.id}
                variant={selectedDay === dia.id ? "warning" : "outline-warning"}
                className="mx-2 mb-2"
                onClick={() => setSelectedDay(dia.id)}
              >
                {dia.nombre}
              </Button>
            ))}
          </div>
        </Container>
      </div>

      {/* Horario del Día Seleccionado */}
      <Container className="my-5">
        <Row>
          {clases.map(clase => (
            clase.dias[selectedDay].length > 0 && (
              <Col md={6} lg={4} key={clase.id} className="mb-4">
                <Card className="horario-card h-100">
                  <Card.Body>
                    <Card.Title>{clase.nombre}</Card.Title>
                    <div className="clase-info">
                      <p><i className="fas fa-user"></i> {clase.instructor}</p>
                      <p><i className="fas fa-clock"></i> {clase.duracion}</p>
                      <p><i className="fas fa-users"></i> {clase.inscritos}/{clase.capacidad}</p>
                    </div>
                    <div className="horarios-disponibles">
                      {clase.dias[selectedDay].map((horario, index) => (
                        <Button
                          key={index}
                          variant="outline-warning"
                          className="me-2 mb-2"
                          onClick={() => handleClassClick(clase, horario)}
                        >
                          {horario}
                        </Button>
                      ))}
                    </div>
                    <Badge bg="light" text="dark" className="nivel-badge">
                      {clase.nivel}
                    </Badge>
                  </Card.Body>
                </Card>
              </Col>
            )
          ))}
        </Row>
      </Container>

      {/* Modal de Reserva */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        {selectedClass && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Reservar Clase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="clase-detalles">
                <h4>{selectedClass.nombre}</h4>
                <p className="horario-seleccionado">
                  <i className="fas fa-clock"></i> {selectedClass.horarioSeleccionado}
                </p>
                <div className="info-detallada">
                  <p><strong>Instructor:</strong> {selectedClass.instructor}</p>
                  <p><strong>Duración:</strong> {selectedClass.duracion}</p>
                  <p><strong>Nivel:</strong> {selectedClass.nivel}</p>
                  <p><strong>Plazas disponibles:</strong> {selectedClass.capacidad - selectedClass.inscritos}</p>
                </div>
                <Form className="mt-4">
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
                  <Form.Group className="mb-3">
                    <Form.Check 
                      type="checkbox" 
                      label="Acepto recibir confirmación por email" 
                    />
                  </Form.Group>
                </Form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancelar
              </Button>
              <Button variant="warning">
                Confirmar Reserva
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Horarios; 