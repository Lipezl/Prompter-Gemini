import { Router } from 'express';
import { processChat } from '../thirdy-party/gemini';

const router = Router();

// CRUD
router.post('/api/v1/chat', async (req, res) => {
    try {
      const {prompt} = req.body;
      const result = await processChat.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      res.json({ response: text });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;