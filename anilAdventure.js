function menuslide()
{
    var menuSlide=document.getElementById("menubar")
    menuSlide.style.display="flex"
}
function menuslideClose()
{
    var menuSlide1=document.getElementById("menubar")
    menuSlide1.style.display="none"
}

function searchopen()
{
    var search=document.getElementById("searchcont")
    search.style.display="flex"
}
function searchclose()
{
    var search=document.getElementById("searchcont")
    search.style.display="none"
}
function book()
{   
    var inp=document.getElementById("butt")
    inp.setAttribute("value","Booked")
    inp.style.backgroundColor="silver"
    inp.style.fontStyle="italic"
}
function book1()
{   
    var inp=document.getElementById("butt1")
    inp.setAttribute("value","Booked")
    inp.style.backgroundColor="silver"
    inp.style.fontStyle="italic"
}
function book2()
{   
    var inp=document.getElementById("butt2")
    inp.setAttribute("value","Booked")
    inp.style.backgroundColor="silver"
    inp.style.fontStyle="italic"
}
function book3()
{   
    var inp=document.getElementById("butt3")
    inp.setAttribute("value","Booked")
    inp.style.backgroundColor="silver"
    inp.style.fontStyle="italic"
}


var num=0;
var imageArr=["0.jpg","1.jpg","2.jpg","3.jpg"]
var headerTag=document.querySelector("header")

function sliderRight()
{
num++;
if(num<=imageArr.length-1)
{
headerTag.style.backgroundImage=`url(${imageArr[num]})`
}
else
{
num=0;
headerTag.style.backgroundImage=`url(${imageArr[num]})`   
}

switch(num)
{
    case 0:
        document.getElementById("styletext").innerText="Family Trip";
        document.getElementById("styletext").style.color="black";
        break;
        case 1:
            document.getElementById("styletext").innerText="Friends Trip";
            document.getElementById("styletext").style.color="deeppink";
            break;
            case 2:
                document.getElementById("styletext").innerText="Couples Trip";
                document.getElementById("styletext").style.color="orange";
                break;
                case 3:
                    document.getElementById("styletext").innerText="Chidren Trip";
                    document.getElementById("styletext").style.color="green";
                    break;
}
setTimeout(sliderRight,2000)

}
sliderRight()


function sliderLeft()
{
num--;
if(num<0)
{
num=imageArr.length-1;
headerTag.style.backgroundImage=`url(${imageArr[num]})`
}
else
{
headerTag.style.backgroundImage=`url(${imageArr[num]})`
}
}

function bgChange()
{
  var userValue=document.getElementById("bgchange")
  var val=userValue.value
  document.getElementById("travelstyle").style.backgroundColor=val;
}

function formBook()
{   
   var value2=document.getElementById("bookinginputsbutt")
   value2.style.color="black"
   value2.setAttribute("value","Booked")
   value2.style.backgroundColor="silver"
   value2.style.fontStyle="italic"
}
function formBook2()
{   
   var value2=document.getElementById("bookinginputsbutt2")
   value2.style.color="black"
   value2.setAttribute("value","Booked")
   value2.style.backgroundColor="silver"
   value2.style.fontStyle="italic"
}
function formBook3()
{   
   var value3=document.getElementById("bookinginputsbutt3")
   value3.style.color="black"
   value3.setAttribute("value","Booked")
   value3.style.backgroundColor="silver"
   value3.style.fontStyle="italic"
}
function formBook4()
{   
   var value4=document.getElementById("bookinginputsbutt4")
   value4.style.color="black"
   value4.setAttribute("value","Booked")
   value4.style.backgroundColor="silver"
   value4.style.fontStyle="italic"
}

function priceVal()
{
  var price=document.getElementById("memberPrice").value
  if(price==1)
  {
    document.getElementById("bookingPrice").innerHTML="TotalPrice =12999/-"
  }
  if(price==2)
  {
    document.getElementById("bookingPrice").innerHTML="TotalPrice =24000/-"
  }
  if(price==3)
  {
    document.getElementById("bookingPrice").innerHTML="TotalPrice =36250/-"
  }
  if(price==4)
  {
    document.getElementById("bookingPrice").innerHTML="TotalPrice =48300/-"
  }
  if(price==5)
  {
    document.getElementById("bookingPrice").innerHTML="TotalPrice =59999/-"
  }
  
}
function priceVal2()
{
  var price=document.getElementById("memberPrice2").value
  if(price==1)
  {
    document.getElementById("bookingPrice2").innerHTML="TotalPrice =12999/-"
  }
  if(price==2)
  {
    document.getElementById("bookingPrice2").innerHTML="TotalPrice =24000/-"
  }
  if(price==3)
  {
    document.getElementById("bookingPrice2").innerHTML="TotalPrice =36250/-"
  }
  if(price==4)
  {
    document.getElementById("bookingPrice2").innerHTML="TotalPrice =48300/-"
  }
  if(price==5)
  {
    document.getElementById("bookingPrice2").innerHTML="TotalPrice =59999/-"
  }
}

function priceVal3()
{
  var price=document.getElementById("memberPrice3").value
  if(price==1)
  {
    document.getElementById("bookingPrice3").innerHTML="TotalPrice =12999/-"
  }
  if(price==2)
  {
    document.getElementById("bookingPrice3").innerHTML="TotalPrice =24000/-"
  }
  if(price==3)
  {
    document.getElementById("bookingPrice3").innerHTML="TotalPrice =36250/-"
  }
  if(price==4)
  {
    document.getElementById("bookingPrice3").innerHTML="TotalPrice =48300/-"
  }
  if(price==5)
  {
    document.getElementById("bookingPrice3").innerHTML="TotalPrice =59999/-"
  }
}

