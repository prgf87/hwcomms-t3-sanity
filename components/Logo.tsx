import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault } = props;
  return (
    <div className="flex items-center h-[55px] w-[120px]">
      <Image
        className="object-cover"
        height={447}
        width={966}
        src="/images/logo.png"
        alt="Logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
