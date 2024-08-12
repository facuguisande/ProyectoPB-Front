import React, { useState } from 'react';
import { Row, Col, Input, Card, DatePicker, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';
import CardEvent from './CardEvent';

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
      id: '5',
      name: 'David',
      lastName: 'Brown',
      ci: '67890123',
      date: dayjs('2024-09-10'),
      people: 16,
      budget: 1600,
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

  const filteredEvents = events.filter((event) => {
    const fullName = `${event.name} ${event.lastName}`.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();
    const nameMatch = fullName.includes(searchTermLower);
    const ciMatch = event.ci.includes(searchTerm);
    const dateMatch = searchDate ? event.date.isSame(searchDate, 'day') : true;
    return nameMatch || ciMatch || dateMatch;
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: '80%', width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input
              placeholder="Search by name or CI"
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col span={12}>
            <DatePicker
              placeholder="Filter by date"
              style={{ width: '100%' }}
              value={searchDate}
              onChange={(date) => setSearchDate(date)}
            />
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '2rem' }}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <CardEvent
                id= {event.id}
                ci= {event.ci}
                name= {event.name}
                lastName= {event.lastName}
                date= {event.date}
                people= {event.people}
                budget= {event.budget}
                />
              // <Col key={event.id} xs={24} sm={12} md={8} lg={6}>
              //   <Card
              //     title={`${event.name} ${event.lastName}`}
              //     style={{ textAlign: 'center' }}
              //   >
              //     <p>CI: {event.ci}</p>
              //     <p>Date: {event.date.format('YYYY-MM-DD')}</p>
              //     <p>People: {event.people}</p>
              //     <p>Budget: {event.budget}</p>
              //   </Card>
              // </Col>
            
            ))) : (
            <Col span={24}>
              <Empty description="No events found" />
            </Col>
          )}
        </Row>
      </div>
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