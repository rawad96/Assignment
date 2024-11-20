const express = require("express");
const ModelBLL = require("../BLL/ModelBLL");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const models = await ModelBLL.getAllModels();
    res.json(models);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const model = await ModelBLL.getModelById(id);
    res.send(model);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await ModelBLL.addModel(obj);
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
    const result = await ModelBLL.updateModel(id, obj);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ModelBLL.deleteModel(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
