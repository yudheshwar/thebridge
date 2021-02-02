import React from 'react';
import classNames from 'classnames';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <a href="https://thebridge.psgtech.ac.in/">
          <img
            src={require('./../../../assets/images/logo.png')}
            alt="Open"
            width={100}
            height={100} />
        </a>
      </h1>
    </div>
  );
}

export default Logo;