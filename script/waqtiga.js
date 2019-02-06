
var date = new Date();
var dateDay = date.getDate();
var dateMonth = (date.getMonth()+1);
var dateYear = date.getFullYear();
var dateHour = date.getHours();
var dateMinute = date.getMinutes();
var dateSeconds = date.getSeconds();

//Setting extra days by adding numbers to current date
var dayPlus1 = addDays(date, 1);
var dayPlus2 = addDays(date, 2);
var dayPlus3 = addDays(date, 3);
var dayPlus4 = addDays(date, 4);
var dayPlus5 = addDays(date, 5);
var dayPlus6 = addDays(date, 6);
var dayPlus7 = addDays(date, 7);
var dayPlus8 = addDays(date, 8);
var dayPlus9 = addDays(date, 9);
var dayPlus10 = addDays(date, 10);

//Showing time function
function showTime(){
  var currentDate = dateDay + '.' + dateMonth + '.' + dateYear;
  var timeCurrent = (dateHour<10?'0':'') +
  dateHour + ':'+ (date.getMinutes()<10?'0':'') + dateMinute + ':' +
  (date.getSeconds()<10?'0':'') + dateSeconds;

  document.getElementById('currenttime').textContent = 'Today: ' + currentDate;
  //document.getElementById('currenttime').textContent = 'Today: ' +
  //currentDate + ' ' + ' ' + (date.getHours()<10?'0':'') + date.getHours() + ':' +
  //(date.getMinutes()<10?'0':'')+ date.getMinutes() + ':' +
  //(date.getSeconds()<10?'0':'') + date.getSeconds();
  setInterval(showTime, 1000);
}
/*(function a(x) {
    // The following condition
    // is the base case.
    var currentDate = dateDay + '.' + dateMonth + '.' + dateYear;
    var timeCurrent = (dateHour<10?'0':'') +
    dateHour + ':'+ (date.getMinutes()<10?'0':'') + dateMinute + ':' +
    (date.getSeconds()<10?'0':'') + dateSeconds;

    document.getElementById('currenttime').innerHTML = 'Today: ' + currentDate +
    ' ' + ' ' + timeCurrent;
    if ( ! x) {
        return;
    }
    a(--x);
})(1);*/
//Displaying date and time
showTime();
//Adding zero if hour/minute < '0'
function convertTime(h,m) {
  if(h < 10){
    h = '0' + h;
  }
  if(m < 10){
    m = '0' + m;
  }
}
//Adds days to current date
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
//Getting Json days of the month by id
function todaysTime(x){

  var fajr,fajrHour,fajrMinute,sunrise,sunriseHour,sunriseMinute,
  zuhr,zuhrHour,zuhrMinute,asr,asrHour,asrMinute,magrib,
  magribHour,magribMinute,isha,ishaHour,ishaMinute;

  //Looping of the json month
  for(var i = 0; i < x.length; i++){
    //Get month days by id
    var dayId = x[i]["id"];
    //Checking if the id is equal to today's date
    if(dayId == dateDay){
      //For debugging
      console.log("fajr time: " + x[i]["fajr"]["hour"] + ":" + x[i]["fajr"]["minute"]);
      //Setting fajr hour and minute to the corresponding id which is same as
      //The date of the day
      fajrHour = x[i]["fajr"]["hour"];
      fajrMinute = x[i]["fajr"]["minute"];
      //Adding '0' before the hour/minute if result time < 10
      if(fajrHour < 10){
        fajrHour = '0' + fajrHour;
      }
      if(fajrMinute < 10){
        fajrMinute = '0' + fajrMinute;
      }
      //Displaying time
      fajr = fajrHour + ":" + fajrMinute;
      //Same as above
      sunriseHour = x[i]["sunrise"]["hour"];
      sunriseMinute = x[i]["sunrise"]["minute"];
      if(sunriseHour < 10){
        sunriseHour = '0' + sunriseHour;
      }
      if(sunriseMinute < 10){
        sunriseMinute = '0' + sunriseMinute;
      }
      sunrise = sunriseHour + ":" + sunriseMinute;

      zuhrHour = x[i]["zuhr"]["hour"];
      zuhrMinute = x[i]["zuhr"]["minute"];
      if(zuhrHour < 10){
        zuhrHour = '0' + zuhrHour;
      }
      if(zuhrMinute < 10){
        zuhrMinute = '0' + zuhrMinute;
      }
      zuhr = zuhrHour + ":" + zuhrMinute;

      asrHour = x[i]["asr"]["hour"];
      asrMinute = x[i]["asr"]["minute"];
      if(asrHour < 10){
        asrHour = '0' + asrHour;
      }
      if(asrMinute < 10){
        asrMinute = '0' + asrMinute;
      }
      asr = asrHour + ":" + asrMinute;

      magribHour = x[i]["magrib"]["hour"];
      magribMinute = x[i]["magrib"]["minute"];
      if(magribHour < 10){
        magribHour = '0' + magribHour;
      }
      if(magribMinute < 10){
        magribMinute = '0' + magribMinute;
      }
      magrib = magribHour + ":" + magribMinute;

      ishaHour = x[i]["isha"]["hour"];
      ishaMinute = x[i]["isha"]["minute"];
      if(ishaHour < 10){
        ishaHour = '0' + ishaHour;
      }
      if(ishaMinute < 10){
        ishaMinute = '0' + ishaMinute;
      }
      isha = ishaHour + ":" + ishaMinute;

      //Assigning the result to html elements by id
      document.getElementById('fajr').textContent = fajr;
      document.getElementById('sunrise').textContent = sunrise;
      document.getElementById('zuhr').textContent = zuhr;
      document.getElementById('asr').textContent = asr;
      document.getElementById('magrib').textContent = magrib;
      document.getElementById('isha').textContent = isha;
    }
  }
}
//Getting json data by date after adding a day to the current date
function extraTimes1(x){
  //Array of the days
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //Looping json day of the month by id
  for(var i = 0; i < x.length; i++){
    //Getting id of the day from the json month
    var dayId = x[i]["id"];
    //Checking if the id of the month is equal when current date is added to 1
    if(dayId == (dayPlus1.getDate())){
      //Getting the name of the day
      var dayName = days[dayPlus1.getDay()];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;
      console.log("Somthimg is printing");
      document.getElementById('day1date').textContent = dayPlus1.getDate() +
      "." + (dayPlus1.getMonth()+1);
      document.getElementById('day1day').textContent = dayName;
      document.getElementById('day1fajr').textContent = fj;
      document.getElementById('day1sunrise').textContent = sr;
      document.getElementById('day1zuhr').textContent = zr;
      document.getElementById('day1asr').textContent = asr;
      document.getElementById('day1magrib').textContent = mag;
      document.getElementById('day1isha').textContent = isha;
      var idate = kuwaiticalendar(1);
      document.getElementById('day1hijri').textContent = idate[5];
    }
  }
}
//Getting json data by date after adding 2 days to the current date
function extraTimes2(x){

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for(var i = 0; i < x.length; i++){

    var dayId = x[i]["id"];

    if(dayId == (dayPlus2.getDate())){
      var dayName = days[dayPlus2.getDay()];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;

      document.getElementById('day2date').textContent = dayPlus2.getDate() +
      "." + (dayPlus2.getMonth()+1);
      document.getElementById('day2day').textContent = dayName;
      document.getElementById('day2fajr').textContent = fj;
      document.getElementById('day2sunrise').textContent = sr;
      document.getElementById('day2zuhr').textContent = zr;
      document.getElementById('day2asr').textContent = asr;
      document.getElementById('day2magrib').textContent = mag;
      document.getElementById('day2isha').textContent = isha;
      var idate = kuwaiticalendar(2);
      document.getElementById('day2hijri').textContent = idate[5];
    }
  }
}
//Getting json data by date after adding 3 days to the current date
function extraTimes3(x){

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for(var i = 0; i < x.length; i++){

    var dayId = x[i]["id"];

    if(dayId == (dayPlus3.getDate())){
      var dayName = days[dayPlus3.getDay()];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;

      document.getElementById('day3date').textContent = dayPlus3.getDate() +
      "." + (dayPlus3.getMonth()+1);
      document.getElementById('day3day').textContent = dayName;
      document.getElementById('day3fajr').textContent = fj;
      document.getElementById('day3sunrise').textContent = sr;
      document.getElementById('day3zuhr').textContent = zr;
      document.getElementById('day3asr').textContent = asr;
      document.getElementById('day3magrib').textContent = mag;
      document.getElementById('day3isha').textContent = isha;
      var idate = kuwaiticalendar(3);
      document.getElementById('day3hijri').textContent = idate[5];
    }
  }
}
//Getting json data by date after adding 4 days to the current date
function extraTimes4(x){

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for(var i = 0; i < x.length; i++){

    var dayId = x[i]["id"];

    if(dayId == (dayPlus4.getDate())){
      var dayName = days[dayPlus4.getDay()];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;

      document.getElementById('day4date').textContent = dayPlus4.getDate() +
      "." + (dayPlus4.getMonth()+1);
      document.getElementById('day4day').textContent = dayName;
      document.getElementById('day4fajr').textContent = fj;
      document.getElementById('day4sunrise').textContent = sr;
      document.getElementById('day4zuhr').textContent = zr;
      document.getElementById('day4asr').textContent = asr;
      document.getElementById('day4magrib').textContent = mag;
      document.getElementById('day4isha').textContent = isha;
      var idate = kuwaiticalendar(4);
      document.getElementById('day4hijri').textContent = idate[5];
    }
  }
}
//Getting json data by date after adding 5 days to the current date
function extraTimes5(x){

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for(var i = 0; i < x.length; i++){

    var dayId = x[i]["id"];

    if(dayId == (dayPlus5.getDate())){
      var dayName = days[dayPlus5.getDay()];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;

      document.getElementById('day5date').textContent = dayPlus5.getDate() +
      "." + (dayPlus5.getMonth()+1);
      document.getElementById('day5day').textContent = dayName;
      document.getElementById('day5fajr').textContent = fj;
      document.getElementById('day5sunrise').textContent = sr;
      document.getElementById('day5zuhr').textContent = zr;
      document.getElementById('day5asr').textContent = asr;
      document.getElementById('day5magrib').textContent = mag;
      document.getElementById('day5isha').textContent = isha;
      var idate = kuwaiticalendar(5);
      document.getElementById('day5hijri').textContent = idate[5];
    }
  }
}
//Getting json data by date after adding 6 days to the current date
function extraTimes6(x){

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for(var i = 0; i < x.length; i++){

    var dayId = x[i]["id"];

    if(dayId == (dayPlus6.getDate())){

      var dayName = days[dayPlus6.getDay()];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;

      document.getElementById('day6date').textContent = dayPlus6.getDate() +
      "." + (dayPlus6.getMonth()+1);
      document.getElementById('day6day').textContent = dayName;
      document.getElementById('day6fajr').textContent = fj;
      document.getElementById('day6sunrise').textContent = sr;
      document.getElementById('day6zuhr').textContent = zr;
      document.getElementById('day6asr').textContent = asr;
      document.getElementById('day6magrib').textContent = mag;
      document.getElementById('day6isha').textContent = isha;
      var idate = kuwaiticalendar(6);
      document.getElementById('day6hijri').textContent = idate[5];
    }
  }
}
//Getting json data by date after adding 7 days to the current date
function extraTimes7(x){

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for(var i = 0; i < x.length; i++){

    var dayId = x[i]["id"];

    if(dayId == (dayPlus7.getDate())){

      var dayName = days[dayPlus7.getDay()];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;

      document.getElementById('day7date').textContent = dayPlus7.getDate() +
      "." + (dayPlus7.getMonth()+1);
      document.getElementById('day7day').textContent = dayName;
      document.getElementById('day7fajr').textContent = fj;
      document.getElementById('day7sunrise').textContent = sr;
      document.getElementById('day7zuhr').textContent = zr;
      document.getElementById('day7asr').textContent = asr;
      document.getElementById('day7magrib').textContent = mag;
      document.getElementById('day7isha').textContent = isha;
      var idate = kuwaiticalendar(7);
      document.getElementById('day7hijri').textContent = idate[5];
    }
  }
}
//Getting json data by date after adding 8 days to the current date
function extraTimes8(x){

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for(var i = 0; i < x.length; i++){

    var dayId = x[i]["id"];

    if(dayId == (dayPlus8.getDate())){

      var dayName = days[dayPlus8.getDay()];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;

      document.getElementById('day8date').textContent = dayPlus8.getDate() +
      "." + (dayPlus8.getMonth()+1);
      document.getElementById('day8day').textContent = dayName;
      document.getElementById('day8fajr').textContent = fj;
      document.getElementById('day8sunrise').textContent = sr;
      document.getElementById('day8zuhr').textContent = zr;
      document.getElementById('day8asr').textContent = asr;
      document.getElementById('day8magrib').textContent = mag;
      document.getElementById('day8isha').textContent = isha;
      var idate = kuwaiticalendar(8);
      document.getElementById('day8hijri').textContent = idate[5];
    }
  }
}
//Getting json data by date after adding 9 days to the current date
function extraTimes9(x){

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for(var i = 0; i < x.length; i++){

    var dayId = x[i]["id"];

    if(dayId == (dayPlus9.getDate())){

      var dayName = days[dayPlus9.getDay()];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;

      document.getElementById('day9date').textContent = dayPlus9.getDate() +
      "." + (dayPlus9.getMonth()+1);
      document.getElementById('day9day').textContent = dayName;
      document.getElementById('day9fajr').textContent = fj;
      document.getElementById('day9sunrise').textContent = sr;
      document.getElementById('day9zuhr').textContent = zr;
      document.getElementById('day9asr').textContent = asr;
      document.getElementById('day9magrib').textContent = mag;
      document.getElementById('day9isha').textContent = isha;
      var idate = kuwaiticalendar(9);
      document.getElementById('day9hijri').textContent = idate[5];
    }
  }
}
//Getting json data by date after adding 10 days to the current date
function extraTimes10(x){

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for(var i = 0; i < x.length; i++){

    var dayId = x[i]["id"];

    if(dayId == (dayPlus10.getDate())){

      var dayName = days[dayPlus10.getDay()];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;

      document.getElementById('day10date').textContent = dayPlus10.getDate() +
      "." + (dayPlus10.getMonth()+1);
      document.getElementById('day10day').textContent = dayName;
      document.getElementById('day10fajr').textContent = fj;
      document.getElementById('day10sunrise').textContent = sr;
      document.getElementById('day10zuhr').textContent = zr;
      document.getElementById('day10asr').textContent = asr;
      document.getElementById('day10magrib').textContent = mag;
      document.getElementById('day10isha').textContent = isha;
      var idate = kuwaiticalendar(10);
      document.getElementById('day10hijri').textContent = idate[5];
    }
  }
}

