const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var theAPI;
var theAPIJSON;
// var
var bg = "sunrise.png";

function preload() {
    getBackgroundImg();

}

function setup() {
    var canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

}

function draw() {
    if (backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);

    if (theAPIJSON >= 12) {
        text("Time : " + theAPIJSON % 12 + " PM", 50, 100);
    } else if (theAPIJSON == 0) {
        text("Time : 12 AM", 100, 100);
    } else {
        text("Time : " + theAPIJSON % 12 + " AM", 50, 100);
    }

}

async function getBackgroundImg() {

    // write code to fetch time from API

    theAPI = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");


    //change the data in JSON format and store it in variable responseJSON

    theAPIJSON = await theAPI.json();

    //fetch datetime from responseJSON

    theAPIJSON = theAPIJSON.datetime.slice(11, 13);
    // 2021 - 09 - 04 T17: 58: 32.654577 + 05: 30

    // slice the datetime to extract hour

    // if (theAPIJSON)

    console.log(theAPIJSON);

    if (theAPIJSON >= 0 && theAPIJSON < 18) {
        bg = "sunrise.png";
    } else {
        bg = "sunset.png"
    }

    backgroundImg = loadImage(bg);
}