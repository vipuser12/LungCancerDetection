import React from 'react';

export function SocialMediaButtons() {
  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => handleSocialLogin('google')}
        className="p-3 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
        aria-label="Sign in with Google"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/5c4f4ed8a83e11bdc68d2c5b4494b4c90d1d4b975b64d4966781b4e97859cc58?apiKey=84dfb7fca5d24fe09ada46f181faaa46&"
          alt=""
          className="w-8 h-8"
          aria-hidden="true"
        />
      </button>

      <button
        onClick={() => handleSocialLogin('facebook')}
        className="p-3 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
        aria-label="Sign in with Facebook"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/4c0e0dc599dfadc07deef9f8f5d0d6d4c7548d1ea81780c722a7176d16c9ce4c?apiKey=84dfb7fca5d24fe09ada46f181faaa46&"
          alt=""
          className="w-8 h-8"
          aria-hidden="true"
        />
      </button>

      <button
        onClick={() => handleSocialLogin('apple')}
        className="p-3 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
        aria-label="Sign in with Apple"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/f491d1cfcfa12ce8c03c305d312333d40c80047f811b883917fcdd85c444ec92?apiKey=84dfb7fca5d24fe09ada46f181faaa46&"
          alt=""
          className="w-8 h-8"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
