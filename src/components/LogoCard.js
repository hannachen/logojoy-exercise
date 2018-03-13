import React, { Component } from 'react'
import { css } from 'glamor'
import glamorous from 'glamorous'
import LogoImg from '../images/logo.png'

const centerContent = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const LogoContianer = glamorous.div({
  ...centerContent,
  backgroundColor: 'rgb(22, 199, 158)',
  width: 538,
  height: 373,
  borderRadius: 8,
  boxShadow: '0 22px 34px rgba(0, 0, 0, 0.18)',
  fontSize: 20,
  position: 'relative',
  overflow: 'hidden',
  willChange: 'transform',
  transition: 'transform 250ms',
  translate: 'scale(1)',
  cursor: 'pointer',
  ':before': {
    content: ' ',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    willChange: 'background-color',
    transition: 'background-color 250ms',
  },
  ':after': {
    ...centerContent,
    opacity: 0,
    color: 'rgb(255, 255, 255)',
    content: 'Share',
    height: 60,
    width: 208,
    boxSizing: 'border-box',
    borderRadius: 4,
    backgroundColor: 'rgba(244,246,248,0.1)',
    border: '1px solid rgb(255, 255, 255)',
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
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  ':after': {
    opacity: 1,
    transform: 'scale(.95) translateX(-50%) translateY(-50%)',
    transition: 'opacity 200ms 200ms',
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
    // Open share modal
  }

  render() {

    const { hover } = this.state

    return (
      <LogoContianer
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
        className={hover ? logoContainerHover : ''}
      >
        <LogoImage src={LogoImg} />
      </LogoContianer>
    )
  }

}