const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  description: { type: String, required: true },
  status: { type: Boolean },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    autopopulate: true,
  },
});

TaskSchema.plugin(require("mongoose-autopopulate"));

module.exports = model("Task", TaskSchema);
