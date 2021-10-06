import * as React from 'react';

interface Props {
}

const Footer: React.FC<Props> = () => {
  const text = 'I am the footer bitch ass shit';

  return (
    <div>
      {text}
    </div>
  );
};

export default Footer;
