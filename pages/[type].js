import { useRouter } from "next/router";
import Container from "../components/container";
import Card from "../components/card";
import restaurants from "../restaurants.json";

export default function Types() {
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
