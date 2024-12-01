import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocialMediaButtons } from './SocialMediaButtons';

export function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col max-w-full w-[736px]">
      <h1 className="self-start text-3xl font-semibold">Sign up</h1>

      <div className="flex flex-col mt-3 w-full">
        <label htmlFor="name" className="text-2xl font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="gap-2.5 px-2.5 py-4 mt-2.5 w-full text-base rounded-xl bg-zinc-100 min-h-[49px]"
          required
          aria-required="true"
        />
      </div>

      <div className="flex flex-col mt-4 w-full">
        <label htmlFor="email" className="text-2xl font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="gap-2.5 px-2.5 py-4 mt-2.5 w-full text-base rounded-xl bg-zinc-100 min-h-[49px]"
          required
          aria-required="true"
        />
      </div>

      <div className="flex flex-col mt-4 w-full">
        <label htmlFor="password" className="text-2xl font-medium">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="gap-2.5 px-2.5 py-4 mt-2.5 w-full text-base rounded-xl bg-zinc-100 min-h-[49px]"
          required
          aria-required="true"
        />
      </div>

      <button
        type="submit"
        className="gap-4 px-80 py-4 mt-7 text-2xl font-bold rounded-xl bg-neutral-900 min-h-[62px] text-neutral-50 max-md:px-5 hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
      >
        Sign up
      </button>

      <div className="flex flex-wrap gap-7 items-center mt-7 text-base w-full">
        <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid border-neutral-900 w-[279px]" />
        <span className="grow shrink self-stretch w-[98px]">or continue with</span>
        <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid border-neutral-900 w-[279px]" />
      </div>

      <SocialMediaButtons />
    </form>
  );
}
