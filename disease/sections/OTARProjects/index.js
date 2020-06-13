import { loader } from 'graphql.macro';

export const id = 'otarProjects';

export const name = 'Open Targets Projects';

export const hasSummaryData = () => true;


export const summaryQuery = loader('./summaryQuery.gql');
export const sectionQuery = loader('./sectionQuery.gql');

export { default as DescriptionComponent } from './Description';
export { default as SummaryComponent } from './Summary';
export { default as SectionComponent } from './Section';
