import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import MainCarousel from './mainCarousel.jsx';
import getPictureData from './helpers';

// styling:

const MHYML_Wrapper = styled.div`
  text-align: center;
  width: 1032px;
  display: inline-block;
`;

const MHYML_Section = styled.section`
  display: inline-block;
  box-sizing: border-box;
  width: 1032px;
  height: 362.66px;
`;

const MHYML_Title = styled.h2`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  margin-bottom: 24px;
  margin-top: 0px;
  text-align: left;
`;

// react:

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.getRoomsData = this.getRoomsData.bind(this);
  }

  componentDidMount() {
    this.getRoomsData();
  }

  getRoomsData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    Axios.get(`/properties/${id}/similarHomes`)
      .then((results) => {
        const { data } = results;
        getPictureData(data, (pictureData) => {
          this.setState({
            data: pictureData,
          });
        });
      })
      .catch((err) => { console.error(err); });
  }

  render() {
    if (this.state.data.length === 0) {
      return (
        <div className="loading_div">Loading data, please wait.</div>
      );
    }
    return (
      <MHYML_Wrapper>
        <MHYML_Section>
          <MHYML_Title className="componentTitle">More homes you may like</MHYML_Title>
          <MainCarousel data={this.state.data} />
        </MHYML_Section>
      </MHYML_Wrapper>
    );
  }
}


export default App;
