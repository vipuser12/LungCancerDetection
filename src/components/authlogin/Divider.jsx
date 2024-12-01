import React from 'react';

function Divider() {
  return (
    <div className="flex flex-wrap gap-7 items-center mt-11 text-base text-neutral-900 max-md:mt-10">
      <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid border-neutral-900 w-[279px]" />
      <span className="self-stretch basis-auto">or continue with</span>
      <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid border-neutral-900 w-[279px]" />
    </div>
  );
}

export default Divider;