function priceVal4()
{
  var price=document.getElementById("memberPrice4").value
  if(price==1)
  {
    document.getElementById("bookingPrice4").innerHTML="TotalPrice =12999/-"
  }
  if(price==2)
  {
    document.getElementById("bookingPrice4").innerHTML="TotalPrice =24000/-"
  }
  if(price==3)
  {
    document.getElementById("bookingPrice4").innerHTML="TotalPrice =36250/-"
  }
  if(price==4)
  {
    document.getElementById("bookingPrice4").innerHTML="TotalPrice =48300/-"
  }
  if(price==5)
  {
    document.getElementById("bookingPrice4").innerHTML="TotalPrice =59999/-"
  }
}

function bookingdetOpen()
{
    var bookingSlide=document.getElementById("bookingdet")
    bookingSlide.style.display="flex"

}
function bookingdetClose()
{
    var bookingSlide=document.getElementById("bookingdet")
    bookingSlide.style.display="none"
}
function bookingdetOpen2()
{
    var bookingSlide2=document.getElementById("bookingdet2")
    bookingSlide2.style.display="flex"

}
function bookingdetClose2()
{
    var bookingSlide2=document.getElementById("bookingdet2")
    bookingSlide2.style.display="none"
}

function bookingdetOpen3()
{
    var bookingSlide3=document.getElementById("bookingdet3")
    bookingSlide3.style.display="flex"

}
function bookingdetClose3()
{
    var bookingSlide3=document.getElementById("bookingdet3")
    bookingSlide3.style.display="none"
}

function bookingdetOpen4()
{
    var bookingSlide4=document.getElementById("bookingdet4")
    bookingSlide4.style.display="flex"

}
function bookingdetClose4()
{
    var bookingSlide4=document.getElementById("bookingdet4")
    bookingSlide4.style.display="none"
}


function outputMatt()
{
    var fromdd=document.getElementById("fromdate").value
    var todd=document.getElementById("todate").value
    var wheel=document.getElementById("wheelers").value
    var stayType=document.getElementById("staying").value
    var members=document.getElementById("memberPrice").value
    var cost=document.getElementById("bookingPrice").value
    document.getElementById("bookedmatter").innerHTML=`Your trip date is From ${fromdd} to ${todd}, Your travel Mode is ${wheel}, staying type is ${stayType} and participating members are ${members}. `
}
function outputMatt2()
{
    var fromdd2=document.getElementById("fromdate2").value
    var todd2=document.getElementById("todate2").value
    var wheel2=document.getElementById("wheelers2").value
    var stayType2=document.getElementById("staying2").value
    var members2=document.getElementById("memberPrice2").value
    var cost2=document.getElementById("bookingPrice2").value
    document.getElementById("bookedmatter2").innerHTML=`Your trip date is From ${fromdd2} to ${todd2}, Your travel Mode is ${wheel2}, staying type is ${stayType2} and participating members are ${members2}. `
}
function outputMatt3()
{
    var fromdd3=document.getElementById("fromdate3").value
    var todd3=document.getElementById("todate3").value
    var wheel3=document.getElementById("wheelers3").value
    var stayType3=document.getElementById("staying3").value
    var members3=document.getElementById("memberPrice3").value
    var cost3=document.getElementById("bookingPrice3").value
    document.getElementById("bookedmatter3").innerHTML=`Your trip date is From ${fromdd3} to ${todd3}, Your travel Mode is ${wheel3}, staying type is ${stayType3} and participating members are ${members3}. `
}
function outputMatt4()
{
    var fromdd4=document.getElementById("fromdate4").value
    var todd4=document.getElementById("todate4").value
    var wheel4=document.getElementById("wheelers4").value
    var stayType4=document.getElementById("staying4").value
    var members4=document.getElementById("memberPrice4").value
    var cost4=document.getElementById("bookingPrice4").value
    document.getElementById("bookedmatter4").innerHTML=`Your trip date is From ${fromdd4} to ${todd4}, Your travel Mode is ${wheel4}, staying type is ${stayType4} and participating members are ${members4}. `
}

function openTickCont()
{
    document.getElementById("Thank").style.display="flex"
}
function closeTickCont()
{
    document.getElementById("Thank").style.display="none"
}
function openTickCont2()
{
    document.getElementById("Thank2").style.display="flex"
}
function closeTickCont2()
{
    document.getElementById("Thank2").style.display="none"
}

function openTickCont3()
{
    document.getElementById("Thank3").style.display="flex"
}
function closeTickCont3()
{
    document.getElementById("Thank3").style.display="none"
}
function openTickCont4()
{
    document.getElementById("Thank4").style.display="flex"
}
function closeTickCont4()
{
    document.getElementById("Thank4").style.display="none"
}

function openWelCome()
{
   var name=prompt("Enter Your Name: ")
   document.getElementById("welcome").style.display="flex"
   document.getElementById("welcome").style.top="14em"
   document.getElementById("custamerName").innerHTML=`Hi ${name}! <br> WelCome To My Travel Blog`
}

function CloseWelCome()
{
  document.getElementById("welcome").style.display="none"
}

function Subscribe()
{
  var Sbutton=document.getElementById("Sbutt")
    Sbutton.style.backgroundColor="silver"
    Sbutton.style.color="black"
    Sbutton.setAttribute("value","Subscribed")
    Sbutton.style.fontStyle="italic"
    document.getElementById("bellIcon").style.display="flex"
    document.getElementById("subscribeThank").innerHTML="Thank You For Subscribe"
    document.getElementById("subscribeThank").style.color="yellow"
}
function bell()
{
  document.getElementById("bellIcon").style.display="none"
  document.getElementById("bellIcon2").style.display="flex"
  document.getElementById("subscribeThank").innerHTML="Thank You For Notification"
  document.getElementById("subscribeThank").style.color="red"
}