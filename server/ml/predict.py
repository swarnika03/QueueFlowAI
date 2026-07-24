# import joblib
# import sys

# model=joblib.load("eta_model.pkl")

# peopleAhead=int(sys.argv[1])
# activeCounters=int(sys.argv[2])
# hour=int(sys.argv[3])

# prediction=model.predict([[peopleAhead,activeCounters,hour]])

# print(round(float(prediction[0]),2))



# 2


# import joblib
# import sys

# model = joblib.load("eta_model.pkl")

# peopleAhead = int(sys.argv[1])
# activeCounters = int(sys.argv[2])
# hour = int(sys.argv[3])

# prediction = model.predict([
#     [
#         peopleAhead,
#         activeCounters,
#         hour
#     ]
# ])

# eta = max(0, round(float(prediction[0])))

# print(eta)



# 3


# import os
# import sys
# import joblib
# import pandas as pd
# # Folder containing predict.py
# BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# # Full path to the model
# MODEL_PATH = os.path.join(BASE_DIR, "eta_model.pkl")

# # Load model
# model = joblib.load(MODEL_PATH)

# peopleAhead = int(sys.argv[1])
# activeCounters = int(sys.argv[2])
# hour = int(sys.argv[3])

# # prediction = model.predict([
# #     [
# #         peopleAhead,
# #         activeCounters,
# #         hour
# #     ]
# # ])
# import pandas as pd

# sample = pd.DataFrame({
#     "peopleAhead": [peopleAhead],
#     "activeCounters": [activeCounters],
#     "hour": [hour]
# })

# prediction = model.predict(sample)

# eta = max(0, round(float(prediction[0])))

# print(eta)


import os
import sys
import joblib
import pandas as pd

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH = os.path.join(BASE_DIR,"eta_model.pkl")

model = joblib.load(MODEL_PATH)

peopleAhead = int(sys.argv[1])

activeCounters = int(sys.argv[2])

hour = int(sys.argv[3])

dayOfWeek = int(sys.argv[4])

queueLength = int(sys.argv[5])

sample = pd.DataFrame({

    "peopleAhead":[peopleAhead],

    "activeCounters":[activeCounters],

    "hour":[hour],

    "dayOfWeek":[dayOfWeek],

    "queueLength":[queueLength]

})

prediction = model.predict(sample)

eta = max(0,round(float(prediction[0])))

print(eta)