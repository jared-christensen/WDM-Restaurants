export default function Card(props) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.restaurant.name}</h5>
        <h6 className="card-subtitle text-muted">{props.restaurant.address}</h6>
        <a href="tel:+1-{ props.restaurant.phone }" className="card-link">
          {props.restaurant.phone}
        </a>
      </div>
    </div>
  );
}
