'use client';

import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Trigger redeploy

export default function Page() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from('alerts').insert({ message });

    if (error) {
      setStatus('❌ Failed to send alert');
    } else {
      setStatus('✅ Alert sent!');
      setMessage('');
    }
  };

  return (
    <main>
      <h1>🚨 Pi Alert Chain</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter alert message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send Alert</button>
      </form>
      <p>{status}</p>
    </main>
  );
}
