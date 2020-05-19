import React from 'react';
import styled from 'styled-components';
import ElementArrows from './elementArrows.jsx';


const MHYML_EC_E_Wrapper = styled.div`
  overflow: hidden !important;
  width: 333px;
  height: 222px;
  box-sizing: border-box;
  display: block;
`;

const MHYML_Transformer = styled.div`
  margin-bottom: 0px !important;
  padding: 0px !important;
  overflow: visible !important;
  white-space: nowrap !important;
  transition: -ms-transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s, transform 0.5s ease 0s !important;
  transform: translateX(${(props) => props.state}%);
`;

const E_Arrows_Background_Left = styled.div`
  top: 33%;
  bottom: auto;
  position: absolute !important;
  display: block !important;
  color: #FFFFFF;
  z-index: 1 !important;
  margin-left: 12px !important;
`;


// height: 20px;
// width: 20px;
// border - radius: 50 %;
// background - color: black;
const E_Arrows_Background_Right = styled.div`
  top: 33%;
  bottom: auto;
  position: absolute !important;
  display: block !important;
  z-index: 1 !important;
  margin-left: 305px !important;
`;

class ElementCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgData: this.props.images,
      translateX: 0,
      hovered: false
    }

    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      hovered: true
    })
  }

  handleMouseLeave() {
    this.setState({
      hovered: false
    })
  }

  previousImage() {
    if (this.state.translateX >= 0) {
      this.setState({
        translateX: (this.state.imgData.length-1) * -100
      })
    } else {
      const newTranslateX = this.state.translateX + 100;
      this.setState({
        translateX: newTranslateX
      })
    }
  }

  nextImage() {
    if (this.state.translateX <= (this.state.imgData.length-1) * -100) {
      this.setState({
        translateX: 0
      })
    } else {
      const newTranslateX = this.state.translateX - 100;
      this.setState({
        translateX: newTranslateX
      })
    }
  }

  render() {
    return (
      <MHYML_EC_E_Wrapper onMouseEnter={()=>{this.handleMouseEnter()}} onMouseLeave={()=>{this.handleMouseLeave()}}>

        {this.state.hovered &&
          <E_Arrows_Background_Left>
            <ElementArrows
              direction="left"
              clickFunction={this.previousImage}
              glyph="&#9664;"
            />
          </E_Arrows_Background_Left>
        }

        <MHYML_Transformer state={this.state.translateX}>
          {this.state.imgData.map(image => <img src={image} alt='houses' key={image} style={{borderRadius: '3px'}}></img>)}
        </MHYML_Transformer>

        {this.state.hovered &&
          <E_Arrows_Background_Right>
            <ElementArrows
              direction="right"
              clickFunction={this.nextImage}
              glyph="&#9654;"
            />
          </E_Arrows_Background_Right>
        }

      </MHYML_EC_E_Wrapper>

    )
  }
}

export default ElementCarousel;