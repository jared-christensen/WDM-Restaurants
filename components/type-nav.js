import Link from "next/link";

export default class TypeNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [{ type: "American" }, { type: "Asian" }],
    };
  }

  render() {
    const links = this.state.types.map((item, key) => (
      <Link href="/[type]" as={`/${item.type}`} key={key}>
        <a className="nav-link">{item.type}</a>
      </Link>
    ));
    return (
      <div className="type-nav">
        <ul className="nav nav-pills my-3">{links}</ul>
      </div>
    );
  }
}
