# import pandas as pd
# from sklearn.ensemble import RandomForestRegressor
# import joblib

# # Example training data

# data = pd.DataFrame({
#     "peopleAhead":[0,1,2,3,4,5,6,7,8,9,10],
#     "activeCounters":[3,3,3,3,3,3,3,3,3,3,3],
#     "hour":[9,9,9,10,10,10,11,11,12,12,1],
#     "eta":[0,4,8,11,15,20,23,27,31,36,40]
# })

# X=data[["peopleAhead","activeCounters","hour"]]
# y=data["eta"]

# model=RandomForestRegressor(
#     n_estimators=200,
#     random_state=42
# )

# model.fit(X,y)

# joblib.dump(model,"eta_model.pkl")

# print("Model Saved")




# 2


# import pandas as pd
# import numpy as np
# from sklearn.ensemble import RandomForestRegressor
# import joblib

# np.random.seed(42)

# rows = 5000

# peopleAhead = np.random.randint(0, 40, rows)
# activeCounters = np.random.randint(1, 6, rows)
# hour = np.random.randint(8, 20, rows)

# # Simulated realistic ETA
# eta = (
#     peopleAhead * np.random.uniform(2.8, 4.5, rows) /
#     activeCounters
# )

# # Lunch rush
# eta += np.where((hour >= 12) & (hour <= 14), 5, 0)

# # Evening rush
# eta += np.where((hour >= 17) & (hour <= 19), 7, 0)

# # Random variation
# eta += np.random.normal(0, 2, rows)

# eta = np.clip(eta, 0, None)

# dataset = pd.DataFrame({
#     "peopleAhead": peopleAhead,
#     "activeCounters": activeCounters,
#     "hour": hour,
#     "eta": eta
# })

# dataset.to_csv("queue_dataset.csv", index=False)

# X = dataset[["peopleAhead", "activeCounters", "hour"]]
# y = dataset["eta"]

# model = RandomForestRegressor(
#     n_estimators=300,
#     max_depth=12,
#     random_state=42,
#     n_jobs=-1
# )

# model.fit(X, y)

# joblib.dump(model, "eta_model.pkl")

# print("Model trained successfully.")


import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
import joblib
import os
np.random.seed(42)

ROWS = 50000

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(BASE_DIR, "eta_model.pkl")
# -------------------------------
# Synthetic Features
# -------------------------------

peopleAhead = np.random.randint(0, 51, ROWS)

activeCounters = np.random.randint(1, 6, ROWS)

hour = np.random.randint(8, 21, ROWS)

dayOfWeek = np.random.randint(0, 7, ROWS)

queueLength = peopleAhead + np.random.randint(1, 15, ROWS)

# -------------------------------
# Realistic ETA generation
# -------------------------------

eta = (
    peopleAhead * np.random.uniform(3.2, 5.0, ROWS)
) / activeCounters

# Busy lunch hours
eta += np.where(
    (hour >= 12) & (hour <= 14),
    np.random.uniform(4,7,ROWS),
    0
)

# Busy evening
eta += np.where(
    (hour >= 17) & (hour <= 19),
    np.random.uniform(5,8,ROWS),
    0
)

# Monday rush
eta += np.where(
    dayOfWeek == 1,
    4,
    0
)

# Weekend slightly faster
eta -= np.where(
    (dayOfWeek == 0) | (dayOfWeek == 6),
    2,
    0
)

# Long queues increase waiting
eta += queueLength * np.random.uniform(0.15,0.35,ROWS)

# Random noise
eta += np.random.normal(0,2.0,ROWS)

eta = np.clip(eta,0,None)

# -------------------------------
# Dataset
# -------------------------------

dataset = pd.DataFrame({

    "peopleAhead": peopleAhead,
    "activeCounters": activeCounters,
    "hour": hour,
    "dayOfWeek": dayOfWeek,
    "queueLength": queueLength,
    "eta": eta

})

# dataset.to_csv("queue_dataset.csv",index=False)
dataset.to_csv(
    os.path.join(BASE_DIR, "queue_dataset.csv"),
    index=False
)
# -------------------------------
# Train Model
# -------------------------------

X = dataset[[
    "peopleAhead",
    "activeCounters",
    "hour",
    "dayOfWeek",
    "queueLength"
]]

y = dataset["eta"]

model = RandomForestRegressor(

    n_estimators=500,
    max_depth=18,
    min_samples_leaf=2,
    random_state=42,
    n_jobs=-1

)

model.fit(X,y)


joblib.dump(model, MODEL_PATH)

print("Model Trained Successfully")
print(dataset.head())