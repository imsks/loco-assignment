export interface UpdateTransactionByIDBody {
  amount: number
  type: string
  parentId?: number
}

export interface UpdateTransactionByIDPayload extends UpdateTransactionByIDBody {
  transactionId: string
}
