import { useLocation } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatNumber from "../utils/Format";
const Product = () => {
  const {
    increaseCartQuantity,
    getItemQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const location = useLocation();

  const info = location.state;
  const quantity = getItemQuantity(info.id);
  return (
    <div className="card mb-3">
      <img
        src={info.url}
        style={{ height: "20rem", objectFit: "cover" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{info.title}</h5>
        <p className="card-text">
         In a world filled with culinary wonders, where flavors dance on the palate like a symphony of tastes, food takes center stage as a universal language that transcends borders and cultures. Imagine a gastronomic journey that tantalizes the senses, starting with the crisp allure of freshly baked bread, its golden crust whispering promises of warmth and comfort. Delve into the vibrant medley of colors and textures in a garden-fresh salad, where crisp greens embrace juicy tomatoes and crunchy cucumbers, creating a harmonious blend of nature's bounty. Picture the sizzling melody of a hot grill, as succulent meats and vegetables undergo a magical transformation, releasing mouthwatering aromas that beckon with irresistible allure. Transport yourself to the heart of culinary creativity, where skilled chefs orchestrate intricate dishes, infusing them with layers of flavor that tell stories of tradition, innovation, and passion. From the silky embrace of velvety chocolate desserts to the zesty kick of exotic spices in international cuisines, each bite is a celebration of diversity and craftsmanship. Journey through the rich tapestry of global flavors, from the umami-packed delights of Japanese sushi to the fiery embrace of Indian curries, experiencing the world on a plate. In this culinary utopia, street food reigns supreme, offering a symphony of aromas that fill bustling markets with the essence of local culture. Picture the joyous chaos of a food festival, where food trucks line the streets, serving up delectable treats that spark joy in every bite. Amidst this gastronomic adventure, don't forget the simple pleasures—a warm cup of coffee on a chilly morning, the nostalgia of a home-cooked meal, or the joy of sharing a table with loved ones. Food is not just sustenance; it's a journey of the senses, a celebration of life's moments, both big and small. So, whether you find yourself in a Michelin-starred restaurant or savoring a humble bowl of noodles, let the world of food envelop you in its diverse, delectable embrace.
        </p>
        <p className="card-text">
          <small className="text-body-secondary">{formatNumber(info.price)}</small>
        </p>
        <div style={{ display: "flex", gap: "1em" }}>
          {quantity === 0 ? (
            <div
              className="btn btn-danger"
              onClick={() => increaseCartQuantity(info.id)}
            >
              +Add to Cart
            </div>
          ) : (
            <>
              <div
                className="btn btn-danger"
                onClick={() => decreaseCartQuantity(info.id)}
              >
                -
              </div>
              <div
                className="btn btn-danger"
                onClick={() => increaseCartQuantity(info.id)}
              >
                {quantity}
              </div>
              <div
                className="btn btn-danger"
                onClick={() => increaseCartQuantity(info.id)}
              >
                +
              </div>
              <div
                className="btn btn-danger"
                onClick={() => removeFromCart(info.id)}
              >
                remove
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
