import { useState } from 'react'
import classes from './FeedbackItem.module.css'

export default function FeedbackItem() {
  const [contentExpand, setContentExpand] = useState(false)

  const feedbackClicked = (e) => {
    setContentExpand(true)
  }

  return <button className={`${classes.wrapper} ${contentExpand ? classes.expand : classes.normal}`} onClick={feedbackClicked}>
    <div className={classes.header}>
      <span className={classes.date}>2022/5/19 15:29</span>
      <img src="images/icon-feedback.svg" alt="read more hint" />
    </div>
    <div className={`${classes.content} ${contentExpand ? classes.expand : ''}`}>{'我在今晚剛剛18:52分收到居家隔離通知書了\n教學一下 看有沒有用  沒用別嘴我😂\n用健保快易通 自主回報系統上網填寫\n\n填完以後 去你的健保快易通 的健康櫃檯\n把常用詞彙跟行動裝置設定\n把完整資料都填寫完 \n結果不到10分鐘簡訊就寄過來了\n我不曉得是剛剛好巧合還是怎麼樣\n\n我在隔離第二天有上網回報 但健康櫃檯資料都沒填寫 \n於是剛剛無聊滑一滑看填完整會不會快一些\n結果真的填完10分鐘簡訊就寄過來了\n希望有幫助 但也有可能是巧合！'}</div>
    {!contentExpand && <div className={classes.hint}>展開全部</div>}
  </button >
}