const TextFieldGroup = ({ label, type, placeholder, info }) => (
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">{label}</label>
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
    />
    <small id="emailHelp" className="form-text text-muted">
      {info}
    </small>
  </div>
);

export default TextFieldGroup