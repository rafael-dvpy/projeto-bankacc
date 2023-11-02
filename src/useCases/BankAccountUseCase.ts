import { BankAccountModel } from "../models/BankAccountModel";

export async function createBankAccount (name: string, balance: number){
    const result = await BankAccountModel.create({balance, name})

    return result
}

export async function findAllBankAccounts (){
    const result = await BankAccountModel.find()

    return result
}

export async function findBankAccountById (id: string) {
    const result = await BankAccountModel.findById(id)

    return result
}

export async function findBankAccountByIdAndDelete (id: string) {
    const result = await BankAccountModel.findByIdAndDelete(id)

    return result
}

export async function findBankAccountByIdAndUpdate (id: string, changes: object) {
    const result = await BankAccountModel.findByIdAndUpdate(id, changes)

    return result
}
