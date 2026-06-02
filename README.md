
## 現在幾點? 
@EJ0917 ➜ /workspaces/ai-agent-js (HW4) $ node function_call.js 

[呼叫 tool] get_current_time({})
現在是 2026/6/2 下午 3:22:32（台灣時間）。需要我以 24 小時制顯示或換算到其他時區嗎？


##台北天氣如何?
@EJ0917 ➜ /workspaces/ai-agent-js (HW4) $ node function_call.js 

[呼叫 tool] get_weather({"city":"Taipei"})
台北現在多雲、氣溫約 33.3°C，濕度 55%。偏熱，外出請注意補水與防曬；若會長時間待戶外或騎車，建議備遮陽或薄外套。要我幫你查今天未來幾小時或一週的天氣預報嗎？

## 現在幾點? 台北天氣如何?
@EJ0917 ➜ /workspaces/ai-agent-js (HW4) $ node function_call.js 

[呼叫 tool] get_current_time({})

[呼叫 tool] get_weather({"city":"Taipei"})
現在台灣時間是 2026/6/2 下午 3:23（15:23）。台北目前天氣：多雲，溫度約 33.3°C，相對濕度 55%。需要我幫你查接下來幾小時或明天的天氣預報，或提醒你外出注意事項（比如防曬或補水）嗎？