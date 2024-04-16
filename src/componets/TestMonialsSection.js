import React from 'react';
import '../styles/TestimonialsSection.css'
const Testimonial = ({ name, quote, image }) => {
  return (
    <div className="testimonial">
      <p>{quote}</p>
      <span>- {name}</span>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      quote: 'They helped me find the perfect house!',
    
    },
    {
      name: 'Jane Smith',
      quote: 'The process was smooth and stress-free.',
    },
    
  ];

  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
