import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#4f46e5' }}>Unlock Your Best Self</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px' }}>
        Smart tools, deep insights, and digital planners to elevate your daily life.
      </p>
      <button style={{
        marginTop: '1.5rem',
        padding: '1rem 2rem',
        fontSize: '1rem',
        backgroundColor: '#4f46e5',
        color: '#fff',
        border: 'none',
        borderRadius: '1rem',
        cursor: 'pointer'
      }}>
        Get Started
      </button>
    </main>
  );
}
