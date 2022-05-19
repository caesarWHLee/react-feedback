import classes from './TextField.module.css'

export default function TextField(props) {
  return <div className={classes.wrapper}>
    <textarea className={classes.textarea} placeholder="跟大家分享你的經驗..." name="feedback-post" />
  </div>
}