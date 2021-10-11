import * as React from 'react';

interface Props {
}

const AboutUs: React.FC<Props> = () => {
  const header = 'What is Pinch?';

  return (
    <div className="AboutUs">
      <img src="/assets/images/noimageavailable.jpg" alt="Visual of the front page" className="ABimg" />
      <div className="description">
        {header}
        <p>Pinch is a personal finance site that helps you keep track of all your</p>
        <p>financial needs. Our mission is to help you pinch all the pennies you</p>
        <p>can while also making the process as simple as possible. No need</p>
        <p>to hire an expensive financial consultant when you have Pinch</p>
      </div>
    </div>
  );
};

export default AboutUs;
