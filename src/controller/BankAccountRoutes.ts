import { Router } from 'express';
import { createBankAccount, findAllBankAccounts, findBankAccountById, findBankAccountByIdAndDelete, findBankAccountByIdAndUpdate } from '../useCases/BankAccountUseCase';

export const BankAccountRoutes = Router();

BankAccountRoutes.get('/', async (req, res) => {
  const result = await findAllBankAccounts()

  res.send(result);
});

BankAccountRoutes.get('/:id', async (req, res) => {
    const id = req.params.id
    const result = await findBankAccountById(id)
    res.send(result);
});

BankAccountRoutes.post('/', async (req, res) => {
    const name = req.body.name
    const balance = req.body.balance
    const result = await createBankAccount(name, balance)
    res.send(result);
});

BankAccountRoutes.delete('/:id', async (req, res) => {
    const id = req.params.id
    const result = await findBankAccountByIdAndDelete(id)
    res.send(result);
});

BankAccountRoutes.put('/:id', async (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const balance = req.body.balance
    const result = await findBankAccountByIdAndUpdate(id, {name, balance})
    res.send(result);
});