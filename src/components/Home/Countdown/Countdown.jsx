import React from 'react'
import CountdownTimer from './CountdownTimer'

export default function Countdown() {
  return (
    <section className="countdown" id="countdown">
        <div className="section_heading">
            <h2>It will start soon</h2>
            <p>Stay tuned for the full release date reveal! This will be a groundbreaking moment</p>
        </div>
        <div className="countdown_content">
            <CountdownTimer />
        </div>
    </section>
  )
}
