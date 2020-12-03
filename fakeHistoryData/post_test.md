curl -d '{
   "EndDate": "2020-01-17 00:00:00",
   "ForecastArn": "arn:aws:forecast:us-east-2:407507758802:forecast/revenue_forecaster",
   "StartDate": "2019-12-20 00:00:00"
}' -H "Content-Type: application/json" -X POST http://localhost:3000/data