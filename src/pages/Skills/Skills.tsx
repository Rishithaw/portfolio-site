import React from 'react';
import skillData from '../../data/skillData';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from '../../Components/Table';

export const Skills: React.FC = () => {
  return (
    <div>
      <h1>Skills</h1>
      <h3>Languages / Frameworks</h3>
      <ul>
        {skillData.languages.map((l) => <li key={l}>{l}</li>)}
      </ul>

      <h3>Tools</h3>
      <ul>
        {skillData.tools.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </div>
  );
};