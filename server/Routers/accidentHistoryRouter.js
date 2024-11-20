const express = require("express");
const accidentHistoryBLL = require("../BLL/accidentHistoryBLL");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const accidents = await accidentHistoryBLL.getAllAccidents();
    res.send(accidents);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const accident = await accidentHistoryBLL.getAccidentById(id);
    res.send(accident);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await accidentHistoryBLL.addAccident(obj);
    res.status(200).json({ id: result });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await accidentHistoryBLL.updateAccident(id, obj);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await accidentHistoryBLL.deleteAccident(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
