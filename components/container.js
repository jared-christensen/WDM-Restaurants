import Head from "next/head";
import TypeNav from "./type-nav";

export default class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>WDM Restaurants</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />
        </Head>
        <TypeNav></TypeNav>
        {this.props.children}
      </div>
    );
  }
}
