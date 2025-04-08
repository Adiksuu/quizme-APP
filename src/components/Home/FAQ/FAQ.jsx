import React from 'react'
import FAQList from './FAQList'

export default function FAQ() {
  return (
    <section className="faq" id="faq">
        <div className="section_heading">
            <h2>Frequently Asked Questions</h2>
            <p>Learn more about our application by reading the following questions below</p>
        </div>
        <div className="faq_content">
            <FAQList />
        </div>
    </section>
  )
}
