export default function Logo() {
  return (
    <div className="flex items-center text-2xl font-bold text-black uppercase">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/bed82d85168942febc6a121d9050f8b8/ec6ded1ec2dbc6425f7f35b4088afb5336b35fe4b123081da6bfd9919a34dca6?apiKey=bed82d85168942febc6a121d9050f8b8&"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[82px]"
        alt="LCD Company Logo"
      />
      <span className="self-stretch my-auto">L C D</span>
    </div>
  );
}
