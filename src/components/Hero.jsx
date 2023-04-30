import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      {/* nav */}
      <nav className="flex justify-between items-center w-full mt-4 mb-10">
        <img src={logo} alt="logo" className=" w-28 object-contain" />
        <button
          className="black_btn "
          type="button"
          onClick={() => window.open("https://github.com/Mrcode3")}
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className=" max-md:hidden" />
        <span className="color_gradient">Open AI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
