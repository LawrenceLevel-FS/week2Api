const InputStacked = ({
  type,
  title,
  InputStyle,
  labelStyle,
  inputHandler,
  name,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className={labelStyle}>
        {title}
      </label>
      <input
        id={name}
        name={name}
        onChange={inputHandler}
        className={InputStyle}
        type={type}
      />
    </div>
  );
};

export default InputStacked;
