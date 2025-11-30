const Variable = require("../models/variableSchema");

exports.createVariable = async (req, res) => {
  try {
    const { key, value, userId } = req.body;
    const newVariable = await Variable.create({ userId, key, value });
    return res.send({ newVariable });
  } catch (e) {
    return res.send(e.message);
  }
};

exports.getAllVariable = async (req, res) => {
  try {
    const { userId } = req.query;

    const allVariables = await Variable.find({ userId });
    return res.send(allVariables);
  } catch (e) {
    return res.send(e.message);
  }
};
exports.editVariable = async (req, res) => {
  try {
    const { key, value } = req.body;
    const updatedVariable = await Variable.findByIdAndUpdate(req.params.id, {
      key,
      value,
    });
    return res.send({ updatedVariable });
  } catch (e) {
    return res.send(e.message);
  }
};

exports.deleteVariable = async (req, res) => {
  try {
    const deletedVariable = await Variable.findByIdAndDelete(req.params.id);
    return res.send({ deletedVariable });
  } catch (e) {
    return res.send(e.message);
  }
};
