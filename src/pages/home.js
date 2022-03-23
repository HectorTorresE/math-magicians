import './home.css';

const introduction = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque urna leo, egestas id sem vel, viverra viverra mi. Nam sed porta risus. Proin et tortor eu odio dignissim posuere in sit amet turpis. Donec interdum ligula eget nisl sollicitudin imperdiet. Fusce ullamcorper sodales ultricies. Aenean nec dignissim mauris, sit amet posuere velit. Suspendisse potenti. Quisque bibendum bibendum ullamcorper. Donec sollicitudin faucibus consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam libero erat, tempor vitae elementum vitae, condimentum gravida metus. Cras purus metus, mattis sit amet eros vitae, fringilla malesuada dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
`;
const Home = () => (
  <div className="homePage">
    <h1>Welcome to Math Magicians</h1>
    <p>
      {introduction}
    </p>
  </div>
);

export default Home;
