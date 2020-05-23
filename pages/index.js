import Head from "next/head";
import Container from "../components/container";
import Card from "../components/card";
// import Fetch from "isomorphic-unfetch";

export default function Home(props) {
  const items = props.items.map((item, key) => (
    <Card restaurant={item} key={key} />
  ));
  return (
    <div>
      <Container>{items}</Container>
    </div>
  );
}

Home.getInitialProps = async function () {
  const res = await fetch("http://localhost:3000/api/restaurants");
  const data = await res.json();
  return data;
};
