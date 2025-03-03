interface ButtonProps {
  buttonText: string;
  buttonType: string;
  onClick: () => void;
}

const Button = ({ buttonText, buttonType, onClick }: ButtonProps) => {
  return (
    <button
      className={"btn btn-" + buttonType}
      onClick={() => {
        onClick();
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
