import {
    Application, Container,Text,Sprite,TextStyle, Texture,DEG_TO_RAD
} from 'pixi.js';
import { sound } from '@pixi/sound';
import { gsap } from 'gsap';
import { preLoader } from './PreLoader';
import assets from './assets';
import { getTexture } from './Textures';
let flag:number=0;
//let col:number = 1;
var x:number[]=[502,670,670,562,387,362,352];
    var y:number[]=[200,270,400,500,500,270,400];
var text1:Text[]=[];

export class Game {
    
    private stage: Container;
    private readonly app: Application;
    private game_container: Container;
    private prize_container: Container;
    private prize_won: string = "None";
    private prize_display: Container;
    private pointer:any;
    private isInitialized = false;
    private prizes = ['Zero', '100', '200', '500', '1000', '2000', 'Jackpot'];
    private wheel: any;
    private segangle:number=360/this.prizes.length;
    private stopAngle: number=0;
    constructor(app: Application) {
        this.app = app;
        this.stage = app.stage;
        const centerX = app.view.width / 2;
        const centerY = app.view.height / 2;
        this.game_container = new Container
        this.prize_container = new Container
        this.prize_display = new Container
       this.wheel = this.wheel
    sound.add('my-sound', 'src/Audio/Tick.mp3');
      sound.add('win','src/Audio/won.mp3');
        sound.add('lose','src/Audio/lose.mp3');
        sound.add('normal','src/Audio/normal.mp3');
      this.stage.addChild(this.game_container, this.prize_container,this.prize_display);
      this.prize_display.visible=false;
        preLoader(assets, () => {

            this.isInitialized = true;
            const wheel = new Sprite(getTexture('wheel') as Texture);
            wheel.anchor.set(0.5);
            wheel.position.set(centerX, centerY);
            this.wheel = wheel;
            this.game_container.addChild(this.wheel)


            const pointer = new Sprite(getTexture('pointer') as Texture);
            pointer.scale.set(0.025);
            pointer.rotation=DEG_TO_RAD * 180;
           pointer.position.set(this.app.view.width / 2 + 20, 100);
            this.pointer = pointer;
            this.game_container.addChild(this.pointer);
           
            this.createText(); 

            this.prize_container.pivot.x = this.app.view.width / 2;
           this.prize_container.pivot.y = this.app.view.height / 2;
           this.prize_container.x = this.app.view.width / 2;
           this.prize_container.y = this.app.view.height / 2;
           this.game_container.addChild(this.prize_container)
           
            wheel.interactive = true;
            wheel.on('click', () => {
                  const stopAngle= Math.floor(Math.random()*360);
                  this.stopAngle=stopAngle;
                  const rotationangle=- DEG_TO_RAD*(360*10+stopAngle);
                flag=1;
                // sound.play('my-sound');
                gsap.to(this.wheel, {
                    x: centerX, y: centerY, duration: 2, rotation:rotationangle,
                    onComplete:()=>{
                       
                        console.log("pointer rotation "+ this.pointer.rotation);
                        flag=0;
                        // sound.pause('my-sound');
                     this.prizeWin();
                    }
                })
                gsap.to(this.prize_container, {
                    rotation: rotationangle,
                    duration:2
                })

            });
        });

        console.warn(this.app);
    }  
private prizeWin()
{
    if(this.stopAngle>360-this.segangle/2||this.stopAngle<=this.segangle/2 ){
        this.prize_won = this.prizes[0]
        
    }
    else if(this.stopAngle<=3*this.segangle/2){
        this.prize_won = this.prizes[1]
        
    }
    else if(this.stopAngle<=5*this.segangle/2){
        this.prize_won = this.prizes[2]
        
    }
    else if(this.stopAngle<=7*this.segangle/2){
        this.prize_won = this.prizes[3]
        
    }
    else if(this.stopAngle<=9*this.segangle/2){
       this.prize_won = this.prizes[4]
        
    }
    else if(this.stopAngle<=11*this.segangle/2){
        this.prize_won = this.prizes[6]            
    }
    else {
        this.prize_won = this.prizes[5]
        
    }
if (this.prize_display) {
    this.game_container.addChild(this.winnigMsg())
}

this.game_container.interactive = true;
this.game_container.on('click', () => {
    location.reload()
})

}


private winnigMsg(): Text {
    const winMsg = new Text(`Congrats!!! You Won ${this.prize_won}`, {
        fontFamily: 'Cursive',
        fill: 'blue',
        fontSize: '50px',
        align: 'center'
    })
    if(this.prize_won=='Zero')
    {
        winMsg.position.set(this.app.view.width / 2, this.app.view.height / 2);
    winMsg.anchor.set(0.5)
        // sound.play('lose');
    }
    else if(this.prize_won=='Jackpot')
    {
        const jackpot= new Sprite(getTexture('jackpot') as Texture);
      //  gsap(jackpot,)
      jackpot.scale.set(0.3);
      jackpot.position.set(this.wheel.width / 2+30, this.wheel.height/2-40);
      winMsg.visible=false;
      this.game_container.addChild(jackpot);

        // sound.play('win');

    }
    else{
        
    winMsg.position.set(this.app.view.width / 2, this.app.view.height / 2);
    winMsg.anchor.set(0.5)
        // sound.play('normal');
    }
return winMsg;
}

private createText()
{

    let textStyle = new TextStyle({
        fill: '#DD3366',
        fontFamily: 'Open Sans',
       
        fontSize: 14
      });
     
     
      for(let i=0;i<this.prizes.length;i++)
      {
          var text=  new Text(this.prizes[i], textStyle);
           text.position.set(x[i],y[i]);
            text1.push(text);
            console.log("text rotation "+text.rotation);
            this.prize_container.addChild(text);
        
       }
            
      }
 public update(delta: number): void {
        if (this.isInitialized && this.wheel && flag) {
            this.wheel.rotation += delta *DEG_TO_RAD ;
        }
    }
}


