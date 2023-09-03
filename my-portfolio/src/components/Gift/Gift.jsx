import "./Gift.css";

export const Gift = ({ onClose }) => {

  return (
    <div className="gift-overlay">
      <button type="button" onClick={onClose} className="close-button">
        Close
      </button>
    </div>
  );
};
