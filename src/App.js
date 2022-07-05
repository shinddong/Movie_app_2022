import React from "react";
import PropTypes from "prop-types";
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QAO57SIFaI8cthd4F-83xwHaF2%26pid%3DApi&f=1",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyepsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.t0EoaEzeLC_kBW3Ha4u9EgHaF7%26pid%3DApi&f=1",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.od4YprzuR0ZOmv851wA0OAHaEx%26pid%3DApi&f=1",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DxkwyyLp8y5OyBlvX2xbXwHaEO%26pid%3DApi&f=1",
    rating: 4.1,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2IkH5L-Ulcbq0RMjj7rhBAHaE7%26pid%3DApi&f=1",
    rating: 3.8,
  },
];
function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
