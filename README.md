# Players Local Analytics

## Setup

1. Install dependencies:
```
npm install
```

2. Run MongoDB into CMD System:
```
mongosh
```

3. Insert sample data:
```
use playersDB

db.Player.insertMany([
  {
    name: "Lionel Messi",
    team: "Inter Miami",
    position: "FW",
    currentStats: { goals: 10, shots_on_target: 25 }
  },
  {
    name: "Cristiano Ronaldo",
    team: "Al Nassar",
    position: "FW",
    currentStats: { goals: 20, shots_on_target: 25 }
  }
])
```

4. Start server:
```
npm start
```

5. Open:
http://localhost:3000/search-futbol/
