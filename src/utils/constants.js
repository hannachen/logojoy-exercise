export const color = (opacity = 1) => {
  return {
    purple: '#4F6DF5',
    white: `rgba(255, 255, 255, ${opacity})`,
    black: `rgba(0, 0, 0, ${opacity})`,
    twitter: '#25A0DC',
    facebook: '#3F5CA0',
    email: '#090B17',
    link: '#EB066D',
    keyline: `rgba(212, 219, 232, ${opacity})`,
  }
}

export const borderRadius = 4

export const row = {
  width: '100%',
  display: 'flex',
}

export const centerContent = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const coverContent = {
  content: ' ',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

export const roundedCorners = {
  borderRadius: borderRadius,
}

export const circle = {
  borderRadius: '50%',
}

export const fadeInTransition = {
  opacity: 0,
  willChange: 'opacity',
  transition: 'opacity 300ms',
}