import React from 'react';

const VideoBackground = () => {
  return (
    <>
      {/* Fallback dark gradient just in case the video is loading or missing */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-[#0c132c] via-[#172f5c] to-[#6e2c1e] z-0"></div>
      
      {/* The HTML5 Video Player */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-60 pointer-events-none"
        src="/videos/hero.mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* A subtle overlay to ensure text remains readable over bright videos */}
      <div className="fixed inset-0 w-full h-full bg-black/40 z-0 pointer-events-none"></div>
    </>
  );
};

export default VideoBackground;
