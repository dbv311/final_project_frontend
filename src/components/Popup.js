import "./Popup.css";

function Popup({ open, handleClose, children }) {
  return (
    <div className={`popup ${open ? "popup_open" : ""}`}>
      <div className="popup__overlay"></div>
      <div className="popup__content">
        <button
          type="button"
          onClick={handleClose}
          className="popup__close-icon"
        ></button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
