import mongoose, { Schema } from 'mongoose';

const BankAccount: Schema = new Schema({
  name: String,
  balance: Number
});

export const BankAccountModel = mongoose.model('BankAccount', BankAccount);