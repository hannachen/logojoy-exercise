import React from 'react'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { color, coverContent, fadeInTransition, roundedCorners } from '../utils/constants'
import CheckIcon from '../images/check@3x.png'

const ThumbList = glamorous.ul({
  width: '20%',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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

  ':last-child': {
    marginBottom: 0
  },
  [`&:before, &:after`]: {
    ...coverContent,
    ...fadeInTransition,
  },
  ':before': {
    zIndex: 9,
    backgroundColor: color(.6).black,
  },
  ':after': {
    zIndex: 10,
    backgroundSize: 37,
    backgroundImage: `url(${CheckIcon})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }
})

const selectedStyle = css({
  [`&:before, &:after`]: {
    opacity: 1,
  },
})

export default function ShareImageList ({ imageData = {}, selected = null, onMouseEnter = () => {}, onMouseLeave = () => {}, onClick = () => {} }) {

  return (
    <ThumbList>
      {imageData && Object.keys(imageData).map((key, index) => (
        <ThumbItem
          key={index}
          className={selected === key ? selectedStyle : ''}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={e => onClick(e, key)}
        >
          <img src={imageData[key]['thumb']} />
        </ThumbItem>
      ))}
    </ThumbList>
  )
}
