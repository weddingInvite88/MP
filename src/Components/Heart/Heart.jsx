import React from "react";

import "./heart.css";

const Heart = () => {
  const heart = `
    <svg class="heart blast" viewBox="0 0 24 24">
    <defs>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
            .cls-1 {
                fill: url(#radial-gradient);
            }

            .cls-2 {
                font-size: 3pt;
                fill: #fff;
                stroke: #fff;
                stroke-miterlimit: 5;
                stroke-width: 0.0px;
                font-family: "Great Vibes", cursive;
            }
        </style>
        <radialGradient id="radial-gradient" cx="481.02" cy="626.79" r="558.68" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#ed0020" />
            <stop offset="0.21" stop-color="#e5001c" />
            <stop offset="0.55" stop-color="#ce0012" />
            <stop offset="0.97" stop-color="#a90001" />
            <stop offset="1" stop-color="#a60000" />
        </radialGradient>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
            <path class="cls-1"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            <!-- <text class="cls-2" transform="translate(5 11)">PRAGHANA</text> -->
            <text class="cls-2" transform="translate(5 7.9)">Meghana</text>
            <text class="cls-2" transform="translate(11 13)">   &   </text>
            <text class="cls-2" transform="translate(6.5 16)">Pramod</text>
            
        </g>
    </g>
</svg>
    `;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", height: "0px" }}>
        <div dangerouslySetInnerHTML={{ __html: heart }} />
      </div>
    </>
  );
};

export default Heart;
