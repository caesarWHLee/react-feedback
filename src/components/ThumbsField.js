import { useState } from 'react'
import classes from './ThumbsField.module.css'

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

  return <div className={classes.wrapper}>
    <p className={classes.title}>這個結果符合實際情況嗎?</p>
    <div className={classes.thumbs}>
      <div className={classes.thumb}>
        <label className={classes['thumb-label']}>符合
          <input type="radio" name="thumbs" onChange={thumbUpInputChanged} />
          <div className={classes['thumb-icon-wrapper']}>
            <img src={`images/${thumbUpChecked ? 'icon-thumb-up-active.svg' : 'icon-thumb-up.svg'}`} alt="thumb up icon" />
          </div>
        </label>
        <span className={classes['thumb-statistic']}>128</span>
      </div>
      <div className={classes.thumb}>
        <label className={classes['thumb-label']}>不符合
          <input type="radio" name="thumbs" onChange={thumbDownInputChanged} />
          <div className={classes['thumb-icon-wrapper']}>
            <img src={`images/${thumbDownChecked ? 'icon-thumb-down-active.svg' : 'icon-thumb-down.svg'}`} alt="thumb up icon" />
          </div>
        </label>
        <span className={classes['thumb-statistic']}>9</span>
      </div>
    </div>

  </div>
}