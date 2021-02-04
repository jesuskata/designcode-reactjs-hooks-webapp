// Dependencies
import React from 'react';
import { Link } from 'gatsby';

// Data
const menuData = [
  { title: 'Courses', icon: '/images/icons/courses.svg', link: '/courses' },
  { title: 'Tutorials', icon: '/images/icons/tutorials.svg', link: '/tutorials' },
  { title: 'Pricing', icon: '/images/icons/pricing.svg', link: '/pricing' },
];

export const Header = () => (
  <>
    {menuData.map((item, index) => (
      <Link to={item.link} key={item.title}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </Link>
    ))}
  </>
);
