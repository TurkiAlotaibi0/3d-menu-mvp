import { Dish } from './dish.entity';

const dishes: Dish[] = [];

export const DishRepo = {
  save(dish: Dish) {
    dishes.push(dish);
    return dish;
  },
  findById(id: string) {
    return dishes.find(d => d.id === id);
  },
}; 