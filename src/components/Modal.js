function Modal(props) {
  return (
    <div className="modal">
      <p> are you sure you want to delete it? </p>
      <button className="btn" onClick={props.onConfirm}>
        {" "}
        Yes{" "}
      </button>
      <button className="btn" onClick={props.onCancel}>
        {" "}
        No{" "}
      </button>
    </div>
  );
}

export default Modal;
