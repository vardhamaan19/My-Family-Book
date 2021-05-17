var images=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKPVukdplW_5cWF6MlYyv8vEm8TMiWGxg7w&usqp=CAU",
    "https://cdn2.vectorstock.com/i/1000x1000/94/86/happy-grandmother-cartoon-vector-17519486.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCW_QTa9pj4eOwaDe4hU828LauWuubzy4uA&usqp=CAU",
    "https://w7.pngwing.com/pngs/435/813/png-transparent-mother-woman-mom-cooking-s-child-fictional-character-cartoon.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWprYmpTx9jZo-MJxmFNab0dfCpBKrKgFeA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSd75xQvaM9GtM484Unw6QmNnLIRYRXOakZQ&usqp=CAU"
];
var names=[
    "Rupchand menghani(MY grandfather)",
    "Bina menghani(My grandmother)",
    "Sumit menghani(My father)",
    "Mahak menghnai( My mother)",
    "Vardhamaan 19 (ME)",
    "Vandan(My brother)"
];
var i=0;

function update()
{
    
 var number_of_members=6;
 if(i >= number_of_members)
 {
     i=0;
}
var updated_image= images[i];
var updated_name= names[i];
document.getElementById("family_member").src=images[i];
document.getElementById("family_member_name").innerHTML=names[i];
i++;
}