function testExtraTimes10(x){

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  for(var i = 0; i < x.length; i++){

    var dayId = x[i]["id"];

    if(dayId == dateDay){

      //var dayName = days[1];

      var fH = x[i]["fajr"]["hour"];
      var fM = x[i]["fajr"]["minute"];
      if(fH < 10){
        fH = '0' + fH;
      }
      if(fM < 10){
        fM = '0' + fM;
      }
      var fj = fH + ":" + fM;

      var sH = x[i]["sunrise"]["hour"];
      var sM = x[i]["sunrise"]["minute"];
      if(sH < 10){
        sH= '0' + sH;
      }
      if(sM < 10){
        sM = '0' + sM;
      }
      var sr = sH + ":" + sM;

      var zH = x[i]["zuhr"]["hour"];
      var zM = x[i]["zuhr"]["minute"];
      if(zH < 10){
        zH = '0' + zH;
      }
      if(zM < 10){
        zM = '0' + zM;
      }
      var zr = zH + ":" + zM;

      var asrH = x[i]["asr"]["hour"];
      var asrM = x[i]["asr"]["minute"];
      if(asrH < 10){
        asrH = '0' + asrH;
      }
      if(asrM < 10){
        asrM = '0' + asrM;
      }
      asr = asrH + ":" + asrM;

      var mH = x[i]["magrib"]["hour"];
      var mM = x[i]["magrib"]["minute"];
      if(mH < 10){
        mH = '0' + mH;
      }
      if(mM < 10){
        mM = '0' + mM;
      }
      mag = mH + ":" + mM;

      var ishaH = x[i]["isha"]["hour"];
      var ishaM = x[i]["isha"]["minute"];
      if(ishaH < 10){
        ishaH = '0' + ishaH;
      }
      if(ishaM < 10){
        ishaM = '0' + ishaM;
      }
      isha = ishaH + ":" + ishaM;

      console.log("Fajr : " + fj);
      console.log("zuhr : " + zr);
      console.log("asr : " + asr);
      console.log("Mag : " + mag);
    }
  }
}

