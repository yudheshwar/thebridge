import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

     

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

 

  return (
  <section
      {...props}
      className={outerClasses}
    >
    <div className="container-sm">
      <div className="backgroundimg" >
          <h1  className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="100">
            THE BRIDGE <span className="text-color-primary"></span>
            <h6  className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="150">
              Psg College Of Technology
            </h6>   
          </h1>    
           
          
          <h2  className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            WE'RE NOW <span className="text-color-primary">RECRUITING</span>
          </h2>         
          <Button  data-reveal-delay="250" className="button" tag="a" color="primary" wideMobile href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=thebridgepsg@psgtech.ac.in">
                  Mail us @thebridge@psgtech.ac.in
          </Button>
      </div>
    </div>
  </section>
  );
}



Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;