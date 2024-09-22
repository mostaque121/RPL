'use client'

const Response = () => {
    return (
        <div>
           <div className="bg-light-blue-hover py-6 rounded-md px-3 flex flex-col w-full md:w-96">
                <h1 className="text-center text-lg font-semibold mb-5">Get your free consultants</h1>
                <input className="response-input" type="text" placeholder="Name"></input>
                <input className="response-input" type="email" placeholder="Email"></input>
                <input className="response-input" type="text" placeholder="Phone"></input>
                <input className="response-input" type="text" placeholder="Interested Qualification"></input>
                <textarea className="border-none outline-none resize-none h-20 rounded-md px-3 py-1.5" placeholder="Message"></textarea>
                <button className="block mx-auto bg-gray mt-5 text-lg px-5 py-1 rounded-md hover:scale-95 active:scale-90 duration-200 transition-all ease-in-out">Submit</button>
           </div>
        </div>
    );
};

export default Response;