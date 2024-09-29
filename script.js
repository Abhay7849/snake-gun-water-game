let user=prompt(" enter S, G or W")
let cpuI =Math.floor(Math.random()*3);
let cpu=["S","G","W"][cpuI]

const match = (cpu, user)=>{
if(cpu === user){
     return "Nobody WON!"
      }
else if(cpu==="S"  && user==="W"){
    return "cpu"
}
else if(cpu==="S" && user==="G"){
    return "user"
}
else if(cpu==="G" && user==="W"){
    return "user"
}
else if(cpu==="G" && user==="S"){
    return "cpu"
}
else if(cpu==="W" && user==="G"){
    return "cpu"
}
else if(cpu==="W" && user==="S"){
    return "user"
}
}
let result = match(cpu, user)
document.write(`cpu:${cpu} <br> user:${user} <br>  The winner is: ${result.toUpperCase()}`)

