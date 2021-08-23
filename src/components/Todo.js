import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import classes from "./Todo.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Todo(props) {
  const [OpenedModal, SetModalOpen] = useState(false);
  const id = props.id;
  const history = useHistory();

  function openModalHandler() {
    SetModalOpen(true);
  }
  function closeModalHandler() {
    SetModalOpen(false);
  }

  function deleteHandler() {
    closeModalHandler();
    axios.delete("http://localhost:3800/candidates/" + id).then(() => {
      history.replace("/");
    });
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
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
          <button className="btn" onClick={openModalHandler}>
            {" "}
            Delete{" "}
          </button>

          {OpenedModal ? (
            <Modal
              onCancel={closeModalHandler}
              onConfirm={deleteHandler}
            ></Modal>
          ) : null}
          {OpenedModal ? (
            <Backdrop onCancel={closeModalHandler}></Backdrop>
          ) : null}
          <button className="btn" style={{ float: "left" }}>
            <Link className="edit-link" to={"/edit/" + id}>
              Edit
            </Link>
          </button>
        </div>
        {/* <button size="sm" variant="danger">
        Delete
      </button> */}
      </div>
    </div>
  );
}

export default Todo;
