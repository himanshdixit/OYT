import './bootstrap.js';

import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client'; 
import Index from './components/index.jsx';

ReactDOM.createRoot(document.getElementById('app')).render( 
    <BrowserRouter>
        <Index /> 
    </BrowserRouter>    
);