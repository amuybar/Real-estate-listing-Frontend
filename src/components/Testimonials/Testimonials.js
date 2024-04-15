import React from 'react';
import './Testimonials.css';

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p className="quote">"{testimonial.quote}"</p>
          <p className="clientName">{testimonial.clientName}</p>
          <p className="location">{testimonial.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
