const application = require('@nativescript/core/application');
const utils = require('@nativescript/core/utils/android');

const packageName = 'com.google.android.youtube'; // YouTube package name

function getYoutubeUsageTime() {

  const currentTime = new Date().getTime();
  const startTime = currentTime - 24 * 60 * 60 * 1000; // Get data from the last 24 hours

  console.log('\nstart / current time', startTime,' / ', currentTime,'\n');

  const usageStatsManager = utils.getApplicationContext().getSystemService(android.content.Context.USAGE_STATS_SERVICE);

  console.log('\nusageStatsManager', usageStatsManager, '\n');

  const stats = usageStatsManager.queryUsageStats(
    android.app.usage.UsageStatsManager.INTERVAL_DAILY, 
    startTime,
    currentTime
  );

  console.log('\nstats', stats, '\n');
  
  let youtubeUsageTime = 0;

  if (stats) {
    const iterator = stats.iterator();
    while (iterator.hasNext()) {
      const usageStats = iterator.next();
      if (usageStats.getPackageName() === packageName) {
        youtubeUsageTime += usageStats.getTotalTimeInForeground();
      }
    }
  }

  const youtubeUsageTimeInSeconds = Math.round(youtubeUsageTime / 1000);  // Conversion of time from milliseconds to seconds
  
  return youtubeUsageTimeInSeconds;

}

module.exports = {
  getYoutubeUsageTime
};