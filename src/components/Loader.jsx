import React from 'react';

export default function Loader({ isLoading }) {
  return (
    <div className={`loader-overlay ${isLoading ? '' : 'hidden'}`}>
      <div className="loader-spinner"></div>
      <div className="loader-text">GOKUL NATH J</div>
      <div style={{
        color: 'var(--text-muted)',
        fontSize: '0.75rem',
        marginTop: '8px',
        letterSpacing: '0.2em',
        fontWeight: '600',
        textTransform: 'uppercase'
      }}>
        Analyzing Data Engine...
      </div>
    </div>
  );
}
