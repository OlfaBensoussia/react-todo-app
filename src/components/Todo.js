import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import classes from "./Todo.module.css";
import { Link } from "react-router-dom";

function Todo(props) {
  const [OpenedModal, SetModalOpen] = useState(false);
  const id = props.id;

  function deleteHandler() {
    SetModalOpen(true);
  }
  function closeModalHandler() {
    SetModalOpen(false);
  }

  return (
    <div className="card">
      <div className={classes.item}>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <h6>{props.link}</h6>
          <p>{props.description}</p>
        </div>
        {/* <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div> */}
      </div>

      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          {" "}
          Delete{" "}
        </button>
      </div>
      {OpenedModal ? (
        <Modal
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
        ></Modal>
      ) : null}
      {OpenedModal ? <Backdrop onCancel={closeModalHandler}></Backdrop> : null}

      <Link className="edit-link" to={"/edit/" + id}>
        Edit
      </Link>
      <button size="sm" variant="danger">
        Delete
      </button>
    </div>
  );
}

export default Todo;
