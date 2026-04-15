import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalGlobalProvider } from '../src/providers/ModalGlobalProvider.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalGlobalProvider>
      <App />
    </ModalGlobalProvider>
  </StrictMode>,
);
