import React from 'react';
import styled from 'styled-components';

const MCArrows = styled.div`
  top: 35%;
  bottom: auto;
  position: absolute !important;
  height: 0px !important;
  display: block !important;
  z-index: 1 !important;
  margin: -12px auto 0px !important;
`;

const MainCarArrows = ({ direction, clickFunction, glyph }) => (
  <MCArrows
    data-spec={`slide-arrow ${direction}`}
    className={`slide-arrow ${direction}`}
    onClick={clickFunction}
  >
    { glyph }
  </MCArrows>
);

export default MainCarArrows;
