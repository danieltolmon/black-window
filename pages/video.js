import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';

import styles from 'assets/jss/nextjs-material-kit/pages/contactUsPage.js';

import image from 'assets/img/backgrounds/video-bg.jpg';
import logoBlack from 'assets/img/logo-black.png';
import logoWhite from 'assets/img/logo-white.png';

const useStyles = makeStyles(styles);
import { useRouter } from 'next/router';

export default function Video(props) {
  const router = useRouter();
  const { id } = router.query;
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brandBlack={<img src={logoBlack} alt="logo" height="50px" />}
        brandWhite={<img src={logoWhite} alt="logo" height="50px" />}
        absolute
        color="transparent"
        brand="Logo Black Window"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <iframe
            style={{
              width: '100%',
              minHeight: '78vh',
              height: '100%',
              padding: '5px',
              border: 'none',
            }}
            frameBorder="0"
            allowFullScreen
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          ></iframe>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
