'use client'
const TextInput = ({error,onChange,placeholder,value}) => {
    return (
        <div className="flex mb-4 w-full flex-col">
            <p>{placeholder }: </p>
            <input type='text' value={value} onChange={(e) => onChange(e.target.value)} className="bg-white h-9 rounded-sm px-2 border-none outline-none focus:outline-none focus:border-none" ></input>
            {error &&
             <p>{error}</p>
            }
        </div>
    );
};

export default TextInput;