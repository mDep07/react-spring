import React, { useState } from 'react';
import { useTransition, animated, config } from 'react-spring';
import './style.css';

const listado = [
  { nombre: 'Word' },
  { nombre: 'Excel' },
  { nombre: 'Power Point' },
];

export default function App() {
  const [items, setItems] = useState(listado);
  const transactions = useTransition(items, {
    keys: item => item.nombre,
    from: { y: 100, x: 0, opacity: 0 },
    enter: { y: 0, x: 0, opacity: 1 },
    leave: { y: 100, x: 0, opacity: 0 },
    config: config.molasses,
  });

  const toggleList = () => (items.length ? setItems([]) : setItems(listado));
  const hideElement = (element) => {
    
  }

  return (
    <div className="contenedor">
      <button onClick={toggleList}>
        {items.length ? 'Ocultar' : 'Mostrar'}
      </button>
      <div className="contenedor__listado">
        {transactions((style, item) => {
          return item ? (
            <animated.section className="item" style={style} onClick={() => hideElement(item.nombre)}>
              {item.nombre}
            </animated.section>
          ) : (
            ''
          );
        })}
      </div>
    </div>
  );
}
