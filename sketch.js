var database

var homescreen

var appstate

var namescreen

var issueScreen

var fanproblem

var acproblem

var tvproblem

var fridgeproblem

var washingmachineproblem

var mixerissue

var geyser

var toaster

var electricity

var cooler

var tubewell

var musicsystem

var vacumcleaner

var microwave

var cots

var tregister

var bg,bg_image

var n2,n3,n4,n5,n6,n7

var cIndex=1;
var c2,c3;
var tIndex=1;

var database;

function preload(){
bg_image=loadImage("bg.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight)
database=firebase.database()
homescreen= new Homescreen();
appstate="Homescreen"
 namescreen= new Customer();
 c2=new Customer();
 issueScreen=new IssueType()
 fanproblem=new Fanissue()
 acproblem= new ACissue()
 tvproblem= new TVissue()
 fridgeproblem= new Fridgeissue()
 washingmachineproblem= new WashingMachineissue()
 mixerissue=new Mixerissue()
 geyser=new Geyserissue
 toaster=new Toasterissue
 electricity =new Electricissue
 cooler= new Coolerissue
 tubewell= new Tubewellissue
 musicsystem =new MusicSystemissue
 vacumcleaner=new Vacumissue
 microwave=new MicroWaveIssue
 cots=new cot
 tregister=new Tregister
 //bg=createSprite(width/2,height/2)
 //bg.addImage("bg",bg_image)
 //bg.scale=3
}

function draw(){
background(bg_image)
homescreen.display();
console.log(appstate)
if(appstate==="NameClass"){
namescreen.display();
c2.display();
}
if(appstate==="cot"){
   cots.display()
}
//console.log(responseJSON)
if(appstate==="technicianSI"){
tregister.display()
}
if(appstate==="IssueType"){
    issueScreen.display()}
if(appstate==="FanIssue"){
    fanproblem.display();
}
if(appstate==="ACIssue"){
    acproblem.display();
}
if(appstate==="TVIssue"){
    tvproblem.display();
}

if(appstate==="FridgeIssue"){
   fridgeproblem.display();
}
if(appstate==="WashingMachineIssue"){
    washingmachineproblem.display();
 }

 if(appstate==="MixerIssue"){
    mixerissue.display();
 }

 if(appstate==="GeyserIssue"){
    geyser.display();
 }

 if(appstate==="ToasterIssue"){
    toaster.display();
 }

 if(appstate==="ElectricityIssue"){
    electricity.display();
 }

 if(appstate==="CoolerIssue"){
    cooler.display();
 }

 if(appstate==="TubeWellIssue"){
    tubewell.display();
 }

 if(appstate==="MusicSystemIssue"){
    musicsystem.display();
 }

 if(appstate==="VacumCleanerIssue"){
   vacumcleaner.display();
}

if(appstate==="MicrowaveIssue"){
   microwave.display();
}
drawSprites();
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight)

}










