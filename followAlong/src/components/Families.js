import React, { useContext } from 'react';
import { FamilyContext } from '../App';

import '../styles.scss';

const Families = () => {
    const familyContext = useContext(FamilyContext);
    return (
        <section className="header">
          <h1>Family Trees</h1>
          {familyContext.families.map(family => (
            <button
              className={`family-button 
              ${family.familyName === familyContext.activeFamily.familyName && "active"}`}
              key={family.familyName}
              onClick={() => familyContext.setActiveFamily(family)}
            >
              {family.familyName}
            </button>
          ))}
        </section>
)}

export default Families;