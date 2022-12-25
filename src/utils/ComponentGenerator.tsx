import React from 'react';

import Section from 'molecules/Section/Section';

import type { FC, ReactNode } from 'react';

interface IComponentGenerator {
  components: ReactNode;
}

const ComponentGenerator: FC<IComponentGenerator> = () => <Section>component</Section>;

export default ComponentGenerator;
