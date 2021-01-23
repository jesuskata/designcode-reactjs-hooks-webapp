// Dependecies
import React from 'react';
import { Link } from 'gatsby';

export const HeroSection = () => (
  <section>
    <div>
      <img src="/images/logos/logo.svg" alt="logo" />
      <h1>Design and code ReactJS apps</h1>
      <p>Don’t skip design. Learn design and code, by building real apps, collaborate and solving product UI problems.</p>
      <Link to="/page-2/">Go to page 2</Link>
      {' '}
      <br />
    </div>
  </section>
);
