import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="Footer">
    <span>
      Created by:{' '}
      <a
        className="Footer-link"
        href="https://twitter.com/katoernesthenry"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kato Ernest Henry.
      </a>
    </span>
    <span> | </span>
    <span>
      <a
        className="Footer-link"
        href="https://github.com/ernesthenry/Markdown-Previewer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo Link
      </a>
    </span>
  </footer>
);

export default Footer;
