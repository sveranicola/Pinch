import * as React from 'react';
import AboutUs from './AboutUs';
import SignUp from './SignUp';
import ToolsOffered from './ToolsOffered';

function Home() {
  return (
    <>
      <div>
        This is the Home page
      </div>
      <AboutUs />
      <ToolsOffered />
      <SignUp />
    </>
  );
}

export default Home;
