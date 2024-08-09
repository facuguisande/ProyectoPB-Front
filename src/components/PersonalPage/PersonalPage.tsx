
// PersonnelPage.tsx
import React, { useState, useEffect } from 'react';
import { Card } from 'antd';

interface Employee {
  _id: string; 
  name: string;
  lastName: string;
  photo: string;
  joinDate: string;
  position: string;
}

interface PersonalPageProps {}

const { Meta } = Card;

const PersonalPage: React.FC<PersonalPageProps> = () => {
  const [personnel, setPersonnel] = useState<Employee[]>([]);

  useEffect(() => {
    // Obtener datos del personal desde el backend
    fetchPersonnel();
  }, []);

  const fetchPersonnel = () => {
    // Datos de ejemplo
    const examplePersonnel: Employee[] = [
		      {
		        _id: '1',
		        name: 'Andres',
		        lastName: 'Guisande',
		        photo: '../../../public/foto_curriculum_andy.jpg',
		        joinDate: '2021-04-15',
		        position: 'Encargado de Parrilla',
		      },
		      {
		        _id: '2',
		        name: 'Son',
		        lastName: 'Goku',
		        photo: '../../../public/goku-super-saiyajin-3-dragon-ball-super_5760x3240_xtrafondos.com.jpg',
		        joinDate: '2019-09-01',
		        position: 'Project Manager',
		      },
		      {
		        _id: '3',
		        name: 'Facundo',
		        lastName: 'Guisande',
		        photo: '../../../public/438696290_971457918162589_7994755504306969281_n.jpg',
		        joinDate: '2023-01-01',
		        position: 'Goleador',
		      },
		      {
		        _id: '4',
		        name: 'Emily',
		        lastName: 'Davis',
		        photo: 'https://example.com/emily-davis.jpg',
		        joinDate: '2022-06-30',
		        position: 'UX Designer',
		},
		];

    setPersonnel(examplePersonnel);
  };


  return (
    <div
      className="personnel-page"
      style={{
        position: 'relative',
        backgroundImage: `url('https://img.freepik.com/fotos-premium/banner-madera-blanca-fondo-comida-cocina-vista-superior-espacio-libre-su-texto_187166-51236.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '98vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0.3,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // backgroundColor: 'rgba(0, 0, 0, 0.7)', // Ajusta la transparencia según tus necesidades
          backdropFilter: 'blur(2px)', // Ajusta el valor de difuminado aquí
          zIndex: -1,
        }}
      />
      <div
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '16px',
        }}
      >
        <h1>Personal</h1>
      </div>
      <div
        className="personnel-list"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          zIndex: 2,
        }}
      >
        {personnel.map((employee) => (
          <div key={employee._id} style={{ margin: '16px' }}>
          <Card
            hoverable
            style={{ width: 240, height: 340 }} // Establecer el alto de la tarjeta
            cover={
              <div
                style={{
                  height: 200, // Establecer la altura del contenedor de la imagen
                  overflow: 'hidden',
                }}
              >
                <img
                  alt={employee.name}
                  src={employee.photo}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Ajustar la imagen dentro del contenedor
                    objectPosition: 'center', // Centrar la imagen
                  }}
                />
              </div>
            }
          >
            <Meta
              title={`${employee.name} ${employee.lastName}`}
              description={`Puesto: ${employee.position}`}
            />
            <p>Fecha de ingreso: {employee.joinDate}</p>
          </Card>
        </div>
        ))}
      </div>
    </div>
  );
};


export default PersonalPage;