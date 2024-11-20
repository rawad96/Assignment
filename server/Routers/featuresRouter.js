const express = require("express");
const featuresBLL = require("../BLL/featuresBLL");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const features = await featuresBLL.getAllFeatures();
    res.send(features);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const feature = await featuresBLL.getFeatureById(id);
    res.send(feature);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await featuresBLL.addFeature(obj);
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
    const result = await featuresBLL.updateFeature(id, obj);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await featuresBLL.deleteFeature(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
