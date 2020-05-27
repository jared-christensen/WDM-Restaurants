export default class Card extends React.Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{this.props.restaurant.name}</h5>
          <h6 className="card-subtitle text-muted">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${this.props.restaurant.address}`}
            >
              {this.props.restaurant.address}
            </a>
          </h6>
          <a
            href={`tel:+1-${this.props.restaurant.phone}`}
            className="card-link"
          >
            {this.props.restaurant.phone}
          </a>
        </div>
      </div>
    );
  }
}
