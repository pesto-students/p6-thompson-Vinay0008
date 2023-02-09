import mongoose from 'mongoose'

const incomeSchema = new mongoose.Schema({
  assetType: { type: String },
  amount: { type: Number },
  year: { type: Number },
  month: { type: String },
}, { timestamps: true })

const expenseSchema = new mongoose.Schema({
  expenseType: { type: String },
  amount: { type: Number },
  year: { type: Number },
  month: { type: String },
}, { timestamps: true })

const financeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users',
  },
  income: [incomeSchema],
  expenditure: [expenseSchema],
},
  { timestamps: true },
);

const finances = mongoose.model('finances', financeSchema);

export default finances