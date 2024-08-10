import React, { useState, useEffect } from "react";
import { Calendar, Modal, Tooltip } from "antd";
import { Dayjs } from "dayjs";

interface Event {
  date: string;
  title: string;
  description: string;
}
interface AgendaPageProps {}

const AgendaPage: React.FC<AgendaPageProps> = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Obtener los eventos desde el backend o una fuente de datos
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    // Datos de ejemplo
    const exampleEvents: Event[] = [
      {
        date: "2024-08-08",
        title: "Fiesta de 15",
        description: "Discutir el progreso del proyecto",
      },
      {
        date: "2024-08-10",
        title: "Casamiento de Ramona",
        description: "Presentar el nuevo producto",
      },
      // Más eventos de ejemplo...
    ];

    setEvents(exampleEvents);
  };

  const getListData = (value: Dayjs) => {
    const date = value.format("YYYY-MM-DD");
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

  const onSelect = (value: Dayjs) => {
    setSelectedDate(value);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getEventsBySelectedDate = () => {
    if (!selectedDate) return [];
    return getListData(selectedDate);
  };

  return (
    <div className="agenda-page">
      <h1>Agenda</h1>
      <Calendar dateCellRender={dateCellRender} onSelect={onSelect} />
      <Modal
        title={selectedDate?.format("YYYY-MM-DD")}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {getEventsBySelectedDate().map((event, index) => (
          <div key={index}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default AgendaPage;
