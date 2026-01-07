interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button
      className="
        cursor-pointer
        w-[340px] 
        h-[40px] 
        rounded-[4px] 
        px-[20px] 
        py-[10px] 
        flex items-center justify-center 

        bg-[#FFCE22]
        text-[#1F2128]
        hover:bg-[#FFD84D]
        transition-all
      "
    >
      {text}
    </button>
  );
};

export default Button;
