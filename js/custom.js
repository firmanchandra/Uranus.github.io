/* --- A place where you can add your own code -- */
var config = {
  apiKey: "AIzaSyCx34J59WQU--NkOZDC_gpyJFCMtR3K5dY",
    authDomain: "uranus-3b2fa.firebaseapp.com",
    databaseURL: "https://uranus-3b2fa.firebaseio.com",
    projectId: "uranus-3b2fa",
    storageBucket: "uranus-3b2fa.appspot.com",
    messagingSenderId: "592979118364",
    appId: "1:592979118364:web:02d4a00eaa36f7d9c152d9"

};

firebase.initializeApp(config);

var database = firebase.database();
var uid;

/*
$('#obj-dpvblq111').remove(function(e){
  regis = $('#obj-dpvblq111-sn').val();
  var messageListRef = firebase.database().ref(regis); 
  messageListRef.remove()
}); */     
$('#obj-dpvblq111').submit(function(e){
regis = $('#obj-dpvblq111-sn').val();
var messageListRef = firebase.database().ref(regis);
messageListRef.set({
    "a1" : 0,
    "a2" : 0,
    "kwh1" : 0,
    "kwh2" : 0,
    "lampone" : 0,
    "lamptwo" : 0,
    "notifsta" : 0,
    "timeroneh" : 0,
    "timeronem" : 0,
    "timeronenh" : 0,
    "timeronenm" : 0,
    "timeronesta" : 1,
    "timertwoh" : 0,
    "timertwom" : 0,
    "timertwonh" : 0,
    "timertwonm" : 0,
    "timertwosta" : 1,
    "v1" : 0,
    "v2" : 0,
    "w1" : 0,
    "w2" : 0,
    "x" : 0,
    "y" : 0
});  
});

$('#obj-ldrvaq784').on("click", function(e){
//e.preventDefault();
remove = $('#obj-dpvblq111-sn').val();
  var messageListRef = firebase.database().ref(remove); 
  messageListRef.remove()
});

$('#obj-bmchfm126').on("click", function(e){
  //e.preventDefault();
    var messageListRef = firebase.database().ref(uid+"/log"); 
    messageListRef.remove()
    setTimeout(function(){
      const deleteIconUI = document.getElementById("userList");
      let $li = document.createElement("p");
      deleteIconUI.innerHTML = "";
      deleteIconUI.append($li);

      const deleteDetailUI = document.getElementById("userDetail");
      var $p = document.createElement("p");
      deleteDetailUI.innerHTML = ""
      deleteDetailUI.append($p);
   }, 3000);

  });


