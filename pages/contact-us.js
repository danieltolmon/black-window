import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardFooter from 'components/Card/CardFooter.js';
import CustomInput from 'components/CustomInput/CustomInput.js';

import styles from 'assets/jss/nextjs-material-kit/pages/contactUsPage.js';

import image from 'assets/img/backgrounds/contact-us-bg.jpg';
import logoBlack from 'assets/img/logo-black.png';
import logoWhite from 'assets/img/logo-white.png';

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
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
                  <h3 className={classes.title}>CONTACT US</h3>
                  <div className={classes.socialLine}>
                    <a
                      justIcon
                      href="https://www.instagram.com/blackwindowstudio/"
                      target="_blank"
                      style={{ color: 'white' }}
                    >
                      <i
                        className={'fab fa-instagram'}
                        style={{ fontSize: '50px' }}
                      />
                    </a>
                  </div>
                </CardHeader>
                <p className={classes.divider}>Or Be Classical</p>
                <form
                  className={classes.form}
                  // action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSflEByMaUcI0P2uVZnAiW92KAQvThE1eJIQ0ev1YDcUHWR-cw/formResponse"
                  method="POST"
                  target="hidden_iframe"
                  onsubmit="submitted=true;"
                  data-netlify="true"
                >
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      // inputProps={{ name: 'entry.1553277582' }}
                      inputProps={{ name: 'name' }}
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      // inputProps={{ name: 'entry.59838061' }}
                      inputProps={{ name: 'email' }}
                      formControlProps={{
                        fullWidth: true,
                      }}
                    />
                    <CustomInput
                      labelText="Your Message..."
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.textArea,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        // name: 'entry.1118507046',
                        name: 'message',
                      }}
                    />
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" simple color="primary" size="lg">
                        SEND !
                      </Button>
                    </CardFooter>
                  </CardBody>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
