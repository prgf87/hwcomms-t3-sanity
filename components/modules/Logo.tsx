import Image from 'next/image';
import Link from 'next/link';

function Logo(props: any) {
  const { renderDefault } = props;
  return (
    <Link href={'/'} className="h-[55px] w-[120px] mx-auto">
      <Image height={55} width={120} src="/images/logo.png" alt="Logo" />
      {renderDefault && <>{renderDefault(props)}</>}
    </Link>
  );
}

export default Logo;
