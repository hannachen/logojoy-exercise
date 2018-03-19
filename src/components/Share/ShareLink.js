import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { color, roundedCorners } from '../../utils/constants'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import linkIcon from '../../images/icon-link.svg'

const LinkContainer = glamorous.div({
  position: 'relative',
})
const Message = glamorous.div({
  fontSize: 14,
  position: 'absolute',
  bottom: 0,
  left: '50%',
  paddingTop: -15,
  transform: 'translateX(-50%) translateY(100%)',
  opacity: 0,
  transition: 'padding 75ms ease-in, opacity 75ms ease-in',
  [`& em`]: {
    color: color().link,
    fontStyle: 'normal',
    fontWeight: 500,
    display: 'block',
  },
  [`& .contents`]: {
    position: 'relative',
    backgroundColor: color().white,
    border: `1px solid ${color().keyline}`,
    padding: '10px 14px',
    ...roundedCorners,
    [`&:before, &:after`]: {
      bottom: '100%',
      left: '50%',
      border: 'solid transparent',
      content: ' ',
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
    },
    ':before': {
      borderColor: color(0).keyline,
      borderBottomColor: color().keyline,
      borderWidth: 11,
      marginLeft: -11,
    },
    ':after': {
      borderColor: color(0).white,
      borderBottomColor: color().white,
      borderWidth: 10,
      marginLeft: -10,
    },
  }
})

const copiedStyles = css({
  paddingTop: 15,
  opacity: 1
})

export default class ShareLink extends Component {
  state = {
    copied: false,
  }
  onCopy = () => {
    this.setState({ copied: true })
  }

  render() {
    const { shareUrl } = this.props

    return (
      <LinkContainer>
        <CopyToClipboard
          onCopy={this.onCopy}
          text={shareUrl}>
          <img src={linkIcon} alt='Share Link' />
        </CopyToClipboard>
        <Message className={this.state.copied ? copiedStyles : ''}>
          <div className='contents'>
            <em>Copied to clipboard!</em>
            {shareUrl}
          </div>
        </Message>
      </LinkContainer>
    )
  }
}

ShareLink.propTypes = {
  shareUrl: PropTypes.string.isRequired,
}