import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { useParams } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const Home = () => {
  return (
    <div>
      <h3>Home page!</h3>
    </div>
  )
}

const Main = () => {
  return (
    <div>
      <h3>Main page!</h3>
      <Outlet />
    </div>
  )
}

const Contacts = () => {
  return (
    <div>
      <h3>Contacts!</h3>
    </div>
  )
}

const Products = () => {
  return (
    <div>
      <h3>Products!</h3>
    </div>
  )
}

const ProductItem = () => {
  const { productId } = useParams();

  // console.log('>>productId', productId);

  return (
    <div>
      <h3>ProductItem</h3>
      <h5>{productId}</h5>
    </div>
  )
}

const Navigation = () => {
  const productIds = [1, 2, 3, 4, 5];

  return (
    <ul>
      <li>
        <NavLink className="link" to={"/"}>
          Main
        </NavLink>
      </li>

      <li>
        <NavLink className="link" to={"/home"}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className="link" to={"/contacts"}>
          Contacts
        </NavLink>
      </li>

      <li>
        <NavLink className="link" to={"/private"}>
          Private
        </NavLink>
      </li>

      <li>
        <NavLink className="link" to={"/products"}>
          Products
        </NavLink>
      </li>



      {productIds.map(productId => {
        return (
          <li key={productId}>
            <NavLink className="link" to={`/products/${productId}`}>
              Product = {productId}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navigation />

        <Routes>

          <Route path="/" element={<Main />}>
            <Route path="home" element={<Home />} />
          </Route>

          <Route path="/contacts" element={<Contacts />} />

          <Route path='/private' element={<PrivateRoute />} />          

          <Route path="/products" element={<Products />} />

          <Route path="/products/:productId" element={<ProductItem />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
