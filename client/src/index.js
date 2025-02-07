import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './redux/store';
import { Provider } from 'react-redux';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    {/* <div> 

    <Footer/>
    </div> */}
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
