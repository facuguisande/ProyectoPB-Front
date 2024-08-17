import React, { useState } from 'react';
import { Row, Col, Input, Card, DatePicker, Empty, Select, Form, InputNumber } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';
import CardEvent, { CardEventProps } from './CardEvent';
import { Modal } from 'antd';
import './EventPage.css' 

interface Event {
  id: string;
  name: string;
  lastName: string;
  ci: string;
  date: Dayjs;
  people: number;
  budget: number;
}

const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDate, setSearchDate] = useState<Dayjs | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CardEventProps | null>(null);
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      name: 'John',
      lastName: 'Smith',
      ci: '12345678',
      date: dayjs('2024-10-15'),
      people: 20,
      budget: 2000,
    },
    {
      id: '2',
      name: 'Jane',
      lastName: 'Doe',
      ci: '87654321',
      date: dayjs('2024-09-01'),
      people: 15,
      budget: 1500,
    },
    {
      id: '3',
      name: 'Michael',
      lastName: 'Johnson',
      ci: '98765432',
      date: dayjs('2024-11-20'),
      people: 18,
      budget: 1800,
    },
    {
      id: '4',
      name: 'Emily',
      lastName: 'Williams',
      ci: '45678901',
      date: dayjs('2024-08-28'),
      people: 12,
      budget: 1200,
    },
    {
      id: '4',
      name: 'Emily',
      lastName: 'Williams',
      ci: '45678901',
      date: dayjs('2024-11-28'),
      people: 69,
      budget: 56000,
    },
    {
      id: '5',
      name: 'David',
      lastName: 'Brown',
      ci: '67890123',
      date: dayjs('2024-09-10'),
      people: 16,
      budget: 1600,
    },
    {
      id: '5',
      name: 'David',
      lastName: 'Brown',
      ci: '67890123',
      date: dayjs('2024-15-10'),
      people: 36,
      budget: 2000,
    },
    {
      id: '5',
      name: 'David',
      lastName: 'Brown',
      ci: '67890123',
      date: dayjs('2024-26-11'),
      people: 100,
      budget: 36000,
    },
    {
      id: '6',
      name: 'Sarah',
      lastName: 'Davis',
      ci: '23456789',
      date: dayjs('2024-10-05'),
      people: 14,
      budget: 1400,
    }
    // Add more sample events here
  ]);

  const {Option} = Select
  
  const [sortOrder, setSortOrder] = useState('asc');

  const showModal = (event:any) => {
    setSelectedEvent(event);
    setIsModalVisible(true);
  };
  
  const handleOk = () => {
    // Aquí puedes actualizar el evento seleccionado
    setIsModalVisible(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
    const sortedEvents = events.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.date.diff(b.date);
      } else {
        return b.date.diff(a.date);
      }
    });
  
  
    const filteredEvents = sortedEvents.filter((event) => {
      const fullName = `${event.name} ${event.lastName}`.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();
      return fullName.includes(searchTermLower);
    });
  
    return (
      <div className="ListEvent-page">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'auto',
          }}
        >
          <div
            style={{
              maxWidth: '80%',
              width: '100%',
              zIndex: 1,
              position: 'relative',
            }}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Input
                  placeholder="Buscar evento"
                  prefix={<SearchOutlined />}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Col>
              <Col span={12}>
                <Select
                  value={sortOrder}
                  onChange={(value) => setSortOrder(value)}
                  style={{ width: '100%' }}
                >
                  <Option value="asc">Fecha ascendente</Option>
                  <Option value="desc">Fecha descendente</Option>
                </Select>
              </Col>
            </Row>
    
            <Row gutter={[16, 16]} style={{ marginTop: '2rem' }}>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <CardEvent
                    id={event.id}
                    ci={event.ci}
                    name={event.name}
                    lastName={event.lastName}
                    date={event.date}
                    people={event.people}
                    budget={event.budget}
                  />
                ))
              ) : (
                <Col span={24}>
                  <Empty description="No events found" />
                </Col>
              )}
            </Row>
          </div>
        </div>
        <div
          className="background-image"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("../../../public/fondo1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
      </div>
    );
  };

export default EventsPage;






// {
//   id: '1',
//   name: 'John',
//   lastName: 'Smith',
//   ci: '12345678',
//   date: dayjs('2024-10-15'),
//   people: 20,
//   budget: 2000,
// },
// {
//   id: '2',
//   name: 'Jane',
//   lastName: 'Doe',
//   ci: '87654321',
//   date: dayjs('2024-09-01'),
//   people: 15,
//   budget: 1500,
// },
// {
//   id: '3',
//   name: 'Michael',
//   lastName: 'Johnson',
//   ci: '98765432',
//   date: dayjs('2024-11-20'),
//   people: 18,
//   budget: 1800,
// },
// {
//   id: '4',
//   name: 'Emily',
//   lastName: 'Williams',
//   ci: '45678901',
//   date: dayjs('2024-08-28'),
//   people: 12,
//   budget: 1200,
// },
// {
//   id: '5',
//   name: 'David',
//   lastName: 'Brown',
//   ci: '67890123',
//   date: dayjs('2024-09-10'),
//   people: 16,
//   budget: 1600,
// },
// {
//   id: '6',
//   name: 'Sarah',
//   lastName: 'Davis',
//   ci: '23456789',
//   date: dayjs('2024-10-05'),
//   people: 14,
//   budget: 1400,
// }