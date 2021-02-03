import { css } from '@emotion/react';
export default css`
  font-size: 1.2rem;
  line-height: 2rem;
  font-family: "'Noto Sans Korean', 'Fira Sans', sans-serif";

  p {
    margin: 1em 0;
    font-size: 1.2rem;
    line-height: 2rem;
  }
  a {
    color: indigo;
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
    margin: 1.5rem 0;
  }

  h2 {
    font-size: 2em;
    margin: 2.5rem 0;
  }

  h3 {
    margin: 1rem 0 0.7rem 0;
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.4em;
  }

  h5 {
    font-size: 1.2em;
  }

  code {
    font-family: '"Lato",sans-serif';
    font-size: 1.2rem;
    font-weight: 600;
  }

  pre {
    line-height: 1.4rem;
    code {
      font-size: 0.9rem;
      background: rgb(39, 44, 53);
      font-family: 'Fira Code';
      color: rgb(224, 224, 224);
      font-weight: 500;
    }
    background: rgb(39, 44, 53);
    padding: 1.5em;
    margin: 2em 0px;
    overflow: auto;
    border-radius: 0.6em;
    tab-size: 4;
  }

  blockquote {
    color: #666666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em blue solid;
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #eee;
    margin: 1em 0;
    padding: 0;
  }

  kbd,
  samp {
    color: #000;
    font-family: monospace, monospace;
    _font-family: 'courier new', monospace;
    font-size: 1rem;
    line-height: 1.2rem;
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
    margin: 0.5rem 0;
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
