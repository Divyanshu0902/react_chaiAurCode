## Imp pt regarding the NAMING of components :

- React treats lowercase tags like normal HTML elements (`<div>, <p>,` etc.), not custom components.
- So, In React, component names must start with a capital letter.<br><br>

- Example :<br>
This naming of the component **"card"** is : **WRONG**
```
import card from '../components/Card'
.
.
<card />
```

While naming it as **"Card"** is : **RIGHT**
```
import Card from '../components/Card'
.
.
<Card />
```
