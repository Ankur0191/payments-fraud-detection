from fastapi import FastAPI
from routes import transactions
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the transaction route
app.include_router(transactions.router)

@app.get("/")
async def root():
    return {"message": "Fraud Detection API Running"}
