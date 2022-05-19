import classes from './FeedbackForm.module.css'

export default function FeedbackForm(props) {
  const submitHandler = (e) => {
    const form = e.target;
  }
  return <form className={classes.form} onSubmit={submitHandler}>
    {props.children}
    <div className={classes.action}>
      <button className={classes.button}>送出</button>
    </div>
  </form>
}