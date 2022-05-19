import React from 'react'
import styled from "styled-components";

import FeedbackItem from "./FeedbackItem";

const Wrapper = styled.div`
  margin-top: 40px;
`

const Title = styled.p`
  margin: 0 0 4px 0;
  font-size: 32px;
  line-height: 48px;
  font-weight: 700;
`

const ButtonWrapper = styled.div`
  margin-top: 24px;
  text-align: center;
`

const Button = styled.button`
  margin-top: 12px;
  width: 280px;
  background-color: none;
  color: #04295e;
  border: 1px solid #04295e;
  border-radius: 6px;
  padding: 12px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 18px;
  line-height: 27px;

  &:hover, &:active {
    background-color: #edeff2;
  }
`

export default function Feedbacks() {
  return <Wrapper>
    <Title>網友回饋</Title>
    <FeedbackItem />
    <ButtonWrapper>
      <Button >展開更多</Button>
    </ButtonWrapper>
  </Wrapper>
}