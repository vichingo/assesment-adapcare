import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
  @Prop()
  recipeId: string;

  @Prop()
  title: string;

  @Prop()
  bookmarked: boolean;

  @Prop()
  imageUrl: string;

  @Prop()
  veg: boolean;

  @Prop()
  servings: number;

  @Prop()
  description: string;

  @Prop({ type: Date, required: true, default: () => new Date() })
  created: Date;

  @Prop([String])
  instructions: string[];

  @Prop([String])
  ingredients: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
