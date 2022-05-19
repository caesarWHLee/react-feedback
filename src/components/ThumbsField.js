import { useState } from 'react'
import styled from 'styled-components'

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

const ThumbLabel = styled.label`
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

  const thumbUpInputChanged = (e) => {
    console.log('thumbUpInputChanged', e.target.checked)
    setThumbUpChecked(e.target.checked)
    setThumbDownChecked(!e.target.checked)
  }
  const thumbDownInputChanged = (e) => {
    console.log('thumbDownInputChanged', e.target.checked)
    setThumbDownChecked(e.target.checked)
    setThumbUpChecked(!e.target.checked)
  }

  return <Wrapper>
    <Title>這個結果符合實際情況嗎?</Title>
    <Thumbs>
      <Thumb>
        <ThumbLabel>符合
          <Input type="radio" name="thumbs" onChange={thumbUpInputChanged} />
          <ThumbIconWrapper>
            <img src={`images/${thumbUpChecked ? 'icon-thumb-up-active.svg' : 'icon-thumb-up.svg'}`} alt="thumb up icon" />
          </ThumbIconWrapper>
        </ThumbLabel>
        <ThumbStatistic>128</ThumbStatistic>
      </Thumb>
      <Thumb>
        <ThumbLabel>不符合
          <Input type="radio" name="thumbs" onChange={thumbDownInputChanged} />
          <ThumbIconWrapper>
            <img src={`images/${thumbDownChecked ? 'icon-thumb-down-active.svg' : 'icon-thumb-down.svg'}`} alt="thumb up icon" />
          </ThumbIconWrapper>
        </ThumbLabel>
        <ThumbStatistic>9</ThumbStatistic>
      </Thumb>
    </Thumbs>
  </Wrapper>
}