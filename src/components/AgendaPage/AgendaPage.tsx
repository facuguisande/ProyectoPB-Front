// AgendaPage.tsx
import React, { useState, useEffect } from 'react';
import { Calendar, Tooltip } from 'antd';
import type { Dayjs } from 'dayjs';

interface AgendaPageProps {}

interface Event {
  date: string;
  title: string;
  description: string;
}

const AgendaPage: React.FC<AgendaPageProps> = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Obtener los eventos desde el backend o una fuente de datos
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    // Datos de ejemplo
    const exampleEvents: Event[] = [
      {
        date: '2024-08-08',
        title: 'Fiesta de 15',
        description: 'Discutir el progreso del proyecto',
      },
      {
        date: '2024-08-10',
        title: 'Casamiento de Ramona',
        description: 'Presentar el nuevo producto',
      },
      // Más eventos de ejemplo...
    ];

    setEvents(exampleEvents);
  };

  const getListData = (value: Dayjs) => {
    const date = value.format('YYYY-MM-DD');
    const eventData = events.filter((event) => event.date === date);
    return eventData;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <div>
        {listData.map((item, index) => (
          <Tooltip key={index} title={item.description}>
            <div>{item.title}</div>
          </Tooltip>
        ))}
      </div>
    );
  };

  return (
    <div className="agenda-page">
      <h1>Agenda</h1>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  );
};

export default AgendaPage;
