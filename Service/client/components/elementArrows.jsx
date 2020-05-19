import React from 'react';
import styled from 'styled-components';

const E_Arrows = styled.div`
  z-index: 2 !important;
  color: white !important;
`;



const ElementArrows = ({ direction, clickFunction, glyph }) => (
    <E_Arrows
      data-spec={`element-arrow ${direction}`}
      className={`element-arrow ${direction}`}
      onClick={clickFunction}
      >
      {glyph}
    </E_Arrows>

);

export default ElementArrows;