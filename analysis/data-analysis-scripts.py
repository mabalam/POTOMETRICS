# the purpose of this script is to generate standardized time series plots


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import os

# change data location
df = pd.read_excel('../data/3-mo-treasury.xlsx', sheet_name='historical', parse_dates=['date'])
df.set_index('date', inplace=True)
# change plot title
df.plot(title='3 Month Treasury Rate Over Time', legend=False, color="#050505")
plt.xlabel('Date')
plt.ylabel('%')
plt.grid(True)
# change impage file name
plt.savefig('../images/3-mo-treasury.png')
plt.show()
plt.close()