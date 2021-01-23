// Dependencies
import React from 'react';

// Components
import { Layout } from '../components/layout/layout';
import { SEO } from '../components/layout/seo';
import { HeroSection } from '../components/sections/HeroSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
  </Layout>
);

export default IndexPage;
