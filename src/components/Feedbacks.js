import FeedbackItem from "./FeedbackItem";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 40px;
`

const Title = styled.p`
  margin: 0 0 4px 0;
  font-size: 32px;
  line-height: 48px;
  font-weight: 700;
`

export default function Feedbacks() {
  return <Wrapper>
    <Title>網友回饋</Title>
    <FeedbackItem />
    <div>
      <button >展開更多</button>
    </div>
  </Wrapper>
}