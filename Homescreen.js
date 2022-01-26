class Homescreen{
constructor(){
this.name=createElement("h2")
this.name2=createElement("h2")
this.guide=createElement("h2")
this.enter=createButton("Enter")
this.creator=createElement("h1")
}
setElementsPosition(){
this.name.position(width/2-70,150)
this.name2.position(width/2-140,200)
this.guide.position(width/2-250,250)
this.enter.position(width/2-120,350)
this.creator.position(width/2-180,400)
}

elementStyle(){
this.name.class("greeting")
this.name2.class("greeting")
this.guide.class("greeting")
this.creator.class("greeting")
this.enter.class("customButton")
}
hide(){
    this.name.hide()
    this.name2.hide()
    this.guide.hide()
    this.enter.hide()
    this.creator.hide()
}
elementFilling(){

this.enter.mousePressed(()=>{
this.hide()
appstate="cot"
}

)


    this.name.html('Help')
    this.name2.html('For Every Electrical Help')
    this.guide.html('Press Enter Button To Continue')
    this.creator.html('by-Vedant Rathore')
    }
display(){
    this.setElementsPosition();
    this.elementFilling();
    this.elementStyle();
}



}