import React, { useContext } from 'react';
import { FamilyContext } from '../App';

const Parents = () => {
  const { activefamily } = useContext(FamilyContext);
  return (
    <section className="parents">
      {activefamily.parents.map(p => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Parents;
