import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default defineConfig({
  projectId: "89in6o",
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
