import { useRef } from "react";

// import Card from '../ui/Card';
import classes from "./AddTodoForm.module.css";

function AddTodoForm(props) {
  const titleInputRef = useRef();
  const linkInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const taskData = {
      title: titleInputRef.current.value,
      link: linkInputRef.current.value,
      description: descriptionInputRef.current.value,
    };
    console.log(taskData);

    props.onAddMeetup(taskData);
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Task Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="link">Link</label>
          <input type="text" required id="link" ref={linkInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Task</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodoForm;
