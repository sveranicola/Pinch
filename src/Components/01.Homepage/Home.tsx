import * as React from 'react';
import Footer from '../SharedComponents/03.Footer/Footer';
import ToolsOffered from './ToolsOffered';

function Home() {
  return (
    <>
      <div>
        This is the Home page
      </div>
      <ToolsOffered />
      <div>
        {Footer}
      </div>
    </>
  );
}

export default Home;
