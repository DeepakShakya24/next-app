export const getStaticPaths = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  const newdata = data.data;
  const paths = newdata.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return {
    props: { ninja: data.data },
  };
};
const DetailPage = ({ ninja }) => {
  return (
    <div>
      <img src={ninja.avatar} />
      <h4>
        {ninja.first_name} {ninja.last_name}
      </h4>
      <p>{ninja.email}</p>
    </div>
  );
};

export default DetailPage;
