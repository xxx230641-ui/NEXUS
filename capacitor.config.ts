import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nexus.app',
  appName: 'نكسوس — NEXUS Digital Twin',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