$('#obj-nrohwt981').submit(function(e){
  uid = $('#obj-nrohwt981-sn').val();

    database.ref(uid).on("value", function(snap){
    notifsta = snap.val().notifsta;
    timeronesta = snap.val().timeronesta;
    timeroneh = snap.val().timeroneh;
    timeronem = snap.val().timeronem;
    timeronenh = snap.val().timeronenh;
    timeronenm = snap.val().timeronenm;
  
    timertwosta = snap.val().timertwosta;
    timertwoh = snap.val().timertwoh;
    timertwom = snap.val().timertwom;
    timertwonh = snap.val().timertwonh;
    timertwonm = snap.val().timertwonm;
  
    kwh1 = snap.val().kwh1;
    kwh2 = snap.val().kwh2;
    w1 = snap.val().w1;
    w2 = snap.val().w2;
    a2 = snap.val().a2;
    a1 = snap.val().a1;
    v2 = snap.val().v2;
    v1 = snap.val().v1;
    x = snap.val().x;
    y = snap.val().y;
    lampone = snap.val().lampone;
    lamptwo = snap.val().lamptwo;
    
    $('#obj-tgkaxg302').text(timeroneh);
    $('#obj-tgkaxg3022').text(timeronem);
    $('#obj-obhode679').text(timeronenh);
    $('#obj-obhode6791').text(timeronenm);

    $('#obj-hyijxg584').text(timertwoh);
    $('#obj-hyijxg5841').text(timertwom);
    $('#obj-ptetlz590').text(timertwonh);
    $('#obj-ptetlz5901').text(timertwonm);

    $('#obj-ahszkw397').text(v1);
    $('#obj-gkayup384').text(v2);
    $('#obj-kfmhkm555').text(a1);
    $('#obj-nlfvxv640').text(w1);
    $('#obj-tycfqt512').text(w2);
    $('#obj-bosqku993').text(kwh1);
    $('#obj-zhxawn961').text(kwh2);
    $('#obj-rrsqjd277').text(a2);
    $('#obj-gfizrc736').text("Your Serial Number "+uid);

      if(lamptwo == 1 && y == 1){
        $('#obj-mpelvc932').text("ON");
        $('#obj-honvox026').text("ON");
      } 
      if(lamptwo == 1 || y == 1){
        $('#obj-mpelvc932').text("ON");
        $('#obj-honvox026').text("ON");
      } 
      if(lamptwo == 0 && y == 0) {
        $('#obj-mpelvc932').text("OFF");
        $('#obj-honvox026').text("OFF");
      }

      if(lampone == 1 && x == 1){
        $('#obj-wytqdc255').text("ON");
        $('#obj-yossmr655').text("ON");
      } 
      if(lampone == 1 || x == 1){
        $('#obj-wytqdc255').text("ON");
        $('#obj-yossmr655').text("ON");
      } 
      if(lampone == 0 && x == 0) {
        $('#obj-wytqdc255').text("OFF");
        $('#obj-yossmr655').text("OFF");
      }
      if(notifsta == 1){
        $('#obj-nwotci155').text("ON");
      }
      if(notifsta == 0){
        $('#obj-nwotci155').text("OFF");
      }

      if(timeronesta == 2){
        $('#obj-ulhjom567').text("ON");
        $('#obj-ntunra698').text("ON");
        $('#obj-qmlykh879').hide();
        $('#obj-egihhz614').hide();
      
      }
      if(timeronesta == 1){
        $('#obj-ulhjom567').text("OFF");
        $('#obj-ntunra698').text("OFF");
        $('#obj-qmlykh879').show();
        $('#obj-egihhz614').show();
    
      }
      if(timertwosta == 2){
        $('#obj-vfyfhp782').text("ON");
        $('#obj-aoxrwk567').text("ON");
        $('#obj-ieqypy189').hide();
        $('#obj-hsjlcn685').hide();
      }
      if(timertwosta == 1){
        $('#obj-vfyfhp782').text("OFF");
        $('#obj-aoxrwk567').text("OFF");
        $('#obj-ieqypy189').show();
        $('#obj-hsjlcn685').show();
      }

      /*
      if(x == 1){
        $('#obj-qmlykh879').hide();
        $('#obj-egihhz614').hide();
        
      }
      if(x == 0){
        $('#obj-qmlykh879').show();
        $('#obj-egihhz614').show();
      }
      if(y == 1){
        $('#obj-ieqypy189').hide();
        $('#obj-hsjlcn685').hide();
        
      }
      if(y == 0){
        $('#obj-ieqypy189').show();
        $('#obj-hsjlcn685').show();
      }*/
  }); 
  database.ref(uid).once("value", function(snapshot){
    
    timeronestastop = snapshot.val().timeronesta;
    timeronehstop = snapshot.val().timeroneh;
    timeronemstop = snapshot.val().timeronem;
    timeronenhstop = snapshot.val().timeronenh;
    timeronenmstop = snapshot.val().timeronenm;

   
    timertwostastop2 = snapshot.val().timertwosta;
    timertwohstop2 = snapshot.val().timertwoh;
    timertwomstop2 = snapshot.val().timertwom;
    timertwonhstop2 = snapshot.val().timertwonh;
    timertwonmstop2 = snapshot.val().timertwonm;
    notifstastop = snapshot.val().notifsta;
    if (notifstastop == 1){
      $('#obj-frhmij881-input-1').prop('checked',true)
    }
    else if (notifstastop == 0){
      $('#obj-frhmij881-input-1').prop('checked',false)
    }
   
    if (timeronestastop == 2){
      //app.toggle.create(timeronesta == 2)
      $('#obj-bzqpju090-soketsta1').prop('checked',true)
    }
    else if (timeronestastop == 1){
      $('#obj-bzqpju090-soketsta1').prop('checked',false)
    }

    if (timertwostastop2 == 2){
      //app.toggle.create(timeronesta == 2)
      $('#obj-ltogwj975-soketsta1').prop('checked',true)
    }
    else if (timertwostastop2 == 1){
      $('#obj-ltogwj975-soketsta1').prop('checked',false)
    }

    $('#obj-ltogwj975-nyalah1').val(timeronehstop);
    $('#obj-ltogwj975-nyalam1').val(timeronemstop);
    $('#obj-ltogwj975-matih1').val(timeronenhstop);
    $('#obj-ltogwj975-matim1').val(timeronenmstop);

    $('#obj-ltogwj975-nyalah2').val(timertwohstop2);
    $('#obj-ltogwj975-nyalam2').val(timertwomstop2);
    $('#obj-ltogwj975-matih2').val(timertwonhstop2);
    $('#obj-ltogwj975-matim2').val(timertwonmstop2);

    
    var currentDate = new Date();
    var dateString = currentDate.toLocaleString()
    var logsRef = database.ref(uid).child("log");
    logsRef.push ({
    SN : uid,
    Time: dateString,
    KWhSatu:kwh1,
    KWhDua: kwh2
    });
  });


  const dbRef = firebase.database().ref(uid);
    const usersRef = dbRef.child('log');
    const userListUI = document.getElementById("userList");
    let $plog = document.createElement("p");
    userListUI.innerHTML = "";
    userListUI.append($plog);

    const userDetailUI = document.getElementById("userDetail");
    var $p = document.createElement("p");
    userDetailUI.innerHTML = ""
    userDetailUI.append($p);

    usersRef.on("child_added", snap => {
    
      let user = snap.val();
    
      let $list = document.createElement("li");
      $list.innerHTML = user.Time+" - ["+user.SN+"]";
      $list.setAttribute("child-key", snap.key);
      $list.addEventListener("click", userClicked)
      userListUI.append($list);
    
    });
    
    
    function userClicked(e) {
    
      var userID = e.target.getAttribute("child-key");
    
      const userRef = dbRef.child('log/' + userID);
      const userDetailUI = document.getElementById("userDetail");
    
      userDetailUI.innerHTML = ""
    
      userRef.on("child_added", snap => {
    
    
        var $p = document.createElement("p");
        $p.innerHTML = snap.key  + " - " +  snap.val()
        userDetailUI.append($p);
    
    
      });
    
    }     
});