function getByMonth(id,month){
  const monthNames = ["january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"];
  for(var i = 0; i < id.length; i++){
    var monthId = id[i]["id"];
    if(monthId == month){
      return id[i][monthNames[monthId - 1]];
    }
  }
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //Displaying date and time
    //showTime();
    //Parsing JSON data
    //var response = JSON.parse(xmlhttp.responseText);
    var response = JSON.parse(xmlhttp.responseText);
    //Returned result of json data
    var jsonResult = response.months;
    //Getting returned json result by date
    todaysTime(getByMonth(jsonResult, dateMonth));
    extraTimes1(getByMonth(jsonResult, (dayPlus1.getMonth()+1)));
    extraTimes2(getByMonth(jsonResult, (dayPlus2.getMonth()+1)));
    extraTimes3(getByMonth(jsonResult, (dayPlus3.getMonth()+1)));
    extraTimes4(getByMonth(jsonResult, (dayPlus4.getMonth()+1)));
    extraTimes5(getByMonth(jsonResult, (dayPlus5.getMonth()+1)));
    extraTimes6(getByMonth(jsonResult, (dayPlus6.getMonth()+1)));
    extraTimes7(getByMonth(jsonResult, (dayPlus7.getMonth()+1)));
    extraTimes8(getByMonth(jsonResult, (dayPlus8.getMonth()+1)));
    extraTimes9(getByMonth(jsonResult, (dayPlus9.getMonth()+1)));
    extraTimes10(getByMonth(jsonResult, (dayPlus10.getMonth()+1)));

    document.getElementById('currenthijri').textContent = writeIslamicDate();

    //testExtraTimes10(getByMonth(jsonResult, dateMonth + 1));
  }
};
xmlhttp.open("GET", "json/salaahtime.json", true);
xmlhttp.send();
