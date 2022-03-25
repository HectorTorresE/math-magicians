import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Calculator from '../components/calculator.js';
import NavBar from '../components/navBar.js';

describe('Components testing', () => {
  test('Calculator Component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('NavBar Component', () => {
    const Element = (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const tree = renderer.create(Element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
