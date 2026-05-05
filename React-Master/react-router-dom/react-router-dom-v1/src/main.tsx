
import ReactDOM from 'react-dom/client';
import * as Router from 'react-router-dom';
import * as App from './app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router.BrowserRouter>
        <App.Main />
    </Router.BrowserRouter>
);