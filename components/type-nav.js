import Link from "next/link";

export default class TypeNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        "American",
        "With-Entertainment",
        "Asian",
        "Italian",
        "Mexican",
        "Other-Ethnic",
        "Seafood",
        "Sports-Bar-Pub-Grill",
        "Steakhouse",
        "Delis-Sandwiches",
        "Pizza",
        "Bakery-Coffee",
        "Ice-Cream-Yogurt",
        "Fast-Food",
        "Bars",
      ],
    };
  }

  render() {
    const links = this.state.types.map((item, key) => (
      <Link href="/[type]" as={`/${item}`} key={key}>
        <a className="nav-link">{item}</a>
      </Link>
    ));
    return (
      <div className="type-nav">
        <ul className="nav nav-pills my-3">
          <Link href="/">
            <a className="nav-link">All</a>
          </Link>
          {links}
        </ul>
      </div>
    );
  }
}
