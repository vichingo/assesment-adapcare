import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

import { Recipe } from './schemas/recipe.schema';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  async createRecipe(@Res() response, @Body() recipe: Recipe) {
    const newRecipe = await this.recipesService.createRecipe(recipe);
    return response.status(HttpStatus.CREATED).json({
      newRecipe,
    });
  }

  @Get()
  async getRecipes(@Res() response) {
    const recipes = await this.recipesService.getRecipes();
    return response.status(HttpStatus.OK).json({
      recipes,
    });
  }

  @Get(':recipeId')
  async getRecipebyId(@Param('recipeId') recipeId: string, @Res() response) {
    const recipe = this.recipesService.getRecipeById(recipeId);
    return response.status(HttpStatus.OK).json({ recipe });
  }

  @Patch(':recipeId')
  async updateRecipe(
    @Res() response,
    @Param('recipeId') recipeId: string,
    @Body() recipe: Recipe,
  ) {
    const updatedBook = this.recipesService.updateRecipe(recipeId, recipe);
    return response.status(HttpStatus.OK).json({ updatedBook });
  }

  @Delete(':recipeId')
  async deleteRecipe(@Res() response, @Param('recipeId') recipeId: string) {
    const deletedRecipe = await this.recipesService.deleteRecipe(recipeId);
    return response.status(HttpStatus.OK).json({
      deletedRecipe,
    });
  }
}
