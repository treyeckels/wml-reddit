import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.register();

// serviceWorker.register();
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker
//       .register('/sw.js')
//       .then(registration => {
//         console.log(
//           'Service worker successfully registered on scope',
//           registration.scope
//         );
//       })
//       .catch(err => {
//         console.log('Service worker failed to register');
//       });
//   });
// }

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
