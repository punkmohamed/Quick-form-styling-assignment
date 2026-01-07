import Button from "../components/Button"
import RadioInput from "../components/RadioInput"

const options = Array.from({ length: 3 }, (_, i) => i);
const Home = () => {
    return (
        <div className="flex justify-center h-screen items-center">
            <form className="flex flex-col justify-between  items-center w-[370px] h-[326px] shadow-[0_8px_15px_0_#1414141F,0_0px_4px_0_#1414141A] gap-4 p-5  rounded-[6px]  py-[10px] ">

                <RadioInput label="All pages" />

                <div className="flex flex-col gap-3">
                    {options.map((index) => (
                        <RadioInput key={index} label={`Page ${index + 1}`} />
                    ))}

                </div>

                <Button text="Done" />
            </form>
        </div>

    )
}

export default Home