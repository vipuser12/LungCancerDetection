import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import { SignUpForm } from './SignUpForm';

export function AuthLayout() {
  return (
    <main className="flex overflow-hidden flex-col pt-3 pr-20 pb-36 pl-9 bg-zinc-100 max-md:px-5 max-md:pb-24">
      <header className="flex flex-wrap gap-5 justify-between max-w-full w-[956px]">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-black uppercase"
          aria-label="LCD Home"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/ec6ded1ec2dbc6425f7f35b4088afb5336b35fe4b123081da6bfd9919a34dca6?apiKey=84dfb7fca5d24fe09ada46f181faaa46&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[82px]"
            aria-hidden="true"
          />
          <span className="self-stretch my-auto">L C D</span>
        </Link>
        <NavBar />
      </header>

      <section
        className="flex flex-col items-start self-center px-16 py-7 mt-24 w-full rounded-xl bg-neutral-50 max-w-[1052px] text-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        aria-labelledby="signup-heading"
      >
        <SignUpForm />

        <div className="flex gap-2 items-center mt-3.5 text-xl">
          <span className="self-stretch my-auto">I have an account</span>
          <Link
            to="/login"
            className="self-stretch my-auto font-medium hover:underline focus:ring-2 focus:ring-neutral-900 focus:outline-none px-2 py-1 rounded"
          >
            login
          </Link>
        </div>
      </section>
    </main>
  );
}
