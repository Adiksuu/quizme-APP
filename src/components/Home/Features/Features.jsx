import React from 'react'
import FeaturesList from './FeaturesList'

export default function Features() {
  return (
    <section className="features" id="features">
        <div className="section_heading">
            <h2>Our possibilities, you will find it here</h2>
            <p>We offer really interesting things, but if you haven't read them yet, now is the best time. Below you can read what makes us stand out from the rest</p>
        </div>
        <div className="features_content">
            <FeaturesList />
        </div>
    </section>
  )
}
