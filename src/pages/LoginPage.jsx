import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SocialLogin from '../components/authlogin/SocialLogin';
import Divider from '../components/authlogin/Divider';


function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleRegister = () => {
    navigate('/signup');
  };
  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? 'absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-100 transition-transform'
      : 'absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100';
  };
  return (
    <main className="flex overflow-hidden flex-col pt-3 pr-20 pb-36 pl-9 bg-zinc-100 max-md:px-5 max-md:pb-24">
      <header className="flex flex-wrap gap-5 justify-between items-center w-full text-2xl font-bold max-w-[1353px] max-md:max-w-full">
        <a className="flex items-center self-stretch text-black uppercase" href="/" data-discover="true">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/ec6ded1ec2dbc6425f7f35b4088afb5336b35fe4b123081da6bfd9919a34dca6?apiKey=84dfb7fca5d24fe09ada46f181faaa46&amp;"
            alt="LCD Logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[82px]"
          />
          <span className="self-stretch my-auto">L C D</span>
        </a>

        <nav className="flex flex-wrap gap-6 justify-center items-center self-stretch p-2.5 my-auto text-lg font-medium whitespace-nowrap text-neutral-900 max-md:max-w-full mx-auto">
          <a className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group" href="/" data-discover="true">
            <span>Home</span>
            <span className={getNavLinkClass('/')}></span>
          </a>
          <a className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group" href="/examine" data-discover="true">
            <span>Examine</span>
            <span className={getNavLinkClass('/examine')}></span>
          </a>
          <a className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group" href="/results" data-discover="true">
            <span>Results</span>
            <span className={getNavLinkClass('/results')}></span>
          </a>
          <a className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group" href="/explanation" data-discover="true">
            <span>Explanation</span>
            <span className={getNavLinkClass('/explanation')}></span>
          </a>
          <a className="flex flex-col justify-center items-center self-stretch px-2.5 py-1 my-auto relative group" href="/information" data-discover="true">
            <span>Information</span>
            <span className={getNavLinkClass('/information')}></span>
          </a>
        </nav>
      </header>
      <section className="flex flex-col items-start self-center px-16 pt-7 pb-20 mt-24 w-full rounded-xl bg-neutral-50 max-w-[1052px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <form onSubmit={handleLogin} className="flex flex-col max-w-full text-neutral-900 w-[741px]">
          <h1 className="self-start text-3xl font-semibold">Login</h1>
          
          <div className="flex flex-col mt-3 w-full whitespace-nowrap max-md:mr-1.5 max-md:max-w-full">
            <label htmlFor="email" className="text-2xl font-medium max-md:max-w-full">Email</label>
            <input 
              type="email" 
              id="email"
              required
              className="gap-2.5 self-stretch px-2.5 py-4 mt-2.5 w-full text-base font-extralight rounded-xl bg-zinc-100 min-h-[49px] max-md:max-w-full"
              placeholder="Email"
              aria-label="Email input"
            />
          </div>

          <div className="flex flex-col mt-6 w-full whitespace-nowrap max-md:mr-1.5 max-md:max-w-full">
            <label htmlFor="password" className="text-2xl font-medium max-md:max-w-full">Password</label>
            <input 
              type="password"
              id="password" 
              required
              className="gap-2.5 self-stretch px-2.5 py-4 mt-2.5 w-full text-base font-extralight rounded-xl bg-zinc-100 min-h-[49px] max-md:max-w-full"
              placeholder="Password"
              aria-label="Password input"
            />
          </div>

          <button 
            type="button"
            className="gap-4 self-end p-2.5 text-base text-black"
            aria-label="Forgot password"
          >
            forgot password ?
          </button>

          <button 
            type="submit"
            className="gap-4 self-stretch px-80 py-4 mt-5 text-2xl font-bold whitespace-nowrap rounded-xl bg-neutral-900 min-h-[62px] text-neutral-50 max-md:px-5"
            aria-label="Login button"
          >
            Login
          </button>
        </form>

        <Divider />
        <SocialLogin />

        <div className="flex gap-1.5 items-center mt-8 text-xl text-neutral-900">
          <p className="self-stretch my-auto">You do not have an account</p>
          <button 
            onClick={handleRegister}
            className="self-stretch my-auto font-medium"
            aria-label="Register now"
          >
            Register now
          </button>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
