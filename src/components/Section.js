import classes from './Section.module.css'

export default function FormWrapper(props) {
  return <div className={classes.section}>{props.children}</div>
}