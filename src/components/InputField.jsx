import "./InputField.scss";

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="form-input"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="form-error">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
