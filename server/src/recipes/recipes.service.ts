import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
  ) {}

  async getRecipeById(recipeId: string): Promise<Recipe> {
    return this.recipeModel.findById({ recipeId });
  }

  async getRecipes(): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }

  async createRecipe(recipe: Recipe): Promise<Recipe> {
    const newRecipe = new this.recipeModel();
    return newRecipe.save();
  }

  async updateRecipe(recipeId: string, recipe: Recipe): Promise<Recipe> {
    return this.recipeModel.findOneAndUpdate({ recipeId }, recipe);
  }

  async deleteRecipe(recipeId: string): Promise<Recipe> {
    return await this.recipeModel.findByIdAndRemove(recipeId);
  }
}
