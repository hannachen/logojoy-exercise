import React, { Component } from 'react'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { color, row, circle, roundedCorners, centerContent } from '../utils/constants'
import twitterIcon from '../images/icon-twitter.svg'
import facebookIcon from '../images/icon-facebook.svg'
import linkIcon from '../images/icon-link.svg'
import emailIcon from '../images/icon-email.svg'
import ShareImageList from './ShareImageList'

const imageData = {
  logo: {
    thumb: 'images/logo-thmb@2x.png',
    lg: 'images/logo-lg@2x.png',
  },
  't-shirt': {
    thumb: 'images/t-shirt-thmb@2x.png',
    lg: 'images/shirt-lg@2x.png',
  },
  bc: {
    thumb: 'images/bc-thmb@2x.png',
    lg: 'images/bc-lg@2x.png',
  },
  'social-media': {
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

const ShareIcons = glamorous.div({
  ...row,
  ...centerContent,
  marginBottom: 20,
  [`& p`]: {
    fontSize: 14,
    whiteSpace: 'nowrap',
    paddingRight: 10,
  }
})

const Wrapper = glamorous.div({
  ...row,
  alignItems: 'stretch',
})

const PreviewContainer = glamorous.div({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 2
})

const MessageDiv = glamorous.div({
  ...row,
  padding: 25,
  border: `1px solid ${color().keyline}`,
  ...roundedCorners,
  borderRadiusTopLeft: 0,
  borderRadiusTopRight: 0,
  borderTop: 0,
  flexGrow: 2,
  flexDirection: 'column',
  justifyContent: 'center',
  [`& h3`]: {
    fontSize: 18,
  },
  [`& p, a`]: {
    fontSize: 14,
  },
  [`& a`]: {
    color: color().purple
  }
})

const socialMediaList = css({
  display: 'flex',
  margin: 0,
  padding: 0,
})

const socialIcon = css({
  listStyleType: 'none',
  display: 'block',
  width: 35,
  height: 35,
  cursor: 'pointer',
  ...circle,
  margin: '0 5px',
  [`&.twitter`]: {
    backgroundColor: color().twitter
  },
  [`&.facebook`]: {
    backgroundColor: color().facebook
  },
  [`&.email`]: {
    backgroundColor: color().email
  },
  [`&.link`]: {
    backgroundColor: color().link
  }
})

const imagePreview = css({
  maxWidth: 545,
  maxHeight: 358,
  ...roundedCorners,
  borderRadiusBottomLeft: 0,
  borderRadiusBottomRight: 0,
  flexGrow: 0,
})

export default class SocialShare extends Component {

  state = {
    selectedThumb: null
  }

  constructor(props, context) {
    super(props, context)

    this.state.selectedThumb = Object.keys(imageData)[0] || {}
  }

  onMouseEnterThumb = (context) => {
  }
  onMouseLeaveThumb = (context) => {
  }
  onClickThumb = (context, key) => {
    this.setState({ selectedThumb: key })
  }

  render() {

    return (
      <ShareDiv>
        <ShareIcons>
          <p>Share with:</p>
          <ul className={socialMediaList}>
            <li className={`${socialIcon} twitter`}>
              <img src={twitterIcon} alt='Share on Twitter' />
            </li>
            <li className={`${socialIcon} facebook`}>
              <img src={facebookIcon} alt='Share on Facebook' />
            </li>
            <li className={`${socialIcon} email`}>
              <img src={emailIcon} alt='Share with Email' />
            </li>
            <li className={`${socialIcon} link`}>
              <img src={linkIcon} alt='Share Link' />
            </li>
          </ul>
        </ShareIcons>

        <Wrapper>

          <ShareImageList
            imageData={imageData}
            selected={this.state.selectedThumb}
            onMouseEnter={this.onMouseEnterThumb}
            onMouseLeave={this.onMouseLeaveThumb}
            onClick={this.onClickThumb}
          />

          <PreviewContainer>
            <img src={imageData[this.state.selectedThumb]['lg']} className={imagePreview} alt='Share Preview' />
            <MessageDiv>
              <h3 className='share-title'>
                The #1 Free Logo Maker - Logojoy
              </h3>
              <p>
                His Father was a sheriff in Bucks County and his Mother worked as a secretary in the office of the small
                township where they lived.
              </p>
              <a href='https://www.logojoy.com'>www.logojoy.com</a>
            </MessageDiv>
          </PreviewContainer>

        </Wrapper>
      </ShareDiv>
    )
  }
}
