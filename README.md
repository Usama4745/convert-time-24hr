# Convert 24h -> 12h
🕒 This is a plugin used to convert time format from 24 hours to 12 hours and vice versa

Contributions are welcome

## How to use

install

```
npm i convert-time-24hr
```

Use

```
const timeFormat=require("convert-time-24hr");
```

```
timeFormat.convertTimeTo24hrs(hours,minutes,seconds,amorpm); // return time in 24 hours format
```

```
timeFormat.convertTimeTo12hrs(hours,minutes,seconds); // return time in 12 hours format
```

run tests

```
npm run test
```