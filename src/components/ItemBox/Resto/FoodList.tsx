import { Food } from "../../../interfaces/Food";
import MenuBox from "../Food/MenuBox";

interface FoodsListProps {
    foods: Food[];
}

const FoodsList: React.FC<FoodsListProps> = ({ foods }) => {
    if (!foods || foods.length === 0) {
        return <p>No foods available</p>;
    }

    return (
        <div>
            {foods.map((food, index) => (
                <MenuBox key={index} food={food} />
            ))}
        </div>
    );
};

export default FoodsList;