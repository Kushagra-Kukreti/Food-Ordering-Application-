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
          corporis, at ducimus consequuntur maxime, libero provident inventore,
          velit dolore ratione placeat debitis! Ab ex quasi aliquid neque,
          ratione nam molestiae dicta adipisci earum et officia atque error
          possimus quo voluptates commodi similique. Itaque fuga deserunt
          repellat quasi. Excepturi provident aliquam quibusdam explicabo,
          placeat odio voluptas, praesentium voluptatem modi asperiores porro
          laborum harum inventore neque aliquid deleniti recusandae quo expedita
          unde. Id fuga illo beatae vel quo. Nam excepturi, voluptatem minus,
          tempore blanditiis eaque voluptate consectetur inventore repudiandae
          dolor, omnis optio! Magnam possimus, repellat dignissimos tenetur
          facere ex cupiditate molestiae ullam voluptatem sed, pariatur porro
          labore est inventore, dicta voluptatibus unde minus! Ut labore tempore
          excepturi! Quos ducimus reprehenderit nam iure dolorum nemo quas
          distinctio, quo recusandae, exercitationem voluptas repellendus
          numquam libero possimus accusantium aliquid perferendis laboriosam
          porro commodi. Dolorem voluptatum, nihil architecto ab alias sunt,
          incidunt officia quo facere, dicta et doloribus. Similique animi non
          obcaecati, accusamus molestiae quae delectus ipsum amet. Consectetur
          consequatur dolorum animi architecto error ipsa ex labore aspernatur
          mollitia voluptatum harum possimus obcaecati ullam alias doloremque
          quia, tempore laborum veritatis suscipit vel corrupti provident? Modi
          possimus sed aspernatur omnis quasi ut error perspiciatis quas minima
          deleniti magnam tempora velit doloribus et voluptate rem eos aliquid,
          itaque accusamus, earum architecto voluptas accusantium eligendi
          consectetur! Soluta neque maiores id perspiciatis, corrupti voluptatum
          adipisci, voluptates, ad quibusdam cumque voluptatibus omnis in
          dolorem voluptas eum mollitia velit facere dicta labore dignissimos
          laudantium odio repellendus harum ab? In doloribus, magni natus
          aspernatur deserunt ut distinctio voluptatem ratione eveniet obcaecati
          commodi ab non autem? Omnis similique eaque cum laudantium debitis
          quis at sed doloribus dolores praesentium ducimus odit, explicabo
          minima qui aspernatur velit iste totam, facere voluptatibus voluptate
          tempora ad, deserunt ipsa! Temporibus quibusdam laudantium, nemo
          repellat maxime quos, molestiae inventore quod minima sint nam
          exercitationem similique delectus eaque sit vitae aperiam asperiores.
          Quia, architecto! Fugiat temporibus optio quam necessitatibus esse
          culpa vel nesciunt autem placeat omnis reprehenderit adipisci,
          pariatur exercitationem provident. Accusantium totam quam ullam
          delectus fugit, architecto eos magnam maiores quis necessitatibus
          mollitia voluptatibus distinctio vero animi quibusdam eligendi saepe
          ducimus atque aperiam autem ipsam facere commodi! Quis expedita
          incidunt rem? Dignissimos cum est amet blanditiis unde saepe
          praesentium, eaque animi consequatur modi magni laudantium doloribus
          perferendis incidunt magnam neque nostrum rerum officiis quis sit
          totam! Temporibus amet asperiores eos, soluta iure repellendus! Rem,
          veniam quia consectetur, error rerum vitae numquam tempora sit harum
          repellat voluptatibus ratione? Amet, quas? Possimus eaque numquam
          laboriosam necessitatibus quam, voluptate quidem aperiam vitae
          praesentium nobis sed amet ullam veritatis quis quod consequuntur
          harum sunt! Laborum fugit est animi ab quaerat architecto inventore
          obcaecati neque, quod reprehenderit aspernatur tempora optio sunt
          numquam alias facere velit mollitia maxime eius autem voluptates odit
          doloribus? Esse vitae provident reprehenderit ipsam natus labore totam
          repellat commodi perferendis dolor unde, eius eaque velit repellendus?
          Ratione magnam nulla minima laborum enim tempora, assumenda sint a
          quidem vitae facilis perferendis aliquam neque in fuga quisquam libero
          facere. Fuga corporis molestias ex? Architecto dicta, maxime, nobis
          amet ducimus odio recusandae molestiae numquam quisquam expedita
          excepturi accusamus fuga ipsam quam delectus quo voluptatem eligendi
          eos aliquam voluptas nostrum? Provident veniam est corrupti labore
          exercitationem eveniet aspernatur quod voluptatibus dolor modi ipsa ut
          voluptates animi nostrum architecto, consequuntur, iusto esse. Cumque
          unde doloremque eligendi maiores consequatur praesentium sed libero
          nobis optio enim laudantium soluta placeat exercitationem, officia
          sunt facere? Eius non quibusdam nostrum accusamus velit autem impedit,
          alias eligendi quia vel sint ea illo commodi sequi et ullam facilis
          minus repellat ad rerum a provident. Hic ad saepe earum. Qui, veniam
          voluptatibus, est, voluptatum aut perspiciatis autem dignissimos minus
          commodi sit nobis voluptatem eaque ullam a repellat! Porro accusamus
          maiores in, ratione quos adipisci ipsa est quasi cupiditate. Omnis,
          esse! Beatae esse aut odio recusandae magni! Culpa, rem placeat?
          Ratione odit cumque commodi rem veniam eveniet, omnis rerum nulla
          eaque quisquam nemo placeat pariatur deleniti saepe ullam sed alias
          provident repellendus modi vel porro ipsam dolor explicabo minus.
          Tempore eius impedit sit natus voluptates similique labore ut optio
          deleniti, expedita ipsum quae laboriosam ipsa ratione architecto
          corporis aliquam facilis. Suscipit maxime quae saepe! Tempore commodi
          soluta odio mollitia accusantium voluptatibus esse beatae repellendus
          dolores quas corrupti sint, ratione, amet dolore vero ipsa, veniam
          iusto. Aut laboriosam commodi nihil quaerat vitae in et unde dolor
          laborum recusandae placeat, dolores necessitatibus cupiditate sapiente
          quibusdam?
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
