import { useRouter } from "next/router";
import Container from "../components/container";
import Card from "../components/card";
import fetch from "isomorphic-unfetch";
import restaurants from "../restaurants.json";

function Types({ data }) {
  const router = useRouter();
  const { type } = router.query;
  const items = restaurants.map((item, key) => {
    if (item.type === type) {
      return <Card restaurant={item} key={key} />;
    }
  });
  return (
    <div>
      <Container pageTitle={type}>
        <div>{items}</div>
      </Container>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [
    "/American",
    "/With-Entertainment",
    "/Asian",
    "/Italian",
    "/Mexican",
    "/Other-Ethnic",
    "/Seafood",
    "/Sports-Bar-Pub-Grill",
    "/Steakhouse",
    "/Delis-Sandwiches",
    "/Pizza",
    "/Bakery-Coffee",
    "/Ice-Cream-Yogurt",
    "/Fast-Food",
    "/Bars",
  ];
  return { paths, fallback: false };
}

export function getStaticProps() {
  return {
    props: {
      restaurants,
    },
  };
}

export default Types;
