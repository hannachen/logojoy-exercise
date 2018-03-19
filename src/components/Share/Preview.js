import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { color, roundedCorners, row} from '../../utils/constants'

const PreviewContainer = glamorous.div({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 2,
  '@media(max-width: 460px)': {
    width: '100%',
    marginTop: 10,
  },
})

const MessageDiv = glamorous.div({
  ...row,
  padding: 25,
  border: `1px solid ${color().keyline}`,
  ...roundedCorners,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
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

const imagePreview = css({
  maxWidth: 545,
  maxHeight: 358,
  ...roundedCorners,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  flexGrow: 0,
})

export default function Preview({ image, shareTitle, shareMessage}) {

  return (
    <PreviewContainer>
      <img src={image} className={imagePreview} alt='Share Preview' />
      <MessageDiv>
        <h3 className='share-title'>{shareTitle}</h3>
        <p>{shareMessage}</p>
        <a href='https://www.logojoy.com'>www.logojoy.com</a>
      </MessageDiv>
    </PreviewContainer>
  )
}

Preview.propTypes = {
  image: PropTypes.string.isRequired,
  shareTitle: PropTypes.string.isRequired,
  shareMessage: PropTypes.string.isRequired,
}