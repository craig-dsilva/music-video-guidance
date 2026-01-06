import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-2 p-5">
      <h1>
        <Link href="/">Music Video Guidance</Link>
      </h1>
    </header>
  );
};

export default Header;
