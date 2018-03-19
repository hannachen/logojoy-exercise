import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { color, coverContent, fadeInTransition, roundedCorners } from '../../utils/constants'
import CheckIcon from '../../images/check@3x.png'

const ThumbList = glamorous.ul({
  width: '20%',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media(max-width: 460px)': {
    width: '100%',
    flexDirection: 'row',
  },
})

const ThumbItem = glamorous.li({
  display: 'block',
  margin: '0 16px 16px 0',
  padding: 0,
  listStyleType: 'none',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  ...roundedCorners,
  '@media(max-width: 460px)': {
    margin: 0,
    width: '23%',
  },

  ':last-child': {
    marginBottom: 0,

    '@media(max-width: 460px)': {
      marginRight: 0,
      marginBottom: 'auto',
    },
  },
  ':hover': {
    opacity: .8,
  },
  [`&:before, &:after`]: {
    ...coverContent,
    ...fadeInTransition,
  },
  ':before': {
    zIndex: 9,
    backgroundColor: color(.6).black,
    ...roundedCorners,
  },
  ':after': {
    zIndex: 10,
    backgroundSize: 37,
    backgroundImage: `url(${CheckIcon})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    '@media(max-width: 800px)': {
      backgroundSize: 25,
    },
  },
})

const selectedStyle = css({
  [`&:before, &:after`]: {
    opacity: 1,
  },
})

export default function ImageList(props) {
  const { imageData,
          selected = null,
          onClick = () => {}
        } = props

  return (
    <ThumbList>
      {imageData && Object.keys(imageData).map((key, index) => (
        <ThumbItem
          key={index}
          className={selected === key ? selectedStyle : ''}
          onClick={e => onClick(e, key)}
        >
          <img src={imageData[key]['thumb']} alt='Share Preview' />
        </ThumbItem>
      ))}
    </ThumbList>
  )
}

ImageList.propTypes = {
  imageData: PropTypes.object.isRequired,
  selected: PropTypes.string,
  onClick: PropTypes.func,
}