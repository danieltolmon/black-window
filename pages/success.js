import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';

import styles from 'assets/jss/nextjs-material-kit/pages/contactUsPage.js';

import image from 'assets/img/backgrounds/contact-us-bg.jpg';
import logoBlack from 'assets/img/logo-black.png';
import logoWhite from 'assets/img/logo-white.png';

const useStyles = makeStyles(styles);

export default function SuccessPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(function () {
    setCardAnimation('');
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brandBlack={<img src={logoBlack} alt="logo" height="50px" />}
        brandWhite={<img src={logoWhite} alt="logo" height="50px" />}
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
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
              <Card
                className={classes[cardAnimaton]}
                style={{ marginTop: '80px' }}
              >
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h3 className={classes.title}>MUCHAS GRACIAS!</h3>
                  <h5>Nos pondremos en contacto lo antes posíble</h5>
                  <Button
                    href="/"
                    color="transparent"
                    className={classes.navLink}
                  >
                    ← Volver al inicio
                  </Button>
                </CardHeader>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
