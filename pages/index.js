import Container from "../components/container";
import Card from "../components/card";
import restaurants from "../restaurants.json";

export default class Home extends React.Component {
  render() {
    const items = restaurants.map((item, key) => (
      <Card restaurant={item} key={key} />
    ));
    return (
      <div>
        <Container pageTitle="All">{items}</Container>
      </div>
    );
  }
}
