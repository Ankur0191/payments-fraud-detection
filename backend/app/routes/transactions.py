from fastapi import APIRouter
from models.transaction import Transaction

router = APIRouter()

# Dummy transaction data
transactions = [
    {"id": "TXN001", "user": "John Doe", "amount": 500.0, "risk": "Low"},
    {"id": "TXN002", "user": "Alice Smith", "amount": 2000.0, "risk": "High"},
    {"id": "TXN003", "user": "Bob Johnson", "amount": 1200.0, "risk": "Medium"},
]

@router.get("/api/transactions")
async def get_transactions():
    return transactions
