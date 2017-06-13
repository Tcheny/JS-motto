function Vehicule(modele, kilometrage,moteur, color){
  this.modele = modele;
  this.kilometrage = kilometrage;
  this.moteur =  moteur || "serie";
  this.color = color || "black";

  this.voyage = function(x){
    this.kilometrage += x
  }
}

console.log(ferrari = new Vehicule("f40",1400))
console.log(mini = new Vehicule("cooper", 1000,"auto","blanc"))
console.log(citroen = new Vehicule("c1", 9620,"diesel"))
console.log(renault = new Vehicule("twingo", 10860))
console.log(peugeot = new Vehicule("308", 0))
mini.voyage(180)
mini
