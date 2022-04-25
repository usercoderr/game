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
        super(name, 250, 6, 8, 10, 15, 9, 100, 70)
        
    }

    sayHello(){
        return `I am ${this.name}. Believe in yourself. Believe in your heart and once you get there, don’t slow down.`
    }

}

class DanielCormier extends Fighters{
    constructor(name){
        super(name, 196, 4, 8, 7, 7, 6, 110, 90)
        
    }

    sayHello(){
        return `I am ${this.name}. I want to be the best.`
    }

}

class Vitor {
    constructor(name, hp, leftJab, rightJab, rightHook, hipBumpSweep, osotogari, endurance, helicopterArmbar){
        this.name = name;
        this.hp = hp
        this.leftJab = leftJab;
        this.rightJab = rightJab;
        this.rightHook = rightHook
        this.hipBumpSweep = hipBumpSweep;
        this.osotogari = osotogari;
        this.endurance = endurance;
        this.helicopterArmbar = helicopterArmbar
        
    }

    sayHello(){
        return `I am ${this.name}. I live my life for Jesus.`
    }

}

const johnJhons = new JonJons('Jon "Bones" Jons')

const vitorBelfort = new Vitor('Vitor Belfort',223, 5, 9, 11, 18, 24, 97, 113)
console.log(vitorBelfort);

const vitorBelfortNode = document.getElementById('vitor-stats'); 
const johnJhonsNode = document.getElementById('john-stats'); 

const roundNode =  document.getElementById('round'); 

function roundF(){
    if(johnJhons.hp <= 150 || johnJhons.hp >= 140|| vitorBelfort.hp <= 150){
        johnJhons.hp == 150 || vitorBelfort.hp == 150
        round += 1
    }
   
}

function vitorWin(){
    if (johnJhons.hp <= 0){
        johnJhons.hp = 0

        alert('Vitor Belfort WIN')
        res()
    }
}

function johnWin(){
    if (vitorBelfort.hp <= 0){
        vitorBelfort.hp = 0

        alert('John Jhons WIN')
        res()
    }
}

function blockKick(){
    if(johnJhons.endurance <= 50){
        johnJhons.endurance = 50
        document.querySelector('#superJohn').disabled = true
    }
    if(vitorBelfort.endurance <= 50){
        vitorBelfort.endurance = 50
        document.querySelector('#superVitor').disabled = true
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
    vitorBelfortNode.innerHTML = renderStats(vitorBelfort);
    
    
    
} 

updateState() 
blockKick()



function lhookJohn() { 
    vitorBelfort.hp =  vitorBelfort.hp - Math.floor(Math.random()*6 +1);
    johnJhons.endurance = johnJhons.endurance - 1
    vitorBelfort.endurance = vitorBelfort.endurance -0.5
    
    
    blockKick()
    roundF()
    johnWin()
    updateState() 
}
function rhookJohn(){
    vitorBelfort.hp =  vitorBelfort.hp - Math.floor(Math.random()*8 +2);
    johnJhons.endurance = johnJhons.endurance - 2
    vitorBelfort.endurance = vitorBelfort.endurance -1.5
    blockKick()
    roundF()
    johnWin()
    updateState() 
}

function hkickJohn(){
    vitorBelfort.hp =  vitorBelfort.hp - Math.floor(Math.random()*15 +6);
    johnJhons.endurance = johnJhons.endurance - 4
    vitorBelfort.endurance = vitorBelfort.endurance -3
    blockKick()
    roundF()
    johnWin()
    updateState() 
}

function mkickJohn(){
    vitorBelfort.hp =  vitorBelfort.hp - Math.floor(Math.random()*9 +1);
    johnJhons.endurance = johnJhons.endurance - 3
    vitorBelfort.endurance = vitorBelfort.endurance - 2
    blockKick()
    roundF()
    johnWin()
    updateState() 
}
function lkickJohn(){
    vitorBelfort.hp =  vitorBelfort.hp - Math.floor(Math.random()*9 +5);
    johnJhons.endurance = johnJhons.endurance - 2
    vitorBelfort.endurance = vitorBelfort.endurance -1.5
    blockKick()
    roundF()
    johnWin()
    updateState() 
}
function superJohn(){
    vitorBelfort.hp =  vitorBelfort.hp - Math.floor(Math.random()*70 +20);
    johnJhons.endurance = johnJhons.endurance - 25
    vitorBelfort.endurance = vitorBelfort.endurance - 3
    blockKick()
    roundF()
    johnWin()
    updateState() 
}





function ljabVitor(){
    johnJhons.hp = johnJhons.hp - Math.floor(Math.random()*5 +1);
    vitorBelfort.endurance = vitorBelfort.endurance -1
    johnJhons.endurance = johnJhons.endurance - 0.5
    blockKick()
    roundF()
    vitorWin()
    updateState() 
}

function rjabVitor(){
    johnJhons.hp = johnJhons.hp - Math.floor(Math.random()*9 +5);
    vitorBelfort.endurance = vitorBelfort.endurance -1
    johnJhons.endurance = johnJhons.endurance - 0.5
    blockKick()
    roundF()
    vitorWin()
    updateState() 
}


function rhookVitor(){
    johnJhons.hp = johnJhons.hp - Math.floor(Math.random()*11 +5);
    vitorBelfort.endurance = vitorBelfort.endurance -3
    johnJhons.endurance = johnJhons.endurance - 1
    blockKick()
    roundF()
    vitorWin()
    updateState() 
}
function hipVitor(){
    johnJhons.hp = johnJhons.hp - Math.floor(Math.random()*18 +7);
    vitorBelfort.endurance= vitorBelfort.endurance-3
    johnJhons.endurance = johnJhons.endurance - 1.5
    blockKick()
    roundF()
    vitorWin()
    updateState() 
}
function osotVitor(){
    johnJhons.hp = johnJhons.hp - Math.floor(Math.random()*24 +10);
    vitorBelfort.endurance = vitorBelfort.endurance -2
    johnJhons.endurance = johnJhons.endurance - 1
    blockKick()
    roundF()
    vitorWin()
    updateState() 
}
function heliVitor(){
    johnJhons.hp =  johnJhons.hp - Math.floor(Math.random()*113 +50);
    vitorBelfort.endurance = vitorBelfort.endurance -20
    johnJhons.endurance = johnJhons.endurance - 4
    blockKick()
    roundF()
    vitorWin()
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
      ljabVitor() 
        break; 
      case 'p': 
      rjabVitor()
        break; 
      case 'l': 
      rhookVitor()
        break; 
      case 'o': 
      hipVitor()
        break; 
      case 'k': 
      osotVitor()
        break;    
      case 'u': 
      heliVitor()
        break;     
     
      default: 
        break; 
    } 
} 
 
addEventListener('keyup',handleKey2);