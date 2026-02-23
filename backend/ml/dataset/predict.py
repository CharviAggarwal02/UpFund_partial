import joblib

model = joblib.load("ml/model.pkl")

def predict_success(goal: float, duration: int):
    prob = model.predict_proba([[goal, duration]])[0][1]
    return round(prob * 100, 2)