$('#obj-gfizrc736').text("Serial Number "+uid);
  $('#obj-qmlykh879').on("click", function() {

      var firebaseRef = firebase.database().ref(uid).child("lampone");
      
      if (lampone == 1) {
        firebaseRef.set(0);
        lampone = 0;
        /*jQuery.ajax({
          url:'https://api.telegram.org/bot1080807261:AAFL4YEefvzEUmVo-Y3aGBWvyhwzxMP6UGw/sendMessage?chat_id=608301801&text=REPORT:%0ASoket Satu Sudah Dalam Kondisi MATI',
          method:'POST'
          });*/
      
      } else {
        firebaseRef.set(1);
        lampone = 1;
        /*jQuery.ajax({
          url:'https://api.telegram.org/bot1080807261:AAFL4YEefvzEUmVo-Y3aGBWvyhwzxMP6UGw/sendMessage?chat_id=608301801&text=REPORT:%0ASoket Satu Sudah Dalam Kondisi NYALA',
          method:'POST'
          });*/
      }
    
});
    
$('#obj-ieqypy189').on("click", function() {
    
      var firebaseRef = firebase.database().ref(uid).child("lamptwo");
      
      if (lamptwo == 1) {
        firebaseRef.set(0);
        lamptwo = 0;
        /*jQuery.ajax({
          url:'https://api.telegram.org/bot1080807261:AAFL4YEefvzEUmVo-Y3aGBWvyhwzxMP6UGw/sendMessage?chat_id=608301801&text=REPORT:%0ASoket Dua Sudah Dalam Kondisi MATI',
          method:'POST'
          });*/
      } else {
        firebaseRef.set(1);
        lamptwo = 1;
        /*jQuery.ajax({
          url:'https://api.telegram.org/bot1080807261:AAFL4YEefvzEUmVo-Y3aGBWvyhwzxMP6UGw/sendMessage?chat_id=608301801&text=REPORT:%0ASoket Dua Sudah Dalam Kondisi NYALA',
          method:'POST'
          });*/
      }
});

