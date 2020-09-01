import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import { fetchYoutubeList } from '../data/youtubeAPI';
import Slider from 'components/VideoCarrusel/Slider.js';
import VideoTitle from 'components/VideoTitles/VideoTitles.js';

import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/nextjs-material-kit/pages/videosPage.js';
import logoBlack from 'assets/img/logo-black.png';
import logoWhite from 'assets/img/logo-white.png';

const useStyles = makeStyles(styles);

const EVENTOS_LIST_ID = 'PL7pgThCHtpAVG3wO22qy6CsjmrQIDSiWT';
const VIDEOCLIPS_LIST_ID = 'PL7pgThCHtpAV3t5xhfY4JteHR88x8gaUr';
const SPOTS_LIST_ID = 'PL7pgThCHtpAWW2JrL4Z9RcpCUJxOyyuBN';

export default function Videos(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [videosEventos, setVideosEventos] = useState();
  const [videosClips, setVideosClips] = useState();
  const [videosSpots, setVideosSpots] = useState();
  const [scrollToVideos, setScrollToVideos] = useState(false);
  const router = useRouter();

  const myRef = useRef();

  useEffect(() => {
    if (router.query.videos === 'videoclips') {
      scrollTo();
    }
  });

  useEffect(() => {
    if (scrollToVideos) {
      scrollTo();
      setScrollToVideos(false);
    }
  }, [scrollToVideos]);

  const scrollTo = () => {
    debugger;
    window.scrollTo({
      top: myRef.current.offsetTop,
      behavior: 'smooth', // smooth scroll.
    });
  };

  async function fetchClipsData(id) {
    const response = await fetchYoutubeList(id);
    setVideosClips(response?.items);
  }
  async function fetchEventosData(id) {
    const response = await fetchYoutubeList(id);
    setVideosEventos(response?.items);
  }
  async function fetchSpotsData(id) {
    const response = await fetchYoutubeList(id);
    setVideosSpots(response?.items);
  }

  useEffect(() => {
    fetchClipsData(VIDEOCLIPS_LIST_ID);
    fetchEventosData(EVENTOS_LIST_ID);
    fetchSpotsData(SPOTS_LIST_ID);
  }, []);

  return (
    <div>
      <Header
        brandBlack={<img src={logoBlack} alt="logo" height="50px" />}
        brandWhite={<img src={logoWhite} alt="logo" height="50px" />}
        rightLinks={<HeaderLinks setScrollToVideos={setScrollToVideos} />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax image={require('assets/img/header.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  BLACK WINDOW <br />
                  <span className={classes.studio}>STUDIO</span>
                </h1>
                <h3 className={classes.subtitle}>
                  {/* Los mejores videos al alcance de tu mano. */}
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)} ref={myRef}>
        <div
          style={{
            padding: '80px 0',
            height: '100%',
          }}
        >
          {videosClips && (
            <>
              <VideoTitle>VIDEOCLIPS</VideoTitle>
              <Slider videos={videosClips} />{' '}
            </>
          )}
          {videosEventos && (
            <>
              <VideoTitle>EVENTS</VideoTitle>
              <Slider videos={videosEventos} />{' '}
            </>
          )}
          {videosSpots && (
            <>
              <VideoTitle>SPOTS/CM</VideoTitle>
              <Slider videos={videosSpots} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
