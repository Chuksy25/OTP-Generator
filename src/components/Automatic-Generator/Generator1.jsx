import { useState } from "react";
import OtpInput from "react-otp-input";

function Generator1() {
  const [otp, setOtp] = useState("");

  const generateOtp = () => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(randomOtp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Entered OTP is: ${otp}`);
  };

  console.log(otp);

  return (
    <div className="flex justify-center items-center h-screen mx-auto bg-black">
      <div className="bg-gray-800 p-[200px] text-center">
        <h2 className="text-white">OTP Generator</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center m-5">
            {/* Display the React-otp-input component below */}
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="w-10  p-5">-</span>}
              renderInput={(props) => <input {...props} className="text-5xl"/>}
            />
          </div>

          <div className="flex justify-center items-center gap-5">
            <button
              type="button"
              onClick={generateOtp}
              className="w-[200px] bg-blue-500 text-xl p-3 rounded-xl mb-6 text-[white]"
            >
              Generate OTP
            </button>
            <button
              type="submit"
              className="w-[200px] bg-blue-500 text-xl p-3 rounded-xl mb-6 text-[white]"
            >
              Submit OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Generator1;
