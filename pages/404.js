import Link from "next/link";
const Notfound = () => {
  return (
    <div>
      <h1>Oooops...</h1>
      <h2>The page doesn't found</h2>
      <p>
        Go to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default Notfound;
