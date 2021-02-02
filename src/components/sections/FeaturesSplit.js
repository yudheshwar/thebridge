import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div id="correspondents"className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                CORRESPONDENTS
                  </div>
                <h3 className="mt-0 mb-12">
                  
                  </h3>
                <p className="m-0">
                WRITE A POEM OR COMIC PIECE OR WRITE AN ARTICLE ON A TOPIC OF YOUR CHOICE! OR SUMMARIZE AN EXISTING ARTICLE (FROM BELOW) SIX STARS, SIX ECLIPSES SPACE FOOD
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <img
                  src="https://data.whicdn.com/images/218666223/original.gif"
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div id="webdeveloper"className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                WEB DEVELOPER
                  </div>
                <h3 className="mt-0 mb-12">
                  
                  </h3>
                <p className="m-0">
                SHARE YOUR PORTFOLIO (GITHUB/GITLAB/LINKEDIN) AND REDESIGN THIS RECRUITMENT PAGE, WITH YOUR CHOICE OF TOOLS. SHARE A COMPLETE PRODUCTION URL & ITS SOURCE CODE. ADDITIONAL FUNCTIONALITY WILL BE CONSIDERED. ENJOY YOURSELF AND MAKE IT SIMPLE!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <img
                  src="https://cdn.dribbble.com/users/1912990/screenshots/6496981/web_developing.gif"
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div id="designer"className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                DESIGNER
                  </div>
                <h3 className="mt-0 mb-12">
                  
                  </h3>
                <p className="m-0">
                SHARE YOUR PORTFOLIO (WEBSITE/CREATIONS) AND DESIGN A POSTER FOR AN EXISTING BRIDGE ARTICLE.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <img src="https://blog.sagipl.com/wp-content/uploads/2017/11/Graphic-Designer.gif"
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;