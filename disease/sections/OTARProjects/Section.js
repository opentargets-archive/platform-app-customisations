import React from 'react';
import projects from './projects.json';
import { OtTableRF } from 'ot-ui';

const columns = [
  {
    id: 'projectId',
    label: 'Project ID',
  },
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'efoId',
    label: 'EFO ID',
  }
]

const Section = () => {
  return <OtTableRF columns={columns} data={projects}/>
};

export default Section;
