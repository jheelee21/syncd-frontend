import './App.css'

function App() {
  return (
    <main className="mobile-shell">
      <header className="app-header">
        <p className="brand">syncd</p>
        <button type="button" className="ghost-btn">
          Invite
        </button>
      </header>

      <section className="hero-card">
        <p className="eyebrow">React + TypeScript mobile frontend</p>
        <h1>Stay synced with your team</h1>
        <p className="body">
          Track priorities, keep conversations in one place, and keep momentum
          moving from your phone.
        </p>
        <button type="button" className="primary-btn">
          Get started
        </button>
      </section>

      <section className="list-card" aria-label="Today">
        <h2>Today</h2>
        <ul>
          <li>
            <span>Standup recap</span>
            <strong>9:30 AM</strong>
          </li>
          <li>
            <span>Design handoff</span>
            <strong>11:00 AM</strong>
          </li>
          <li>
            <span>Sprint planning</span>
            <strong>2:00 PM</strong>
          </li>
        </ul>
      </section>

      <nav className="bottom-nav" aria-label="Primary">
        <button type="button">Home</button>
        <button type="button">Inbox</button>
        <button type="button">Calendar</button>
        <button type="button">Profile</button>
      </nav>
    </main>
  )
}

export default App
