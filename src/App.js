import React, { Component } from 'react'
import Modal from 'react-modal'
import { css } from 'glamor'
import glamorous from 'glamorous'
import {color, row, coverContent, roundedCorners } from './utils/constants'
import LogoCard from './components/LogoCard'
import SocialShare from './components/SocialShare'
import closeImage from './images/close@2x.png'

const AppDiv = glamorous.div({
  ...row,
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
})

const CloseButton = glamorous.button({
  width: 16,
  height: 16,
  padding: 0,
  border: 0,
  position: 'absolute',
  top: 20,
  right: 20,
  cursor: 'pointer',
})

const modalStyles = css({
  ...roundedCorners,
  width: '75%',
  maxWidth: 790,
  maxHeight: 660,
  margin: '25px auto',
  backgroundColor: color().white,
  position: 'relative',
  opacity: 0,
  willChange: 'translate opacity',
  transition: 'all 500ms ease-in-out',
  transform: 'translateY(-30px)',
  '@media(max-width: 800px)': {
    width: '100%',
    margin: 0,
  },
  [`&.after-open`]: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  [`&.before-close`]: {
    opacity: 0,
    transform: 'translateY(-30px)',
  },
})

const overlayStyles = css({
  ...coverContent,
  minHeight: 740,
  backgroundColor: color(.6).black,
  '@media(max-width: 800px)': {
    padding: 25,
  },
  '@media(max-width: 460px)': {
    padding: 10,
  },
})

class App extends Component {
  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({ modalIsOpen: true })
  }
  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }
  afterOpenModal = () => {
  }

  render() {
    const appElement = document.getElementById('root')

    return (
      <AppDiv>
        <LogoCard onClick={this.openModal} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          appElement={appElement}
          className={{
            base: modalStyles,
            afterOpen: `after-open`
          }}
          overlayClassName={{
            base: overlayStyles,
            afterOpen: `after-open`
          }}
        >
          <CloseButton onClick={this.closeModal}>
            <img src={closeImage} alt='Close' />
          </CloseButton>
          <SocialShare />
        </Modal>
      </AppDiv>
    )
  }
}

export default App
