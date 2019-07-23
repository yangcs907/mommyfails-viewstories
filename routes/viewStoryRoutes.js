const express = require('express');
const router = express.Router();

const Story = require('../models/Story.js');

router.get('test', (req, res) => {
  res.json({ msg: "It works!" })
});

router.get('/view', (req, res) => {
  Story.find()
    .sort({ date: -1 })
    .then(story => res.json(story))
    .catch(err => res.status(404).json({ postsnotfound: "no stories found" }));
});

// router.delete('/story', (req, res) => {
//   Story.findOne({ story: req.params.story})
//     .then(res => {
//       res.json({ msg: "Successfuly deleted" })
//     })
//     .catch(err => {
//       res.json(err)
//     })
// });



module.exports = router;
