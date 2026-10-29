'use client';

import styles from './ServicesSection.module.css';

const rooms = [
  {
    id: 1,
    icon: '🛋️',
    title: 'Living Room',
    description: 'Curated sofas, chairs, and coffee tables for your perfect gathering space',
  },
  {
    id: 2,
    icon: '🛏️',
    title: 'Bedroom',
    description: 'Premium beds and bedroom essentials for restful, stylish sanctuaries',
  },
  {
    id: 3,
    icon: '🍽️',
    title: 'Dining Room',
    description: 'Elegant dining tables and chairs for memorable gatherings',
  },
  {
    id: 4,
    icon: '📚',
    title: 'Study & Storage',
    description: 'Functional desks, bookshelves, and smart storage solutions',
  },
];

export default function AtmosRoomsSection() {
  return (
    <section className={styles.servicesContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Atmos Collection Rooms</h2>
        <p className={styles.subtitle}>Premium furniture for every room in your home</p>
      </div>

      <div className={styles.servicesGrid}>
        {rooms.map((room) => (
          <div key={room.id} className={styles.serviceCard}>
            <div className={styles.iconWrapper}>{room.icon}</div>
            <h3 className={styles.serviceName}>{room.title}</h3>
            <p className={styles.serviceDescription}>{room.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
