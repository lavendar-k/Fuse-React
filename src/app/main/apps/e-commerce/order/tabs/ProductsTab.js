import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductsTab() {
  const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);

  return (
    <div className="table-responsive">
      <table className="simple">
        <thead>
          <tr>
            <th>
              <Typography className="font-semibold">ID</Typography>
            </th>
            <th>
              <Typography className="font-semibold">Image</Typography>
            </th>
            <th>
              <Typography className="font-semibold">Name</Typography>
            </th>
            <th>
              <Typography className="font-semibold">Price</Typography>
            </th>
            <th>
              <Typography className="font-semibold">Quantity</Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {order.products.map((product) => (
            <tr key={product.id}>
              <td className="w-64">{product.id}</td>
              <td className="w-80">
                <img className="product-image" src={product.image} alt="product" />
              </td>
              <td>
                <Typography
                  component={Link}
                  to={`/apps/e-commerce/products/${product.id}`}
                  className="truncate"
                  style={{
                    color: 'inherit',
                    textDecoration: 'underline',
                  }}
                >
                  {product.name}
                </Typography>
              </td>
              <td className="w-64 text-right">
                <span className="truncate">${product.price}</span>
              </td>
              <td className="w-64 text-right">
                <span className="truncate">{product.quantity}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTab;
