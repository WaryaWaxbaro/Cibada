
var nDate = new Date();

var nYear= nDate.getFullYear();

const thisMonth = 3;

function convertTime(h,m) {
  if(h < 10){
    h = '0' + h;
  }
  if(m < 10){
    m = '0' + m;
  }
}

function headDetails(){
  var monthNames = new Array("Muharram","Safar","Rabi'ul Awwal","Rabi'ul Akhir",
  "Jumadal Ula","Jumadal Akhira","Rajab","Sha'ban",
  "Ramadan","Shawwal","Dhul Qa'ada","Dhul Hijja");
  var monthsEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];
  var monthsFin = ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu',
  'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'];
  document.getElementById('currenttime').textContent = monthsEng[thisMonth - 1] +
  "/" + monthsFin[thisMonth - 1] + " " + nYear;
  var options = {year:'numeric', month:'2-digit', day:'2-digit',  weekday:'long'};
  var nDateFirst = new Date(nYear + "-" + thisMonth + "-" + "01");
  var monthStart = nDateFirst.toLocaleString('en-gb-u-ca-islamic', options);
  var firstIndexStart = monthStart.indexOf("/");
  var foundDateStart = monthStart.substring(firstIndexStart + 1, firstIndexStart + 3);
  var foundMonthStart = parseInt(foundDateStart, 10);
  var foundMonthStartAgain = monthNames[foundMonthStart - 1];

  var nDateLast = new Date(nYear + "-" + thisMonth + "-" + "31");
  var monthStop = nDateLast.toLocaleString('en-gb-u-ca-islamic', options);
  var firstIndexStop = monthStop.indexOf("/");
  var foundDateStop = monthStop.substring(firstIndexStop + 1, firstIndexStop + 3);
  var foundMonthStop = parseInt(foundDateStop, 10);
  var foundMonthStopAgain = monthNames[foundMonthStop - 1];

  if(foundMonthStartAgain !== foundMonthStopAgain){
    document.getElementById('currenthijri').textContent =
    foundMonthStartAgain + " - " + foundMonthStopAgain + " " + monthStart.slice(-4);
  }else{
    document.getElementById('currenthijri').textContent =
    foundMonthStartAgain + " " + monthStart.slice(-4);
  }
}

headDetails();

//Just downloads pdf:form the html page contents.
function printDoc(){
  var contents = document.getElementById("printpdf").innerHTML;
  var printWindow = window.open('', '', 'height=400,width=800');
  //printWindow.document.write('<html><head><title>Skills</title>');
  printWindow.document.write('<html><head><link href="styles/november-style.css" type="text/css" rel="stylesheet" />');
  printWindow.document.write('<title>March</title>');
  printWindow.document.write('</head><body >');
  printWindow.document.write(contents);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.download();
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
    for(var i = 0; i < jsonResult.length; i++){
      var responseMonthId = jsonResult[i]["id"];
      //console.log(responseMonthId);
      if(responseMonthId == 3){
        var resultMonthOfNov = jsonResult[i]["march"];
        //console.log(resultMonthOfNov);
        var monthDayId = resultMonthOfNov[0]["id"];
        var len = resultMonthOfNov.length;
        //console.log("len " + len);
        //console.log(monthDayId);
        for(var j = 0; j < len; j++){
          var monthDayId = resultMonthOfNov[j]["id"];
          var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          var options = {year:'numeric', month:'2-digit', day:'2-digit',  weekday:'long'};
          var counter = (j+1);
          if(monthDayId == counter){
            var nDateNov = new Date(nYear + "-" + thisMonth + "-" + monthDayId);
            //var nDateNov = new Date("2018-11-1");
            //var d = new Date(dateString);
            //var dayName = days[nDateNov.getDay()];
            var nov1fajrh = resultMonthOfNov[j]["fajr"]["hour"];
            var nov1fajrm = resultMonthOfNov[j]["fajr"]["minute"];
            if(nov1fajrh < 10){
              nov1fajrh = '0' + nov1fajrh;
            }
            if(nov1fajrm < 10){
              nov1fajrm = '0' + nov1fajrm;
            }

            var sh = resultMonthOfNov[j]["sunrise"]["hour"];
            var sm = resultMonthOfNov[j]["sunrise"]["minute"];
            if(sh < 10){
              sh = '0' + sh;
            }
            if(sm < 10){
              sm = '0' + sm;
            }

            var zh = resultMonthOfNov[j]["zuhr"]["hour"];
            var zm = resultMonthOfNov[j]["zuhr"]["minute"];
            if(zh < 10){
              zh = '0' + zh;
            }
            if(zm < 10){
              zm = '0' + zm;
            }

            var ash = resultMonthOfNov[j]["asr"]["hour"];
            var asm = resultMonthOfNov[j]["asr"]["minute"];
            if(ash < 10){
              ash = '0' + ash;
            }
            if(asm < 10){
              asm = '0' + asm;
            }

            var mgh = resultMonthOfNov[j]["magrib"]["hour"];
            var mgm= resultMonthOfNov[j]["magrib"]["minute"];
            if(mgh < 10){
              mgh = '0' + mgh;
            }
            if(mgm < 10){
              mgm = '0' + mgm;
            }

            var ish = resultMonthOfNov[j]["isha"]["hour"];
            var ism = resultMonthOfNov[j]["isha"]["minute"];
            if(ish < 10){
              ish = '0' + ish;
            }
            if(ism < 10){
              ism = '0' + ism;
            }

            var localeOptions = nDateNov.toLocaleString('en-gb-u-ca-islamic', options);
            var firstIndex = localeOptions.indexOf(",");
            var secondIndex = localeOptions.indexOf("/");
            var foundDate = localeOptions.substring(firstIndex, secondIndex);


            document.getElementById('dec'+counter+'date').textContent = monthDayId + "." + thisMonth;
            document.getElementById('dec'+counter+'day').textContent = days[nDateNov.getDay()];
            document.getElementById('dec'+counter+'fajr').textContent = nov1fajrh + ":" + nov1fajrm;
            document.getElementById('dec'+counter+'sunrise').textContent = sh + ":" + sm;
            document.getElementById('dec'+counter+'zuhr').textContent = zh + ":" + zm;
            document.getElementById('dec'+counter+'asr').textContent = ash + ":" + asm;
            document.getElementById('dec'+counter+'magrib').textContent = mgh + ":" + mgm;
            document.getElementById('dec'+counter+'isha').textContent = ish + ":" + ism;
            document.getElementById('dec'+counter+'hijri').textContent = foundDate.substring(1, 5);
          }

        }
      }
    }

  }
};
xmlhttp.open("GET", "json/salaahtime.json", true);
xmlhttp.send();
