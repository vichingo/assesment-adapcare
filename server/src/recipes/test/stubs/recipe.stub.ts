import { Recipe } from '../../schemas/recipe.schema';
import MockDate from 'mockdate';
import { Date } from 'mongoose';

MockDate.set('2021-10-26T13:05:10.734Z');

export const recipeStub = (): Recipe => {
  return {
    _id: '61760394c51dbe02c1ca5d84',
    title: 'Spaghetti With Shrimp Sauce 3',
    imageUrl:
      'https://www.savorynothings.com/wp-content/uploads/2016/06/Garlic-Butter-Tomato-Shrimp-Linguine-Recipe-image-2.jpg',
    bookmarked: true,
    veg: false,
    servings: 1,
    description:
      'Spaghetti with a spicy tomato sauce and shrimp. A delicious 20 minute weeknight dinner fancy enough to serve on a date night. This recipe is absolutely mouth-watering, incredibly easy to make and loaded with flavor. Full of garlic, red pepper, juicy cherry tomatoes and shrimp. Pure joy.',
    created: new Date().toString(),
    ingredients: ['Spaghetti pasta', 'Olive Oil', 'Fresh Shrimp'],
    instructions: [
      'In a large bowl, combine shrimp with 1 tsp salt, black pepper and sweet paprika. Add 1 tbsp olive oil, toss and set aside.',
      'Cook the spaghetti in a large pot of boiling, generously salted water. Drain, reserving 1 cup of the cooking water.',
    ],
    recipeId: '1e90043a-a569-4063-8cc6-17eadf536460',
  };
};
