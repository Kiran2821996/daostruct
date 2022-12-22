import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import video from "./assets/video.mp4"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<video autoPlay loop muted id='video'  >
    <source src={video} type="video/mp4" />
</video>
<App />
</>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
