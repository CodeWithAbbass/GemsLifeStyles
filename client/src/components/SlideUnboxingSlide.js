import React from 'react';

const SlideUnboxingSlide = ({id, videoUrl, subtitle, title}) => {
  return (
    <>
      <div className="Unboxing_Container w-100" id={id}>
            <div className="video_container w-100">
              <iframe width={"100%"} height="250" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="text_container w-100 p-3">
            <div className="text_container_subtitle">{subtitle}</div>
            <div className="text_container_title py-4 fw-semibold">{title}</div>
            </div>
          </div>
    </>
  );
}

export default SlideUnboxingSlide;
