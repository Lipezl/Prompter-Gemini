import { v4 as uuidv4 } from "uuid";

import { Category } from "../entities/category.entity";
import { NotFoundException } from "../exceptions/not-found.exceptions";

import { UpsertCategory } from "../types/category.type";

import {
  findAllCategories,
  findCategoryById,
  saveCategory,
  removeCategory, 
  resetCategoriesDb
} from "../repositories/category.repository";
import { get } from "http";

const getAllCategories = (): Category[] => findAllCategories();

const createCategory = ({name, description}: UpsertCategory): Category =>{
    const newCategory: Category = Category.create(name, description ?? '');
    const category = saveCategory(newCategory);
    return category;
};

const getCategoryById = (id: string): Category =>{
  const category = findCategoryById(id);
  if(!category){
    throw new NotFoundException(`Category with id ${id} not found`);
  }
  return category;
};

const updateCategory = (id: string, {name, description}: UpsertCategory): Category => {
  const category = findCategoryById(id);
  if (!category) {
    throw new NotFoundException(`Category with id ${id} not found`);
  }
  category.setName(name);
  if(description){
    category.setDescription(description);
  } else {
    category.setDescription('');
  }
  return saveCategory(category);
};

const deleteCategory = (id: string): void =>{
    const template = getCategoryById(id);
    if (!template){
        throw new NotFoundException(`Category with id ${id} not found`);
    }
    removeCategory(id);
};

const resetCategory = (): void => {
  resetCategoriesDb();
};

export {getAllCategories, createCategory, getCategoryById, updateCategory, deleteCategory, resetCategory};