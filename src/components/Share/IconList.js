import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share'
import ShareLink from './ShareLink'
import { centerContent, circle, color, row } from '../../utils/constants'
import twitterIcon from '../../images/icon-twitter.svg'
import facebookIcon from '../../images/icon-facebook.svg'
import emailIcon from '../../images/icon-email.svg'

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

const socialIcon = css({
  listStyleType: 'none',
  display: 'block',
  width: 35,
  height: 35,
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
  },
  [`& img`]: {
    cursor: 'pointer',
  }
})

const socialMediaList = css({
  display: 'flex',
  margin: 0,
  padding: 0,
})

export default function IconList({ shareUrl, shareTitle, shareMessage}) {

  return (
    <ShareIcons>
      <p>Share with:</p>
      <ul className={socialMediaList}>
        <li className={`${socialIcon} twitter`}>
          <TwitterShareButton url={shareUrl} title={shareTitle} hashtags={['logojoy']}>
            <img src={twitterIcon} alt='Share on Twitter' />
          </TwitterShareButton>
        </li>
        <li className={`${socialIcon} facebook`}>
          <FacebookShareButton url={shareUrl}>
            <img src={facebookIcon} alt='Share on Facebook' />
          </FacebookShareButton>
        </li>
        <li className={`${socialIcon} email`}>
          <EmailShareButton url={shareUrl} subject={shareTitle} body={shareMessage + '\n\n' + shareUrl}>
            <img src={emailIcon} alt='Share with Email' />
          </EmailShareButton>
        </li>
        <li className={`${socialIcon} link`}>
          <ShareLink shareUrl={shareUrl} />
        </li>
      </ul>
    </ShareIcons>
  )
}

IconList.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  shareTitle: PropTypes.string.isRequired,
  shareMessage: PropTypes.string.isRequired,
}