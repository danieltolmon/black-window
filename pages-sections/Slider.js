import React from 'react';
import Slider from 'react-slick';
import styles from 'assets/jss/nextjs-material-kit/pages/components.js';
import Link from 'next/link';

export default function CenterMode({ videos }) {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: videos.length > 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {videos?.map(({ id, snippet = {} }, i) => {
          const { thumbnails = {}, resourceId = {} } = snippet;
          const { medium } = thumbnails;
          return (
            <li key={id} className={styles.card}>
              <Link href={`/video/${resourceId.videoId}`}>
                <img
                  style={{
                    width: '100%',
                    padding: '5px',
                    cursor: 'pointer',
                  }}
                  src={medium.url}
                  alt=""
                />
              </Link>
            </li>
          );
        })}
      </Slider>
    </div>
  );
}
