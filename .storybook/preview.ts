import '../src/global.css';
import type { Preview } from '@storybook/react';
import React from 'react';
import { AppProvider } from '../src/components/AppProvider/AppProvider';

const withProvider = (Story: any, context: any) => (
  <AppProvider>
    <Story {...context} />
  </AppProvider>
);

const preview: Preview = {
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [withProvider],
};

export default preview;
