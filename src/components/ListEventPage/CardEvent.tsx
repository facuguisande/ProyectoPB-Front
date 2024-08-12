import React from "react"
import { Row, Col, Input, Card, DatePicker, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs';

interface CardEventProps{
    id: string;
    ci: string,
    name: string,
    lastName: string,
    date: Dayjs,
    people: number,
    budget: number,

} 

const CardEvent: React.FC<CardEventProps> = (event) => {

return (
<Col key={event.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  title={`${event.name} ${event.lastName}`}
                  style={{ textAlign: 'center' }}
                >
                  <p>CI: {event.ci}</p>
                  <p>Date: {event.date.format('YYYY-MM-DD')}</p>
                  <p>People: {event.people}</p>
                  <p>Budget: {event.budget}</p>
                </Card>
              </Col>

)

}


export default CardEvent;
