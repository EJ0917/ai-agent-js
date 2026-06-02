##現在幾點?
@EJ0917 ➜ /workspaces/ai-agent-js (2.5-tool-calling-current-time) $ node function_call.js 

[呼叫 tool] get_current_time({})
現在是 2026/6/2 下午 3:09:34（台灣時間）。需要我幫你設定提醒或查時區換算嗎？

##台北天氣如何?
@EJ0917 ➜ /workspaces/ai-agent-js (2.5-tool-calling-current-time) $ node function_call.js 

[呼叫 tool] get_weather({"city":"Taipei"})
目前台北多雲，氣溫約 33.3°C，濕度 58%。天氣偏悶熱，外出會感覺很熱。

建議：穿著透氣、淺色衣物並多補水；中午陽光與紫外線仍可能強，出門可準備防曬或遮陽；若要長時間戶外活動，考慮待在有冷氣的地方或安排較涼的時段出門。

需要我幫你看未來幾小時的降雨機率或接下來幾天的天氣預報嗎？

##現在幾點? 台北天氣如何?
@EJ0917 ➜ /workspaces/ai-agent-js (2.5-tool-calling-current-time) $ node function_call.js 

[呼叫 tool] get_current_time({})

[呼叫 tool] get_weather({"city":"Taipei"})
現在是 2026/06/02 下午3:10:32（台北時間）。  
台北目前天氣：多雲，氣溫約 33.3°C，濕度 58%。

備註：偏熱，建議多補充水分並注意防曬／防中暑。要我幫你看未來幾小時或幾天的天氣預報、或紫外線指數嗎？
