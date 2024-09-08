import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// 계산기 만들기

// 순차적 계산기
// 사칙연산 기호는 업데이트 되지 않으며, 연산기호를 누른 후 리셋된다.
