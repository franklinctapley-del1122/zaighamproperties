import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';

class AppErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('Zaigham Properties render error:', error, info); }
  render() {
    if (this.state.error) return (
      <div style={{minHeight:'100vh',background:'#101c2c',color:'#fff',padding:'48px 22px',fontFamily:'Arial,sans-serif'}}>
        <div style={{maxWidth:720,margin:'8vh auto',background:'#18283b',border:'1px solid #526174',borderRadius:16,padding:28}}>
          <p style={{color:'#c6a36b',letterSpacing:2,fontSize:12}}>ZAIGHAM PROPERTIES · WEBSITE DIAGNOSTIC</p>
          <h1 style={{fontSize:30,margin:'14px 0'}}>Page could not be displayed</h1>
          <p style={{color:'#d6deea',lineHeight:1.7}}>A page component encountered an error. This diagnostic identifies the exact issue.</p>
          <pre style={{whiteSpace:'pre-wrap',overflowWrap:'anywhere',background:'#0c1521',padding:16,borderRadius:8,color:'#ffd9a0',fontSize:13}}>{String(this.state.error?.message || this.state.error)}</pre>
          <button onClick={()=>window.location.reload()} style={{background:'#c6a36b',color:'#101c2c',border:0,borderRadius:6,padding:'12px 18px',fontWeight:700}}>Reload website</button>
        </div>
      </div>
    );
    return this.props.children;
  }
}
createRoot(document.getElementById('root')).render(
  <React.StrictMode><BrowserRouter><AppErrorBoundary><App /></AppErrorBoundary></BrowserRouter></React.StrictMode>
);