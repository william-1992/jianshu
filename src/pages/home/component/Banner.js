import React, { PureComponent } from 'react';
import BannerPic from '../../../statics/banner.jpg';
import { BannerWrapper } from '../style';

class Banner extends PureComponent {
  render() {
    return (
      <BannerWrapper>
        <img src={ BannerPic } alt="" />
      </BannerWrapper>
    )
  }
}

export default Banner;