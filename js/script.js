let round = 1;

class Fighters {
    constructor(name, hp, leftHook, rightHook, middleKick, highKick, lowKick, endurance, superpucnh){
        this.name = name;
        this.hp = hp;
        this.leftHook = leftHook;
        this.rightHook = rightHook;
        this.middleKick = middleKick;
        this.highKick = highKick;
        this.lowKick = lowKick;
        this.endurance = endurance;
        this.superpucnh = superpucnh
    }
    sayHello (){
        return `I am ${this.name}`
    }

    set calcHp(damage){
        const res = this.hp -(damage -this.endurance)
        this.hp = res ? 0 : this.hp
    }

}

class JonJons extends Fighters{
    constructor(name){
        super(name, 240, 6, 8, 10, 15, 9, 100, 70)
    }

    sayHello(){
        return `I am ${this.name}. Believe in yourself. Believe in your heart and once you get there, don’t slow down.`
    }
}

class DanielCormier{
    constructor(name, hp, leftHook, rightJab, lowKick, takedown, touchnGo, endurance, highCrotch){
        this.hp = hp;
        this.name = name
        this.leftHook = leftHook;
        this.rightJab = rightJab;
        this.lowKick = lowKick;
        this.takedown = takedown;
        this.touchnGo = touchnGo;
        this.endurance = endurance;
        this.highCrotch = highCrotch;
    }
    
    sayHello(){
        return `I am ${this.name}. I want to be the best.`
    }
    hp 

}

const johnJhons = new JonJons('Jon "Bones" Jons')
const danielCormier = new DanielCormier('Daniel Cormier',230, 6, 9, 10, 20, 25, 100, 80 )

const johnJhonsNode = document.getElementById('john-stats'); 
const danielCormierNode =  document.getElementById('daniel-stats'); 
const roundNode =  document.getElementById('round'); 

function roundF(){
    if(johnJhons.hp <= 150 || johnJhons.hp >= 140|| danielCormier.hp <= 150){
        johnJhons.hp == 150 || danielCormier.hp == 150
        round += 1
    }
   
}

function johnWin(){
    if (danielCormier.hp <= 0){
        danielCormier.hp = 0

        alert('John Jhons WIN')
        res()
    }
}

function danWin(){
    if (johnJhons.hp <= 0){
        johnJhons.hp = 0
        
        alert('Daniel Cormier WIN')
        res()
    }
}

function blockKick(){
    if(danielCormier.endurance <= 50){
        
        document.querySelector('#superDan').disabled = true
    }
    if(johnJhons.endurance <= 50){
       
        document.querySelector('#superJohn').disabled = true
    }
    
}


function renderStats(fighters){ 
    let statsNode = '' 
    Object.keys(fighters).forEach(key => { 
        statsNode += ` 
        <tr>
        <th> ${key}</th>
        <td> : ${fighters[key]}</td>
        </tr>`
    }) 
         
    return statsNode 
} 


function updateState(){ 
    roundNode.innerHTML = `ROUND:${round}`
    johnJhonsNode.innerHTML = renderStats(johnJhons);
    danielCormierNode.innerHTML = renderStats(danielCormier);
} 

updateState() 
blockKick()



function lhookJohn() { 
    danielCormier.hp =  danielCormier.hp - Math.round(Math.random()*6 + 1) ;
    johnJhons.endurance = johnJhons.endurance - 1
    danielCormier.endurance = danielCormier.endurance -0.5
    
    
    blockKick()
    roundF()
    johnWin()
    updateState() 
}
function rhookJohn(){
    danielCormier.hp =  danielCormier.hp - Math.floor(Math.random()*8 +2);
    johnJhons.endurance = johnJhons.endurance - 2
    danielCormier.endurance = danielCormier.endurance -1.5
    blockKick()
    roundF()
    johnWin()
    updateState() 
}


