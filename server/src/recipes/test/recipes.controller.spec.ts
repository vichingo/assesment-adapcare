import { Test, TestingModule } from '@nestjs/testing';
import { RecipesController } from '../recipes.controller';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../schemas/recipe.schema';
import { recipeStub } from './stubs/recipe.stub';

jest.mock('./recipes.service');

describe('RecipeController', () => {
  let recipesController: RecipesController;
  let recipesService: RecipesService;

  beforeEach(async () => {
    const recipes: TestingModule = await Test.createTestingModule({
      controllers: [RecipesController],
      providers: [RecipesService],
    }).compile();

    recipesController = recipes.get<RecipesController>(RecipesController);
    recipesService = recipes.get<RecipesService>(RecipesService);
    jest.clearAllMocks();
  });

  describe('getRecipe', () => {
    describe('when getRecipe is called', () => {
      let recipe: Recipe;

      beforeEach(async () => {
        recipe = await recipesController.getRecipebyId(recipeStub().recipeId);
      });

      test('then it should call recipeService', () => {
        expect(recipesService.getRecipeById).toBeCalledWith(
          recipeStub().recipeId,
        );
      });

      test('then is should return a recipe', () => {
        expect(recipe).toEqual(recipeStub());
      });
    });
  });
});
