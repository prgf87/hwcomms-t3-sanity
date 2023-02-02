import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="object-cover"
            height={508}
            width={1038}
            src="/images/logo2.png"
            alt="Logo"
          />
        </Link>
        <h1>Hailey Wilson Communications</h1>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
