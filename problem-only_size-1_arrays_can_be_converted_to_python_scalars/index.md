# PythonTypeError：Only size-1 arrays can be converted to Python scalars


Here are the sorce code: Calculate something to NTH power

```
import math
import matplotlib.pyplot as plt
plt.rcParams['font.sans-serif'] = ['SimHei']
r = np.arange(0, 1, 0.01)
T_0 = pow(math.sqrt(1-pow(r,2)),-1) #error list
L_0 = math.sqrt(1-pow(r,2)) #error list
```

And the Error message:

```
TypeError: only size-1 arrays can be converted to Python scalars
```

SOLUTION: 

Change the 'math' package to the "numpy" package. Here are the code:

```
import numpy as np
...
T_0 = pow(np.sqrt(1-pow(r,2)),-1) #error list
L_0 = np.sqrt(1-pow(r,2)) #error list
```

Compile successfully.
