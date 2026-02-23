from fastapi import APIRouter
from blockchain.generate_hash import generate_transaction_hash

router = APIRouter()

@router.post("/invest")
def invest(startup_id: int, investor_id: int, amount: float):
    investment_data = {
        "startup_id": startup_id,
        "investor_id": investor_id,
        "amount": amount
    }

    tx_hash = generate_transaction_hash(investment_data)

    return {
        "message": "Investment recorded",
        "blockchain_hash": tx_hash
    }
