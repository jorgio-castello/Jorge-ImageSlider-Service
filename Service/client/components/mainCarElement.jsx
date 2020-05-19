import React from 'react';
import styled from 'styled-components';
import ElementCarousel from './elementCarousel.jsx';

// ★

const MHYML_Element_Wrapper = styled.div`
  padding-left: 8px !important;
  padding-right: 8px !important;
  width: 100% !important;
  height: 100% !important;
  box-sizing: border-box;
  display: block;
`;

const MHYML_Element = styled.div`
  width: 33.333% !important;
  display: inline-block !important;
  vertical-align: top !important;
  white-space: normal !important;
`;

const MHYML_Element_Info_Top = styled.div`
  margin-top: 14px;
  margin-bottom: 4px;
  -webkit-box-align: center !important;
  font-size: 14px !important;
  line-height: 18px !important;
  align-items: center !important;
  display: inline-flex !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  width: 333.33px !important;
`;

const MHYML_Room_Type = styled.div`
  text-align: left;
  color: rgb(113, 113, 113) !important;
  line-height: 20px !important;
  max-height: 20px !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 1 !important;
  -webkit-box-orient: vertical !important;
  animation-duration: 0.3s !important;
  animation-name: keyframe_18jn58a !important;
  animation-timing-function: ease-in-out !important;
  opacity: 1 !important;
  visibility: visible !important;
  flex: 1 1 0% !important;
  overflow: hidden !important;
`;

const MHYLM_Rating_Span = styled.span`
  margin-left: 4px !important;
  animation-duration: 0.3s !important;
  animation-name: keyframe_18jn58a !important;
  animation-timing-function: ease-in-out !important;
  opacity: 1 !important;
  visibility: visible !important;
`;

const MHYML_Info_Mid = styled.div`
  width: 333.33px;
  text-align: left;
  max-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  color: rgb(34, 34, 34) !important;
  font-size: 16px !important;
  line-height: 20px !important;
  box-sizing: border-box;
  display: inline-block !important;
  vertical-align: top !important;
  white-space: normal !important;
  width: 100% !important;
`;

const MHYML_Element_Info_Bottom = styled.div`
  margin-top: 4px;
  margin-bottom: 0px;
  position: relative !important;
`;

const MHYML_Bottom_Inner_Div = styled.div`
  -webkit-box-align: center !important;
  align-items: center !important;
  color: rgb(34, 34, 34) !important;
  display: flex !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
`;

const MainCarElement = (props) => {
  const currentRoom = props.data;
  return (
    <MHYML_Element>
      <MHYML_Element_Wrapper>
        <ElementCarousel images={currentRoom.img_src} />
        <MHYML_Element_Info_Top>
          <MHYML_Room_Type>
            {currentRoom.room_type}
            :
            {' '}
            {currentRoom.bed_num}
            {' '}
            beds
          </MHYML_Room_Type>
          <MHYLM_Rating_Span>{currentRoom.rating}</MHYLM_Rating_Span>
        </MHYML_Element_Info_Top>
        <MHYML_Info_Mid>{currentRoom.description}</MHYML_Info_Mid>
        <MHYML_Element_Info_Bottom>
          <MHYML_Bottom_Inner_Div>
            <b>
              $
              {currentRoom.price_per_night}
              {' '}
            </b>
            / night
          </MHYML_Bottom_Inner_Div>
        </MHYML_Element_Info_Bottom>
      </MHYML_Element_Wrapper>
    </MHYML_Element>
  );
};

// ToDo: add all elements of each data packet

// notes: eventually replace background image for mainCarElement with a carousel for an element specifically

export default MainCarElement;
