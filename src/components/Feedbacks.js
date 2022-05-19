import FeedbackItem from "./FeedbackItem";
import classes from './Feedbacks.module.css'

export default function Feedbacks() {
  return <div className={classes.wrapper}>
    <p className={classes.title}>網友回饋</p>
    <FeedbackItem />
    <div>
      <button >展開更多</button>
    </div>
  </div>
}