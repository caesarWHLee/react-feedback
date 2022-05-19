import React, { useState } from 'react'
import styled from 'styled-components'

import FeedbackSvg from './icon-feedback.svg'
import FeedbackStrongSvg from './icon-feedback-strong.svg'


const MobileSVGWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    display: none;
  }
`

const PCSVGWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1199px) {
    display: none;
  }
`

const Wrapper = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 6px;
  padding: 16px 24px;
  font: inherit;
  outline: inherit;
  width: 100%;
  text-align: left;
  cursor: pointer;
  // cursor: ${({ contentExpand }) => contentExpand ? 'auto' : 'pointer'};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Date = styled.span`
  font-size: 14px;
  line-height: 21px;
  color: rgba(0, 9, 40, 30%)
`

const Content = styled.div`
  white-space: pre-line;
  color: rgba(0, 9, 40, 87%);
  font-size: 18px;
  line-height: 36px;
  overflow: hidden;
  height: ${({ contentExpand }) => contentExpand ? 'unset' : '216px'};
`

const Hint = styled.div`
  color: rgba(0, 9, 40, 30%);
  font-size: 18px;
  line-height: 36px;
`

export default function FeedbackItem() {
  const [contentExpand, setContentExpand] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isPressing, setIsPressing] = useState(false)

  const feedbackClicked = (e) => {
    console.log('end of pressing')
    setIsPressing(false)
    e.target.blur()
    setContentExpand((contentExpand) => !contentExpand)
  }

  let PCSVG
  if (isHovering) {
    PCSVG = <FeedbackSvg />
  }
  if (isPressing) {
    PCSVG = <FeedbackStrongSvg />
  }

  return <Wrapper contentExpand={contentExpand} onMouseOver={() => (setIsHovering(true))} onMouseOut={() => (setIsHovering(false))} onMouseDown={() => { console.log('pressing'); setIsPressing(true) }} onMouseUp={feedbackClicked}>
    <Header>
      <Date>2022/5/19 15:29</Date>
      <MobileSVGWrapper>
        {isHovering || isPressing ? < FeedbackStrongSvg /> : <FeedbackSvg />}
      </MobileSVGWrapper>
      <PCSVGWrapper>
        {isPressing ? <FeedbackStrongSvg /> : (isHovering ? <FeedbackSvg /> : null)}
      </PCSVGWrapper>
    </Header>
    <Content contentExpand={contentExpand} >{'我在今晚剛剛18:52分收到居家隔離通知書了\n教學一下 看有沒有用  沒用別嘴我😂\n用健保快易通 自主回報系統上網填寫\n\n填完以後 去你的健保快易通 的健康櫃檯\n把常用詞彙跟行動裝置設定\n把完整資料都填寫完 \n結果不到10分鐘簡訊就寄過來了\n我不曉得是剛剛好巧合還是怎麼樣\n\n我在隔離第二天有上網回報 但健康櫃檯資料都沒填寫 \n於是剛剛無聊滑一滑看填完整會不會快一些\n結果真的填完10分鐘簡訊就寄過來了\n希望有幫助 但也有可能是巧合！'}</Content>
    {!contentExpand && <Hint>展開全部</Hint>}
  </Wrapper >
}