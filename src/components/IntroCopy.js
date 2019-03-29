

import React from 'react';
import { FaCogs } from 'react-icons/fa';

import { Parallax } from 'react-scroll-parallax';
import Video from '../images/cogwheelsilhouette_2.gif'


const IntroCopy = () => (
      <Parallax className="custom-class" x={[20, 100]} tagOuter="figure">

      <h2 className="cogsTitle">  <img src={Video} className= "cogs" alt="loading..." />  Comment ça <span className="span"> marche </span> ? </h2>
    </Parallax>

);

export default IntroCopy;
