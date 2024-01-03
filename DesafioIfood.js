let NomeHeroi= "Jacolle"
let Xp=5001


switch (true) {

    case Xp<1000 :        
    console.log ("Ferro");
    break ;
    
    case Xp >=1001 && Xp <=2000:     
    console.log ("O nivel do Heroi " + NomeHeroi + " é " + "Bronze");
    break;

    case Xp>=2001 && Xp <= 5000:
    console.log ("O nivel do Heroi " + NomeHeroi + " é " + "Prata");
    break;

    case Xp>=5001 && Xp <= 7000:
    console.log ("O nivel do Heroi " + NomeHeroi + " é " + "Ouro");
    break;

    case Xp>=7001 && Xp<= 8000:
    console.log ("O nivel do Heroi " + NomeHeroi + " é " + "Platina");
    break;

    case Xp>=8001 && Xp  <= 9000:
    console.log ("O nivel do Heroi " + NomeHeroi + " é " + "Ascendente");
    break;
    
    case Xp>=9001 && Xp <= 10000:
    console.log("O nivel do Heroi " + NomeHeroi + " é " + "Imortal");
    break;

    default: Xp>=10001
    console.log ("O nivel do Heroi " + NomeHeroi + " é " + "Radiante")
    break;

     
    


}