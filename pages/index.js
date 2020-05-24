import Container from "../components/container";
import Card from "../components/card";

export default class Home extends React.Component {
  render() {
    const items = this.props.data.items.map((item, key) => (
      <Card restaurant={item} key={key} />
    ));
    return (
      <div>
        <Container pageTitle="All">{items}</Container>
      </div>
    );
  }
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/restaurants");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
