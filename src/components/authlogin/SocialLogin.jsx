import React from 'react';

function SocialLogin() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/5c4f4ed8a83e11bdc68d2c5b4494b4c90d1d4b975b64d4966781b4e97859cc58?apiKey=84dfb7fca5d24fe09ada46f181faaa46&", alt: "Social login option 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/4c0e0dc599dfadc07deef9f8f5d0d6d4c7548d1ea81780c722a7176d16c9ce4c?apiKey=84dfb7fca5d24fe09ada46f181faaa46&", alt: "Social login option 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/84dfb7fca5d24fe09ada46f181faaa46/f491d1cfcfa12ce8c03c305d312333d40c80047f811b883917fcdd85c444ec92?apiKey=84dfb7fca5d24fe09ada46f181faaa46&", alt: "Social login option 3" }
  ];

  return (
    <div className="flex gap-4 items-start self-center mt-3.5 max-w-full w-[182px]">
      {socialIcons.map((icon, index) => (
        <button
          key={index}
          aria-label={`Login with ${icon.alt}`}
        >
          <img
            loading="lazy"
            src={icon.src}
            alt={icon.alt}
            className="object-contain shrink-0 aspect-square w-[50px]"
          />
        </button>
      ))}
    </div>
  );
}

export default SocialLogin;
