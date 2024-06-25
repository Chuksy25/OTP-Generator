import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-[1000px] md:max-w-[1000px] mx-auto flex justify-center h-screen">
      <div className="flex justify-between items-center gap-20">
        <div>
          <Link to="/generator2">
            <button>Click here to view manual OTP Generator</button>
          </Link>
        </div>
        <div>
          <Link to="/generator1">
            <button>Click here to view automatic OTP Generator</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
