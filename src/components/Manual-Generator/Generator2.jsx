import { useState } from "react";

function Generator2() {
  const [otpDisplay, setOtpDisplay] = useState();
  let createOTP = () => {
    //Define the length of the OTP
    const otpLength = 100000;

    //Define function to generate random OTP numbers
    const otp = Math.floor(otpLength + Math.random() * 900000);
    setOtpDisplay(otp);
  };

  console.log(otpDisplay);

  return (
    <div className="bg-black">
      <div className="text-white flex justify-center items-center h-screen mx-auto">
        <div className="bg-gray-800 p-[200px] text-center">
          <h1 className="text-3xl mb-9">Manual OTP Generator</h1>
          <button
            className="w-[220px] bg-blue-500 text-xl p-3 rounded-xl mb-6"
            onClick={createOTP}
          >
            Generate OTP code
          </button>
          <div className="w-[350px] p-6 h-10 bg-gray-700 flex justify-center items-center tracking-[15px] text-lg">
            {/* attach the state variable right below */}
            {otpDisplay} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator2;
