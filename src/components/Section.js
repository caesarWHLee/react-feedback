import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 600px;
`

export default function Section(props) {
  return <Wrapper>{props.children}</Wrapper>
}