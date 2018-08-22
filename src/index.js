import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Muda from './App';
ReactDOM.render(
	<Muda />,
	 document.getElementById('root'),
	);
registerServiceWorker();
