import styled from "styled-components";

export const LayoutComponent = styled.main`
  .container{
    margin-left: 24px;
    margin-right: 24px;
  }
  .paddingContainer{
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
  }
  @media (min-width: 768px){
    .container{
        margin-left: 48px;
        margin-right: 48px;
    }
    .paddingContainer{
        padding-left: 48px;
        padding-right: 48px;
    }
  }
  @media (min-width: 1024px){
    .container{
        margin-left: 96px;
        margin-right: 96px;
    }
    .paddingContainer{
        padding-left: 98px;
        padding-right: 98px;
    }
  }
  @media (min-width: 1366px){
    .container{
        margin-left: 156px;
        margin-right: 156px;
    }
    .paddingContainer{
        padding-left: 156px;
        padding-right: 156px;
    }
  }
  @media (min-width: 1440px){
    .container{
        margin-left: calc((100% - 1174px) / 2);
        margin-right: calc((100% - 1174px) / 2);
    }
    .paddingContainer{
        padding-left: calc((100% - 1174px) / 2);
        padding-right: calc((100% - 1174px) / 2);
    }
  }
  
  
  /* Sections
     ========================================================================== */
  
  /**
   * Remove the margin in all browsers.
   */
  
  body {
    margin: 0;
  }
  
  main {
    display: block;
  }
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  
  small {
    font-size: 80%;
  }

  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }

  
  img {
    border-style: none;
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input { /* 1 */
    overflow: visible;
  }
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  progress {
    vertical-align: baseline;
  }
  
  textarea {
    overflow: auto;
  }
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  details {
    display: block;
  }
  
  summary {
    display: list-item;
  }
  
  template {
    display: none;
  }
  
  [hidden] {
    display: none;
  }

  :root {
    --font-size-h1: 2rem;
    --font-size-h2: 1.5rem;
    --font-size-md: 1.25rem;
    --font-size-sm: 1rem;
    /* --color-white: #EBEFF2;
    --color-tertiary: #D2D4D9;
    --color-secundary: #AFAFAF;
    --color-primary: #1D2527; */
}

@media (min-width: 1024px){
    :root {
        --font-size-h1: 3.5rem;
    }
}

`