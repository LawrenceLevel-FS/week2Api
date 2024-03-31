const Button = ({ name, type, style, onClickHandler }) => {
  return (
    <button className={style} type={type} onClick={onClickHandler}>
      {name}
    </button>
  );
};

export default Button;
