from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import torch
import numpy as np
from model import FitnessPlanModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model
model = FitnessPlanModel(input_size=10, hidden_size=64, num_classes=5)
model.load_state_dict(torch.load('fitness_model.pth'))
model.eval()

class UserData(BaseModel):
    age: int
    weight: float
    height: float
    fitness_level: int
    goals: list[str]
    available_equipment: list[str]
    medical_conditions: list[str]
    weekly_availability: int

class FitnessPlan(BaseModel):
    workout_plan: list[dict]
    equipment_recommendations: list[dict]
    nutrition_tips: list[str]

@app.post("/generate_plan")
async def generate_fitness_plan(user_data: UserData) -> FitnessPlan:
    try:
        # Preprocess user data
        input_tensor = preprocess_user_data(user_data)
        
        # Generate prediction
        with torch.no_grad():
            output = model(input_tensor)
        
        # Convert model output to fitness plan
        plan = create_fitness_plan(output, user_data)
        
        return plan
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def preprocess_user_data(user_data: UserData) -> torch.Tensor:
    # Convert user data to tensor
    features = [
        user_data.age / 100,  # Normalize age
        user_data.weight / 300,  # Normalize weight
        user_data.height / 250,  # Normalize height
        user_data.fitness_level / 5,  # Normalize fitness level
        len(user_data.goals) / 5,  # Normalize goals
        len(user_data.available_equipment) / 10,  # Normalize equipment
        len(user_data.medical_conditions) / 5,  # Normalize medical conditions
        user_data.weekly_availability / 168  # Normalize weekly hours
    ]
    return torch.FloatTensor(features).unsqueeze(0)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000) 