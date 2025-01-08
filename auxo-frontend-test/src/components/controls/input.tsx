interface TextInputProps {
    placeholder: string,
    icon?: React.ReactNode
}

const TextInput = ({ placeholder, icon }: TextInputProps) => {
    return (
        <div className="relative mb-6 h-fit">
            {
                icon &&
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    {icon}
                </div>
            }
            <input type="text" id="input-group-1" className="bg-[#F2F2F2] text-[#666873] text-sm rounded-lg shadow-none focus:outline-none block w-full ps-10 p-2.5" placeholder={placeholder} />
        </div>
    );
}

export default TextInput;