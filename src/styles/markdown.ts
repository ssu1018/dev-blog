import { css } from '@emotion/react';
import mq from '@/constants/mediaQuery';

export default css`
  font-size: 1.1rem;
  line-height: 1.9rem;
  font-weight: 500;
  width: 100%;

  ${mq[0]} {
    font-size: 1rem;
    line-height: 1.7rem;
    word-spacing: -1px;
  }
  p {
    line-height: 2rem;
    margin-bottom: 2em;
    font-family: "'Noto Sans Korean', 'Fira Sans', sans-serif";
  }
  a {
    color: gray;
    outline: 0;
    font-weight: 600;
  }

  ::-moz-selection {
    background: rgba(255, 255, 0, 0.3);
    color: #000;
  }

  *::selection {
    color: white;
    background-color: gray;
  }

  img {
    max-width: 100%;
  }

  h1 {
    font-size: 2.5em;
    margin: 2.5rem 0 0 5rem;
  }

  h2 {
    font-size: 2em;
    margin: 2rem 0;
  }

  h3 {
    margin: 1em 0 0.8em 0;
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.4em;
    margin: 0.5rem 0;
  }

  h5 {
    font-size: 1.2em;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 600;
  }

  code {
    font-family: '"Lato",sans-serif';
    font-weight: 600;
  }

  pre {
    line-height: 1.4rem;
    code {
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 0.5px;
      ${mq[0]} {
        font-size: 0.7rem;
      }
    }
    background: rgb(39, 44, 53);
    padding: 1.5em;
    margin: 2em 0px;
    overflow: auto;
    border-radius: 0.6em;
    tab-size: 4px;
  }

  blockquote {
    color: #666666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em gray solid;
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #eee;
    margin: 1em 0;
    padding: 0;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  ins {
    background: #ff9;
    color: #000;
    text-decoration: none;
  }

  mark {
    background: #ff0;
    color: #000;
    font-style: italic;
    font-weight: bold;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  ul,
  ol {
    margin-bottom: 1.5em;
    padding: 0 0 0 1.5rem;
  }

  li {
    list-style-type: circle;
  }

  dd {
    margin: 0 0 0 2em;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td {
    vertical-align: top;
  }
`;
