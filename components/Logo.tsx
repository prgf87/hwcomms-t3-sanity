import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault } = props;
  return (
    <div>
      <Image height={447} width={966} src="/images/logo.png" alt="Logo" />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
