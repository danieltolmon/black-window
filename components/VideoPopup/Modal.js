import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Link from 'next/link';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';

export default function CenterMode({ id, setVideoId }) {
  return (
    <Modal
      open={!!id}
      style={{ height: '100vh' }}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={!!id} timeout={2000}>
        <div
          style={{
            padding: '3rem',
            backgroundColor: 'rgba(0,0,0,0.9',
            height: '100vh',
          }}
        >
          <Link
            href="/?videos=videoclips"
            scroll={false}
            onClick={() => setVideoId(false)}
          >
            <a style={{ color: 'white' }}>← Back to videos</a>
          </Link>
          <div style={{ marginTop: '20px', color: 'white' }}>
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
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&enablejsapi=1`}
            ></iframe>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
