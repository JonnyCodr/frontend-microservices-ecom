import { mount as Products} from  'products/ProductsIndex';
import { mount as Cart} from  'cart/CartShow';
import 'cart/CartShow'

console.log('Container!');

Products(document.querySelector('#my-products'));
Cart(document.querySelector('#my-cart'));
