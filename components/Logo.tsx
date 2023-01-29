import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault } = props;
  return (
    <div className="flex items-center m-2">
      <Image
        className="object-cover"
        height={50}
        width={50}
        src="/logo.jpg"
        alt="Logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
