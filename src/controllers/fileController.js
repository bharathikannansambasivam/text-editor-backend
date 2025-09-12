const express = require("express");
const File = require("../models/fileSchema");

exports.createDocument = async (req, res) => {
  try {
    const { title, text } = req.body;
    const newFile = {
      title,
      text,
    };
    const response = await File.create(newFile);
    return res.json({ response });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

exports.getDocument = async (req, res) => {
  try {
    const doc = await File.findById(req.params.id);
    return res.json(doc);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

exports.getDocuments = async (req, res) => {
  try {
    const response = await File.find();
    return res.json(response);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
exports.editDocument = async (req, res) => {
  try {
    const { title, text } = req.body;

    const file = await File.findById(req.params.id);

    if (!file) {
      return res.json({ message: "File not found" });
    }

    file.versions.unshift({ title: file.title, text: file.text });

    if (file.versions.length > 10) file.versions.pop();
    file.title = title;
    file.text = text;
    await file.save();
    return res.json({ file });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
exports.getVersions = async (req, res) => {
  const { id } = req.params;
  const file = await File.findById(id);
  if (!file) return res.json({ message: "Not found" });

  res.json(file.versions);
};

exports.deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await File.findByIdAndDelete(id);
    return res.send(response);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

exports.searchTitle = async (req, res) => {
  const { q } = req.query;

  try {
    const docs = await File.find({
      title: {
        $regex: q,
        $options: "i",
      },
    });
    res.json(docs);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
