'use client'

const QualificationResponseForm = ({title}) => {
    return (
        <div>
<div className="bg-light-blue-active py-10 rounded-md px-5 w-full md:w-96 shadow-lg">
  <h1 className="text-xl font-bold text-gray-800 text-center mb-3 leading-tight">
    Interested in a Certificate III in Mobile Plant Technology?
  </h1>
  <h1 className="text-center text-lg font-semibold tex-gray-800 mb-5">
    Get your free consultation today!
  </h1>
  <form>
    <input className="response-input" type="text" placeholder="Name" />
    <input className="response-input " type="email" placeholder="Email" />
    <input className="response-input" type="text" placeholder="Phone" />
    <textarea className="border-none outline-none resize-none h-20 rounded-md px-3 py-1.5 w-full" placeholder="Message"></textarea>
    <button className="block mx-auto bg-dark-gray text-white mt-6 text-lg px-5 py-1 rounded-md hover:scale-95 active:scale-90 duration-200 transition-all ease-in-out">
      Submit
    </button>
  </form>
</div>

        </div>
    );
};

export default QualificationResponseForm;