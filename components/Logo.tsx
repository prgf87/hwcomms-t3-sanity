import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault } = props;
  return (
    <div className="h-[55px] w-[120px]">
      <Image height={55} width={120} src="/images/logo.png" alt="Logo" />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
