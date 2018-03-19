import React, { Component } from 'react'
import glamorous from 'glamorous'
import { row, centerContent } from '../utils/constants'
import IconList from './Share/IconList'
import ImageList from './Share/ImageList'
import Preview from './Share/Preview'

const shareUrl = 'http://fpo.website/logojoy/'
const shareTitle = 'The #1 Free Logo Maker - Logojoy'
const shareMessage = 'His Father was a sheriff in Bucks County and his Mother worked as a secretary in the office of the small township where they lived.'

const imageData = {
  logo: {
    id: '', // ID of entry used to share different images
    thumb: 'images/logo-thmb@2x.png',
    lg: 'images/logo-lg@2x.png',
  },
  't-shirt': {
    id: '',
    thumb: 'images/t-shirt-thmb@2x.png',
    lg: 'images/shirt-lg@2x.png',
  },
  bc: {
    id: '',
    thumb: 'images/bc-thmb@2x.png',
    lg: 'images/bc-lg@2x.png',
  },
  'social-media': {
    id: '',
    thumb: 'images/social-media@2x.png',
    lg: 'images/sm-lg@2x.png',
  }
}

const ShareDiv = glamorous.div({
  ...centerContent,
  flexWrap: 'wrap',
  padding: '30px 55px 40px',
  '@media(max-width: 800px)': {
    padding: '25px 35px 30px',
  },
})

const Wrapper = glamorous.div({
  ...row,
  alignItems: 'stretch',
})

export default class SocialShare extends Component {
  state = {
    selectedThumb: null,
    hoverThumb: null
  }

  constructor(props, context) {
    super(props, context)
    this.state.selectedThumb = Object.keys(imageData)[0] || {}
  }

  onClickThumb = (context, key) => {
    this.setState({ selectedThumb: key })
  }

  render() {

    return (
      <ShareDiv>

        <IconList
          shareUrl={shareUrl}
          shareTitle={shareTitle}
          shareMessage={shareMessage}
        />

        <Wrapper>

          <ImageList
            imageData={imageData}
            selected={this.state.selectedThumb}
            onClick={this.onClickThumb}
          />

          <Preview
            image={imageData[this.state.selectedThumb]['lg']}
            shareTitle={shareTitle}
            shareMessage={shareMessage} />

        </Wrapper>
      </ShareDiv>
    )
  }
}
