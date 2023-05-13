import {useState} from 'react'

import {MainContainer, Image, Para, Div, Button} from './styledComponents'

const lockImage = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const unlockImage = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [isLock, setToggleLock] = useState(true)

  const onToggleClick = () => {
    setToggleLock(prevState => !prevState)
  }

  const displayImage = isLock ? lockImage : unlockImage
  const altText = isLock ? 'lock' : 'unlock'
  const text = isLock ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const buttonText = isLock ? 'Unlock' : 'Lock'

  return (
    <MainContainer>
      <Div>
        <Image src={displayImage} alt={altText} />
        <Para>{text}</Para>
        <Div>
          <Button onClick={onToggleClick} type="button">
            {buttonText}
          </Button>
        </Div>
      </Div>
    </MainContainer>
  )
}

export default Unlock
