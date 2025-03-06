interface ButtonProps {
  buttonEnabled: boolean;
  buttonText: string;
  buttonType: string;
  onClick: () => void;
}

const Button = ({
  buttonEnabled,
  buttonText,
  buttonType,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={"btn btn-" + buttonType}
      onClick={() => {
        onClick();
      }}
      disabled={!buttonEnabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
