import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';

import profile from 'assets/img/about-us-black.jpg';
import logoBlack from 'assets/img/logo-black.png';
import logoWhite from 'assets/img/logo-white.png';

import styles from 'assets/jss/nextjs-material-kit/pages/profilePage.js';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brandBlack={<img src={logoBlack} alt="logo" height="50px" />}
        brandWhite={<img src={logoWhite} alt="logo" height="50px" />}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small filter image={require('assets/img/contact-us.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div
          style={{
            display: 'flex',
            felxWrap: 'nowrap',
            paddingBottom: '40px ',
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>BLACK WINDOW STUDIO</h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              En el sector audiovisual, al resultado final hay que añadirle
              siempre todo el proceso previo. Para que cualquier resultado tenga
              alma, aparte de calidad técnica, precisa de estar hecho con
              pasión, entusiasmo y compromiso. En Black Window Studio sabemos
              que cumplimos con ello. Creemos en todos los proyectos en los que
              nos involucramos, ya sea porque nos gusta el fin, el mensaje o las
              personas que están detrás de ellos. <br />
              <br />
              Desde un videoclip a un spot publicitario. Desde un vídeo
              corporativo a una obra de ficción. Desde el primer segundo hasta
              el último click. <br />
              <br />
              Creemos que las personas con las que trabajamos no son clientes,
              sino socios. Nos ayudamos mutuamente a seguir creciendo y a
              conseguir los desafíos que tenemos propuestos.
              <br />
              <br />
              Siempre con el material audiovisual necesario, garantizamos la
              seguridad y el compromiso tanto en la calidad final como en los
              plazos de entrega.
              <br />
              <br />
              <strong>¿Te apuntas?</strong>
            </div>
          </div>

          {/* <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Fernando Granados</h3>
                    <h6>VIDEO PRODUCER</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-twitter'} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-instagram'} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-facebook'} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{' '}
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
