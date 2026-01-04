const Variable = require("../models/variableSchema");

exports.createVariable = async (req, res) => {
  try {
    const { key, value } = req.body;
    const userId = req.userId;

    const newVariable = await Variable.create({ userId, key, value });
    return res.status(201).json(newVariable);
  } catch (e) {
    return res.send(e.message);
  }
};

exports.getAllVariable = async (req, res) => {
  try {
    const userId = req.userId;

    const allVariables = await Variable.find({ userId });
    return res.send(allVariables);
  } catch (e) {
    return res.send(e.message);
  }
};
exports.editVariable = async (req, res) => {
  try {
    const { key, value } = req.body;
    const userId = req.userId;
    const updatedVariable = await Variable.findByIdAndUpdate(
      { _id: req.params.id, userId },
      {
        key,
        value,
      }
    );
    if (!updatedVariable) {
      return res.status(404).json({ message: "Variable not found" });
    }
    return res.send({ updatedVariable });
  } catch (e) {
    return res.send(e.message);
  }
};

exports.deleteVariable = async (req, res) => {
  try {
    const userId = req.userId;

    const deletedVariable = await Variable.findByIdAndDelete({
      _id: req.params.id,
      userId,
    });
    return res.send({ deletedVariable });
  } catch (e) {
    return res.send(e.message);
  }
};
