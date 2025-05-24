'use client';

import { useState } from 'react';

export default function Alerts() {
  const [alerts, setAlerts] = useState<string[]>([]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setAlerts([message, ...alerts]);
      setMessage('');
    }
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Pi Alerts</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={message}
          placeholder="Type your alert here..."
          onChange={(e) => setMessage(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "80%",
            maxWidth: "300px",
            marginRight: "0.5rem",
          }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Submit
        </button>
      </form>

      <div>
        {alerts.length === 0 ? (
          <p>No alerts posted yet.</p>
        ) : (
          <ul>
            {alerts.map((alert, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                🚨 {alert}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
