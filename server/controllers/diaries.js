const Diary = require("../models/Diary");

async function index(req, res) {
  try {
    const diaries = await Diary.getAll();
    console.log(diaries);

    // if (diaries.length === 0) {
    //   return res.status(200).json({
    //     message: "No diary entries found",
    //     data: [],
    //   });
    // }

    // res.status(200).json({
    //     data: diaries
    // });
    res.status(200).json(diaries)
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function show(req, res) {
  try {
    const id = req.params.id;
    const diaries = await Diary.getOneById(id);
    res.status(200).json(diaries);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    const newDiary = await Diary.create(data);
    res.status(201).json(newDiary);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function update(req, res) {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const diaryItem = await Diary.getOneById(id);
    const result = await diaryItem.update(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id;
    const diaryItem = await Diary.getOneById(id);
    const result = await diaryItem.destroy();
    res.sendStatus(204);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
