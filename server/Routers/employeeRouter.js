const express = require("express");
const employeeBLL = require("../BLL/employeeBLL");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const employees = await employeeBLL.getAllEmployees();
    res.send(employees);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeBLL.getEmployeeById(id);
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const result = await employeeBLL.addEmployee(obj);
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
    const result = await employeeBLL.updateEmployee(id, obj);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await employeeBLL.deleteEmployee(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
