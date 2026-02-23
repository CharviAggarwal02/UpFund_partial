from fastapi import APIRouter
from ml.predict import predict_success

router = APIRouter()

@router.post("/predict")
def predict(goal: float, duration: int):
    return {"success_probability": predict_success(goal, duration)}
