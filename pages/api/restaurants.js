import restaurants from "../../restaurants.json";

export default (req, res) => {
  res.statusCode = 200;
  res.json(restaurants);
};
