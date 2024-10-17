import Card from "./components/Card"
import Container from "./components/Container"

import omelete from './assets/images/image-omelette.jpeg';
import Title from "./components/Title";

const App = () => {
  return (
    <Container>
      <Card>
        <img src={omelete} alt="omelete" className="mb-10 sm:rounded-xl" />
        <div className="px-8 sm:px-0">
          <Title title="Simple Omelette Recipe" variant="primary" />
          <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          <div>
            <h3>Preparation time</h3>
            <ul>
              <li>10 minutes</li>
              <li>10 minutes</li>
              <li>10 minutes</li>
            </ul>
          </div>
          <Title title="Ingredients" variant="secondary" />
        </div>
      </Card>
    </Container>
  )
}

export default App