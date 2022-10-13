import React from 'react';
import HeroSection from '../src/components/HeroSection'
import Articles from './components/Articles';
import BlogPost from './components/BlogPost';
import './index.css'

function App() {
  return (
    <main>
      <HeroSection />
      <Articles>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </Articles>
    </main>
  );
}

export default App;
