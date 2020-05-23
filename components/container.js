import Head from "next/head";
import Navbar from "./Navbar";

export default function Container(props) {
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
      <Navbar></Navbar>
      {props.children}
    </div>
  );
}
