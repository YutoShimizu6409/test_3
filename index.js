var i = 0;
var r = [];
var timerId;
// var s =1500

function slot() {
  document.getElementById('slot_'+i).innerHTML = Math.floor(Math.random()*5);
  timerId = setTimeout(slot, 100);
}

slot();

function stop() {
// let score = 0;
let b = document.getElementById("score");
r[i] = document.getElementById('slot_'+i).innerHTML;
i++;
// console.log(Math.random())

if (i>2) {
  i = 0;
clearTimeout(timerId);
}

  if  ((r[0] == 4) && (r[1] == 4) && (r[2] == 4)){
    alert('左打ちに戻してくれ');
    document.getElementById("gogo").disabled = true;
  // } else if ((r[0] == r[2]) && (r[1] != r[0])) {
  //     alert('リーチだったねｗｗ');
  } else if ((r[0] == r[1]) && (r[0] == r[2])) {
      alert('GOOLDEN TIME継続');
      // result.textContent = document.number(b.textContent)  + 1500;
  }
  // console.log('0は'+r[0])
  // console.log('1は'+r[1])
  // console.log('2は'+r[2])
}
      // console.log(document.getElementById("score").value)

// score = getElementById("score").value  + 1500;


