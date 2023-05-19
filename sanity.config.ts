import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { visionTool } from '@sanity/vision';
import { myTheme } from './theme';

import { getDefaultDocumentNode } from './structure';
import Logo from './components/modules/Logo';
import StudioNavbar from './components/navigation/StudioNavbar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/studio',

  name: 'HWC_Content_Studio',
  title: 'HW Comms Content Studio',

  projectId: 'vlh7m3oc',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
