

import React from 'react';
import { FaCogs } from 'react-icons/fa';

import { Parallax } from 'react-scroll-parallax';


const IntroCopy = () => (
      <Parallax className="custom-class" x={[0, 80]} tagOuter="figure">
        <h2> <span className="cogs"> <FaCogs />  </span> Comment ça <span className="span"> marche </span> ? </h2>
    </Parallax>
);

export default IntroCopy;
