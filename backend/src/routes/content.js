const express = require('express');
import Content from '../models/content';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const contents = await Content.find().populate('author', 'username');
    res.json(contents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  const { title, body } = req.body;
  const userId = req.user.userId;

  try {
    const newContent = new Content({
      title,
      body,
      author: userId
    });

    await newContent.save();

    res.status(201).json(newContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;