function mkickJohn(){
    danielCormier.hp =  danielCormier.hp - Math.floor(Math.random()*9 +1);
    johnJhons.endurance = johnJhons.endurance - 3
    danielCormier.endurance = danielCormier.endurance - 2
    blockKick()
    roundF()
    johnWin()
    updateState() 
}
function hkickJohn(){
    danielCormier.hp =  danielCormier.hp - Math.floor(Math.random()*15 +6);
    johnJhons.endurance = johnJhons.endurance - 4
    danielCormier.endurance = danielCormier.endurance -3
    blockKick()
    roundF()
    johnWin()
    updateState() 
}
function lkickJohn(){
    danielCormier.hp =  danielCormier.hp - Math.floor(Math.random()*9 +5);
    johnJhons.endurance = johnJhons.endurance - 2
    danielCormier.endurance = danielCormier.endurance -1.5
    blockKick()
    roundF()
    johnWin()
    updateState() 
}
function superJohn(){
    danielCormier.hp =  danielCormier.hp - Math.floor(Math.random()*70 +20);
    johnJhons.endurance = johnJhons.endurance - 25
    danielCormier.endurance = danielCormier.endurance - 3
    blockKick()
    roundF()
    johnWin()
    updateState() 
}





function lhookDan(){
    johnJhons.hp = johnJhons.hp - Math.floor(Math.random()*7 +1);
    danielCormier.endurance = danielCormier.endurance -1
    johnJhons.endurance = johnJhons.endurance - 0.5
    blockKick()
    roundF()
    danWin()
    updateState() 
}

function rJabDan(){
    johnJhons.hp = johnJhons.hp - Math.floor(Math.random()*9 +2);
    danielCormier.endurance = danielCormier.endurance -1.5
    johnJhons.endurance = johnJhons.endurance - 0.5
    blockKick()
    roundF()
    danWin()
    updateState() 
}


function lkickDan(){
    johnJhons.hp = johnJhons.hp - Math.floor(Math.random()*10 +3);
    danielCormier.endurance = danielCormier.endurance -5
    johnJhons.endurance = johnJhons.endurance - 1
    blockKick()
    roundF()
    danWin()
    updateState() 
}
function takeDan(){
    johnJhons.hp = johnJhons.hp - Math.floor(Math.random()*20 +5);
    danielCormier.endurance = danielCormier.endurance -3
    johnJhons.endurance = johnJhons.endurance - 1.5
    blockKick()
    roundF()
    danWin()
    updateState() 
}
function touchngo(){
    johnJhons.hp = johnJhons.hp - Math.floor(Math.random()*25 +6);
    danielCormier.endurance = danielCormier.endurance -2
    johnJhons.endurance = johnJhons.endurance - 1
    blockKick()
    roundF()
    danWin()
    updateState() 
}
function highCrotch(){
    johnJhons.hp =  johnJhons.hp - Math.floor(Math.random()*80 +15);
    danielCormier.endurance = danielCormier.endurance -20
    johnJhons.endurance = johnJhons.endurance - 4
    blockKick()
    roundF()
    danWin()
    updateState() 
}
function res(){
    window.location.reload()
}

function handleKey(event) { 
    const { key } = event; 
    switch (key) { 
      case 'q': 
      lhookJohn() 
        break; 
      case 'e': 
      rhookJohn() 
        break; 
      case 'w': 
      mkickJohn() 
        break; 
      case '2': 
      hkickJohn() 
        break; 
      case 'a': 
      lkickJohn() 
        break;    
      case 'd': 
      superJohn() 
        break;     
     
      default: 
        break; 
    } 

} 
 
addEventListener('keyup',handleKey);

function handleKey2(event) { 
    const { key } = event; 
    switch (key) { 
      case 'i': 
      lhookDan() 
        break; 
      case 'p': 
      rJabDan()
        break; 
      case 'l': 
      lkickDan() 
        break; 
      case 'o': 
      takeDan()
        break; 
      case 'k': 
      touchngo() 
        break;    
      case 'u': 
      highCrotch()
        break;     
     
      default: 
        break; 
    } 
} 
 
addEventListener('keyup',handleKey2);