
import ReactDOM from 'react-dom/client';
import Main from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
