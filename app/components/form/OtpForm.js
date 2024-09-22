'use client'

export default function OtpForm({otp,setOtp,handleOtpSubmit}) {

  // Handle OTP input change
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let otpArray = [...otp];
    otpArray[index] = element.value;
    setOtp(otpArray);

    // Focus next input automatically when a digit is entered
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  // Handle pasting OTP
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    if (paste.length === otp.length && !isNaN(paste)) {
      setOtp(paste.split(""));
      document.querySelectorAll('input')[otp.length - 1].focus(); // Focus on the last input after pasting
    }
  };


  return (
    <form onSubmit={handleOtpSubmit} className="space-y-4">
      <div>
        <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
          Enter OTP
        </label>
        <p className="text-sm text-gray-600 mb-4">
          A 6-digit OTP has been sent to your email. Please enter it below.
        </p>
        <div className="flex space-x-2 justify-center" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        Verify OTP
      </button>
    </form>
  );
}
