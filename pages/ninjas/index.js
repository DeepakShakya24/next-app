import styles from "../../styles/Ninja.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return {
    props: { ninjas: data.data },
  };
};

const Ninja = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninja</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>
              {ninja.first_name} {ninja.last_name}
            </h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninja;
