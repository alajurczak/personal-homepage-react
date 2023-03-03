import { ListSection } from "../../common/ListSection";
import { Item } from "../../common/ListSection/styled";
import {goals} from "./goals";

export const ToLearn = () => (
    <ListSection 
        title={<>What I want to learn 🚀</>}
        items={
            goals.map(goal => (
                <Item key={goal.id}>{goal.content}</Item>
            ))
        }
    />
);