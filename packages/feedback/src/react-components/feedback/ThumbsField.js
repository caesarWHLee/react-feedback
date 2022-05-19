import React, { useEffect, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'

import ThumbUpSvg from './icon-thumb-up.svg'
import ThumbUpActiveSvg from './icon-thumb-up-active.svg'
import ThumbDownSvg from './icon-thumb-down.svg'
import ThumbDownActiveSvg from './icon-thumb-down-active.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin: 0;
`

const Thumbs = styled.div`
  margin-top: 20px;
  display: flex;
`

const Thumb = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    margin-left: 40px;
  }
`

// able to uncheck radio button
const ThumbMockLabel = styled.div`
  position: relative;
  padding-top: 60px;
  font-size: 18px;
  line-height: 27px;
`

const ThumbIconWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: calc((100% - 56px) /2);
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  cursor: pointer;

  &:hover, &:active {
    border-color: #000928;
  }
  &:active {
    background-color: #edeff2;
  }
`

const Input = styled.input`
  display: none;

  &:checked ~ ${ThumbIconWrapper} {
    border-color: #04295e;
  }
`

const ThumbStatistic = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 9, 40, 30%);
`




export default function ThumbsField(props) {
  const [thumbUpChecked, setThumbUpChecked] = useState(false)
  const [thumbDownChecked, setThumbDownChecked] = useState(false)
  const [thumbUpPressing, setThumbUpPressing] = useState(false)
  const [thumbDownPressing, setThumbDownPressing] = useState(false)
  const timerRef = useRef(null)
  const initialMounted = useRef(true)

  const clearTimer = useCallback(() => {
    clearTimeout(timerRef.current)
    timerRef.current = null;
  }, [])

  useEffect(() => {

    if (initialMounted.current) {
      initialMounted.current = !initialMounted.current
      return
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      let thumbValue = null
      if (thumbUpChecked) {
        thumbValue = true
      }
      if (thumbDownChecked) {
        thumbValue = false
      }
      console.log('start sending request!', thumbValue)
      timerRef.current = null;
    }, 1000)

    return () => {
      // clearTimer()
    }
  }, [thumbUpChecked, thumbDownChecked, clearTimer])

  const thumbUpRadioClicked = () => {
    setThumbUpPressing(false)
    setThumbUpChecked((thumbUpChecked) => {
      if (thumbUpChecked) {
        return false
      } else {
        setThumbDownChecked(false)
        return true
      }
    })
  }
  const thumbDownRadioClicked = () => {
    setThumbDownPressing(false)
    setThumbDownChecked((thumbDownChecked) => {
      if (thumbDownChecked) {
        return false
      } else {
        setThumbUpChecked(false)
        return true
      }
    })
  }

  return <Wrapper>
    <Title>這個結果符合實際情況嗎?</Title>
    <Thumbs>
      <Thumb>
        <ThumbMockLabel onMouseDown={() => { setThumbUpPressing(true) }} onMouseUp={thumbUpRadioClicked}>符合
          <Input type="radio" name="thumbs" onChange={() => { }} checked={thumbUpChecked} />
          <ThumbIconWrapper>
            {thumbUpPressing || thumbUpChecked ? <ThumbUpActiveSvg /> : <ThumbUpSvg />}
          </ThumbIconWrapper>
        </ThumbMockLabel>
        <ThumbStatistic>128</ThumbStatistic>
      </Thumb>
      <Thumb>
        <ThumbMockLabel onMouseDown={() => { setThumbDownPressing(true) }} onMouseUp={thumbDownRadioClicked}>不符合
          <Input type="radio" name="thumbs" onChange={() => { }} checked={thumbDownChecked} />
          <ThumbIconWrapper>
            {thumbDownPressing || thumbDownChecked ? <ThumbDownActiveSvg /> : <ThumbDownSvg />}
          </ThumbIconWrapper>
        </ThumbMockLabel>
        <ThumbStatistic>9</ThumbStatistic>
      </Thumb>
    </Thumbs>
  </Wrapper>
}