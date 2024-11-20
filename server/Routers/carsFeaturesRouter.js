const express = require("express");
const carFeaturesBLL = require("../BLL/carFeaturesBLL");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const carsFeatures = await carFeaturesBLL.getAllFeatures();
    res.send(carsFeatures);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const feature = await carFeaturesBLL.getFeatureById(id);
    res.send(feature);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await carFeaturesBLL.addFeature(obj);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await carFeaturesBLL.updateFeature(id, obj);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await carFeaturesBLL.deleteFeature(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
