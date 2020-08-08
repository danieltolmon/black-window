import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import Parallax from 'components/Parallax/Parallax.js';
import SectionCarousel from 'pages-sections/SectionCarousel.js';

import styles from 'assets/jss/nextjs-material-kit/pages/components.js';

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand={<h6>Logo Black Window</h6>}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax image={require('assets/img/nextjs_header.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Black Window</h1>
                <h3 className={classes.subtitle}>
                  Los mejores videos al alcance de tu mano.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
      </div>
      <Footer />
    </div>
  );
}
