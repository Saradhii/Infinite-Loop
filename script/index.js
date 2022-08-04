const main = document.querySelector('.main');
var item = localStorage.getItem("item");
var count = 1;
function loaddata(data=25){
    let i=0;
    while(i<data)
    {
      const div = document.createElement("div");
      div.setAttribute("class", "myBtn");
      div.innerHTML=`${item} ${count}`;
      div.addEventListener("click", function () {
        onOpenModal(count-i);
      });
      main.append(div);
      i++;
      count++;
    }
}
loaddata();

main.addEventListener('scroll',()=>{
    if (
        main.scrollTop + main.clientHeight >=
        main.scrollHeight
      ) {
        loaddata();
      }
});

var modal = document.querySelector(".modal");
function onOpenModal(count) {
    console.log(count);
    var text = document.querySelector(".text");
    text.innerHTML = `Masai Student ${count}`;
    modal.style.display = "block";
  }

  var span = document.getElementsByClassName("close")[0];
  var span1 = document.getElementsByClassName("some")[0];
  span.onclick = function onCloseModal() {
    modal.style.display = "none";
  }
  span1.onclick = function onCloseModal() {
    modal.style.display = "none";
  }



