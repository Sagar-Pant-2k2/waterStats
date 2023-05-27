import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div
      style={{
        margin: 0,
        fontSize: '18px',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        minHeight: '100vh',
        // backgroundColor: 'yellow',
        // background: 'linear-gradient(45deg, #ff4e50, #fc913a, #f9d423, #eaeaea, #e2e2e2, #838383, #000000)',
        // background: 'linear-gradient(135deg, #6dd5ed, #8ae7ea, #a8f0d5, #c4f7c3, #e1ffcf)',
        // background: rgb(27,215,124);
// background: 'linear-gradient(to top right, rgba(27,215,124,1) 0%, rgba(60,157,215,1) 13%, rgba(13,185,221,1) 55%, rgba(0,255,171,1) 96%)',

background: 'linear-gradient(to top right, rgba(27,215,124,1) 0%, rgba(31,141,207,1) 0%, rgba(13,185,221,1) 30%, rgba(0,255,171,1) 94%)',



        // background: 'linear-gradient(to top right, blue, turquoise, pink)',
        backgroundAttachment: 'fixed',
        overflowY: 'auto',
      }}
    >
      <App />
     
    </div>
  </React.StrictMode>,
)
