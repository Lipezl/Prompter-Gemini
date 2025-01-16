import { Router } from "express";
import { NotFoundException } from "../exceptions/not-found.exceptions";
import {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";

const router = Router();

//CRUD
router.get('/categories', (req, res)=>{
    res.json(getAllCategories());
});

router.post('/categories', (req, res)=>{
    const { name, description } = req.body;
    res.status(201).json(createCategory({name, description}));
});

router.get('/categories/:id', (req, res)=>{
    try {
        const category = getCategoryById(req.params.id);
        res.json(category);
    } catch (error: any){
        res.status(404).json({message: error.message});
    }
});

router.put('/categories/:id', (req, res)=>{
    try{
        const {id} = req.params;
        const {name, description} = req.body;
        const category = updateCategory(id, {name, description});
        res.json(category);
    } catch (error: any){
        res.status(500).json({message: error.message});
    }
});

router.delete('/categories/:id', (req, res)=>{
    try{
        const category = deleteCategory(req.params.id);
        res.json(category);
    } catch (error: any) {
        if (error instanceof NotFoundException) {
          res.status(404)
            .json({ message: error.message });
        } else {
          res.status(500)
            .json({ message: `Unexpected error: ${error.message}` });
        } 
      }
});

export default router;