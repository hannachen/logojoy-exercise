import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { color, roundedCorners, centerContent, coverContent, fadeInTransition } from '../utils/constants'

const LogoContianer = glamorous.button({
  ...centerContent,
  backgroundColor: 'rgb(22, 199, 158)',
  width: 538,
  height: 373,
  borderRadius: 8,
  boxShadow: `0 22px 34px ${color(.18).black}`,
  fontSize: 20,
  position: 'relative',
  overflow: 'hidden',
  willChange: 'transform',
  transition: 'transform 250ms',
  translate: 'scale(1)',
  cursor: 'pointer',

  ':before': {
    ...coverContent,
    ...fadeInTransition,
    backgroundColor: color(.6).black,
    zIndex: 10,
  },

  ':after': {
    ...centerContent,
    ...roundedCorners,
    opacity: 0,
    color: color().white,
    content: 'Share',
    height: 60,
    width: 208,
    boxSizing: 'border-box',
    border: `1px solid ${color().white}`,
    backgroundColor: 'rgba(244,246,248,0.1)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 11,
    willChange: 'transform',
    transform: 'scale(1) translateX(-50%) translateY(-50%)',
    transformOrigin: '0 0',
    transition: 'opacity 200ms 0',
  }
})

const logoContainerHover = css({
  transform: 'scale(1.05)',
  ':before': {
    opacity: 1,
  },
  ':after': {
    opacity: 1,
    transform: 'scale(.95) translateX(-50%) translateY(-50%)',
    transition: 'opacity 200ms 150ms',
  }
})

const LogoImage = glamorous.img({
  width: 290,
  height: 'auto'
})

export default class LogoCard extends Component {
  state = {
    hover: false
  }

  onMouseEnter = () => {
    this.setState({ 'hover': true })
  }
  onMouseLeave = () => {
    this.setState({ 'hover': false })
  }
  onClick = (e) => {
    const { onClick = () => {} } = this.props
    onClick.call(this, e)
  }

  render() {
    const { hover } = this.state

    return (
      <LogoContianer
        tabIndex={0}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
        className={hover ? logoContainerHover : ''}
      >
        <LogoImage src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='Logo Thumbnail' />
      </LogoContianer>
    )
  }
}

LogoContianer.propTypes = {
  onClick: PropTypes.func.isRequired,
}