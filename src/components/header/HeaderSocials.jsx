import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/aniruddha-patil-427b942a1/?originalSubdomain=in" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/ani18605?tab=repositories" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials