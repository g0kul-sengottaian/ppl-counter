let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment()
{
  console.log('button clicked ')
  count++
  countEl.innerText = count
}
function decrement()
{
  count--
  if(count<0)
  {
    countEl.innerText= 0
    count =0
  }
  else
  countEl.innerText=count
}

function saveOf()
{
  let countStr = count + "-"
  saveEl.innerText += countStr
  count = 0
  countEl.innerText= 0
  
}

