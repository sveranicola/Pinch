import * as React from 'react';

interface Props {
}

const Footer: React.FC<Props> = () => {
  const text = '2021 Pinch | 1.0.0';

  return (
    <div className="Footer">
      <div className="linksRow">
        <div>About Pinch</div>
        <div>Privacy</div>
        <div>Help</div>
        <div>Terms of Use</div>
        <div>FAQ</div>
        <div>Contact Us</div>
      </div>
      <div className="theCenter">
        {text}
      </div>
    </div>
  );
};

export default Footer;
