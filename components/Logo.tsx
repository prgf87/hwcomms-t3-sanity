import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault } = props;
  return (
    <div className="flex items-center m-2">
      <Image
        className="object-cover"
        height={508}
        width={1038}
        src="/images/logo2.png"
        alt="Logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
