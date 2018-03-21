import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Calculator from './Calculator';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