$('#obj-frhmij881').submit(function(e){
          var toggle = app.toggle.get('.toggle');
            if (toggle.checked) {
              var firebaseRef = firebase.database().ref(uid).child("notifsta");
              notif= 1; 
              firebaseRef.set(notif);
              alert('Notification Aktif');
            }
            else{
              var firebaseRef = firebase.database().ref(uid).child("notifsta");
              notif= 0; 
              firebaseRef.set(notif);
              alert('Notification non-Aktif');
            }
        
});

$('#obj-bzqpju090').submit(function(e){
//e.preventDefault();
var firebaseRef = firebase.database().ref(uid).child("timeroneh");
timh = parseInt($('#obj-ltogwj975-nyalah1').val()); 
firebaseRef.set(timh);

var firebaseRef = firebase.database().ref(uid).child("timeronem");
timm= parseInt($('#obj-ltogwj975-nyalam1').val()); 
firebaseRef.set(timm);

var firebaseRef = firebase.database().ref(uid).child("timeronenh");
timnh = parseInt($('#obj-ltogwj975-matih1').val()); 
firebaseRef.set(timnh);

var firebaseRef = firebase.database().ref(uid).child("timeronenm");
timnm= parseInt($('#obj-ltogwj975-matim1').val()); 
firebaseRef.set(timnm);


var toggle = app.toggle.get('#obj-lpwjou723');
  if (toggle.checked) {
    var firebaseRef = firebase.database().ref(uid).child("timeronesta");
    timeronesta= 2; 
    firebaseRef.set(timeronesta);
    var firebaseRef = firebase.database().ref(uid).child("x");
    x= 0; 
    firebaseRef.set(x);
    var firebaseRef = firebase.database().ref(uid).child("lampone");
    lampone= 0; 
    firebaseRef.set(lampone); 
  }
  else{
    var firebaseRef = firebase.database().ref(uid).child("timeronesta");
    timeronesta= 1; 
    firebaseRef.set(timeronesta);

  }

});

$('#obj-ltogwj975').submit(function(e){
//e.preventDefault();
var firebaseRef = firebase.database().ref(uid).child("timertwoh");
timh = parseInt($('#obj-ltogwj975-nyalah2').val()); 
firebaseRef.set(timh);

var firebaseRef = firebase.database().ref(uid).child("timertwom");
timm= parseInt($('#obj-ltogwj975-nyalam2').val()); 
firebaseRef.set(timm);

var firebaseRef = firebase.database().ref(uid).child("timertwonh");
timnh = parseInt($('#obj-ltogwj975-matih2').val()); 
firebaseRef.set(timnh);

var firebaseRef = firebase.database().ref(uid).child("timertwonm");
timnm= parseInt($('#obj-ltogwj975-matim2').val()); 
firebaseRef.set(timnm);


var toggle = app.toggle.get('#obj-yolqbk857');
  if (toggle.checked) {
    var firebaseRef = firebase.database().ref(uid).child("timertwosta");
    timertwosta= 2; 
    firebaseRef.set(timertwosta);
    var firebaseRef = firebase.database().ref(uid).child("y");
    y= 0; 
    firebaseRef.set(y);
    var firebaseRef = firebase.database().ref(uid).child("lamptwo");
    lamptwo= 0; 
    firebaseRef.set(lamptwo); 
  }
  else{
    var firebaseRef = firebase.database().ref(uid).child("timertwosta");
    timertwosta= 1; 
    firebaseRef.set(timertwosta);

  }

});