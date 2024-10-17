import Card from "./components/Card"
import Container from "./components/Container"

import omelete from './assets/images/image-omelette.jpeg';
import Title from "./components/Title";
import List from "./components/List";

const App = () => {
  return (
    <Container>
      <Card>
        <img src={omelete} alt="omelete" className="mb-10 sm:rounded-xl" />
        <div className="px-8 sm:px-0">
          <Title title="Simple Omelette Recipe" variant="primary" />
          <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          
          <List
            title="Preparation time"
            total="Approximately 10 minutes"
            preparation="5 minutes"
            cooking="5 minutes"
          />
          
          <Title title="Ingredients" variant="secondary" />
          <ul className="list-disc list-inside marker:text-brown-800 marker:font-bold leading-loose">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>

          <hr className="my-8" />

          <Title title="Instructions" variant="secondary" />
          <ol className="list-decimal list-inside marker:text-brown-800 marker:font-bold leading-loose">
            <li><b>Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li><b>Heat the pan:</b> Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li><b>Cook the omelette:</b> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
            <li><b>Add fillings (optional):</b> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li><b>Fold and serve:</b> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li><b>Enjoy:</b> Serve hot, with additional salt and pepper if needed.</li>
          </ol>

          <hr className="my-8" />

          <Title title="Nutrition" variant="secondary" />
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <table className="w-full table-fixed mt-6">
            <tbody>
              <tr className="border-b">
                <td className="table-cell">Calories</td>
                <td className="table-cell"><b>277kcal</b></td>
              </tr>
              <tr className="border-b">
                <td className="table-cell">Carbs</td>
                <td className="table-cell"><b>0g</b></td>
              </tr>
              <tr className="border-b">
                <td className="table-cell">Protein</td>
                <td className="table-cell"><b>20g</b></td>
              </tr>
              <tr>
                <td className="table-cell">Fat</td>
                <td className="table-cell"><b>22g</b></td>
              </tr>

            </tbody>
          </table>
        </div>
      </Card>
    </Container>
  )
}

export default App