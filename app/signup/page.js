'use client'
import { useState } from 'react';
import AccountCreationForm from '../components/form/AccountCreateForm';
import ContinueWith from '../components/form/ContinueWith';
import EmailSubmitForm from '../components/form/EmailSubmitForm';
import OtpForm from '../components/form/OtpForm';
;


const SignupPage = () => {
  const [step, setStep] = useState(1); // Tracks the current step (1: Email, 2: OTP, 3: Account creation)
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [imagePublicId, setImagePublicId] = useState('');
  const [error, setError] = useState('');


  // Simulate OTP send/verification and account creation
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate sending OTP
      setStep(2); // Proceed to OTP step
    } else {
      setError('Please enter a valid email.');
    }
  };

  // Handle OTP form submission
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    setError('hello');
    setStep(3);
    console.log("Submitted OTP: ", enteredOtp);
    // Add your verification logic here
  };

  const handleAccountCreation = (e) => {
    e.preventDefault();
    if (username && password) {
      setError('');
      // Proceed with account creation, like sending data to the backend
      console.log({
        email,
        userName,
        password,
      });
      alert('Account created successfully!');
      // Reset form after successful signup
      setStep(1);
      setEmail('');
      setUserName('');
      setPassword('');
      setOtp('');
      setUploadedImageUrl('');
    } else {
      setError('Please complete all required fields.');
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {step === 1 && 'Sign Up'}
          {step === 2 && 'Verify OTP'}
          {step === 3 && 'Create Account'}
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {step === 1 && (
        <div>
            <EmailSubmitForm
             email={email} 
             setEmail={setEmail} 
             handleEmailSubmit={handleEmailSubmit} 
             />

            <div className="mt-6 flex items-center justify-center">
                <span className="text-sm text-gray-500">or continue with</span>
            </div>
            <ContinueWith />
        </div>
        )}

        {step === 2 && (
            <OtpForm
             otp={otp} 
             setOtp={setOtp} 
             handleOtpSubmit={handleOtpSubmit} 
             />
        )}

        {step === 3 && (
            <AccountCreationForm
             userName={userName}
             setUserName={setUserName}  
             password={password} 
             setPassword={setPassword} 
             uploadedImageUrl={uploadedImageUrl} 
             setUploadedImageUrl={setUploadedImageUrl} 
             imagePublicId={imagePublicId} 
             setImagePublicId={setImagePublicId} 
             handleAccountCreation={handleAccountCreation}  
             />
        )}
      </div>
    </div>
  );
};

export default SignupPage;
