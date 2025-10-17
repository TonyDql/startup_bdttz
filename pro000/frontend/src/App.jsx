import { useState } from 'react'

export default function App() {
  const [name, setName] = useState('World')

  return (
    <div style={{ fontFamily: 'system-ui', textAlign: 'center', marginTop: '5rem' }}>
      <h1>Hello, {name}!</h1>

      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
        style={{ padding: '0.5rem', marginTop: '1rem' }}
      />

      <p style={{ marginTop: '1rem', color: '#888' }}>
        Edit <code>App.jsx</code> and save to see live updates.
      </p>
    </div>
  )
}
