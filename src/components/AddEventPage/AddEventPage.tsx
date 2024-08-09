import React, { useState } from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import styled from 'styled-components';
import { Select } from 'antd';

const { Option } = Select;



const AddEventPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
  background-image: url('https://arteflame.com/cdn/shop/articles/The_10_Best_Pizza_Toppings_and_Why_They_Reign_Supreme.webp?v=1717620006&width=1600');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
`;

const AddEventContainer = styled.div` 
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 480px;
`;

const AddEventPage: React.FC = () => {
  const [form] = Form.useForm();
  const [clientName, setClientName] = useState('');
  const [clientLastName, setClientLastName] = useState('');
  const [clientId, setClientId] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [numPeople, setNumPeople] = useState(0);
  const [eventDate, setEventDate] = useState<Date | null>(null);
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleSubmit = () => {
    // Aquí puedes implementar la lógica de envío del formulario
    console.log({
      clientName,
      clientLastName,
      clientId,
      serviceType,
      numPeople,
      eventDate,
      eventTime,
      eventLocation,
    });
  };



  
    const handleServiceTypeChange = (value: any) => {
      setServiceType(value);
    };


 

  return (
    <AddEventPageWrapper>
    <AddEventContainer>
      <h1>Agregar Evento</h1>
      <Form form={form} layout="vertical" onFinish={handleSubmit} style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Form.Item
            label="Nombre del Cliente"
            name="clientName"
            rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            style={{ width: '48%' }}
          >
            <Input
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Apellido del Cliente"
            name="clientLastName"
            rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            style={{ width: '48%' }}
          >
            <Input
              value={clientLastName}
              onChange={(e) => setClientLastName(e.target.value)}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Form.Item
            label="ID del Cliente"
            name="clientId"
            rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            style={{ width: '48%' }}
          >
            <Input
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Tipo de Servicio"
            name="serviceType"
            rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            style={{ width: '48%' }}
          >
            <Select
              value={serviceType}
              onChange={handleServiceTypeChange}
              style={{ width: '100%' }}
            >
            <Option value="option1">Opción 1</Option>
            <Option value="option2">Opción 2</Option>
            <Option value="option3">Opción 3</Option>
            <Option value="option4">Opción 4</Option>
          </Select>
          </Form.Item>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Form.Item
            label="Número de Personas"
            name="numPeople"
            rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            style={{ width: '48%' }}
          >
            <Input
              type="number"
              value={numPeople.toString()}
              onChange={(e) => setNumPeople(parseInt(e.target.value))}
            />
          </Form.Item>
          <Form.Item
            label="Fecha del Evento"
            name="eventDate"
            rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            style={{ width: '48%' }}
          >
            <DatePicker
              value={eventDate}
              onChange={(date) => setEventDate(date)}
              style={{ width: '100%' }}
            />
          </Form.Item>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Form.Item
            label="Hora del Evento"
            name="eventTime"
            // rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            style={{ width: '48%' }}
          >
            <Input
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Ubicación del Evento"
            name="eventLocation"
            rules={[{ required: true, message: 'Este campo es obligatorio' }]}
            style={{ width: '48%' }}
          >
            <Input
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Agregar Evento
          </Button>
        </Form.Item>
      </Form>
    </AddEventContainer>
  </AddEventPageWrapper>
  );
};

export default AddEventPage;