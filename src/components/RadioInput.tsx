import { useState } from "react";
import { Check } from "lucide-react";
interface InputProps {
  label: string;
}
const RadioInput = ({label}:InputProps) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
 setSelected(prev => !prev);
  };

  return (
    <label
      className="w-[370px] h-[42px] flex items-center justify-between px-[22px] py-[8px] rounded-[10px] border border-gray-200 cursor-pointer bg-white group"
      onClick={handleClick}
    >
      {/* Label text */}
      <span className="text-sm font-normal text-[#1F2128]">{label}</span>

      {/* Custom radio button */}
      <div
        className={`
          w-[25px] h-[25px] rounded-[6px] border flex items-center justify-center
          transition-all
          ${selected ? "bg-[#2469F6] border-none hover:bg-[#5087F8]" : "bg-white border border-white group-hover:border-[#BDBDBD] group-hover:bg-[#E5F0FF]"}
          
        `}
      >
        <Check
          size={20}
          className={`text-white transition-opacity ${
            selected ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </label>
  );
};

export default RadioInput;
