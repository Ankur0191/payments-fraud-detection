from pydantic import BaseModel

class Transaction(BaseModel):
    id: str
    user: str
    amount: float
    risk: str
