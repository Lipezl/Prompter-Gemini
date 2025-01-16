import { Router } from 'express';
import { chat } from '../services/chatService';

const router = Router();

// CRUD
router.post("/api/v1/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    const text = await chat(prompt);
    res.json({ response: text });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


export default router;