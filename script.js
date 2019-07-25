let pet = {
	life: 80,
	hunger: 40,
	status: "Okay"
}

let isGameStarted = false

function initializePet() {
	isGameStarted = true
	pet.life = 100
	pet.hunger = 40
	pet.hygiene = 70
	pet.status = "Okay"

	document.getElementById("pet-life").innerHTML = pet.life
	document.getElementById("pet-hunger").innerHTML = pet.hunger
	document.getElementById("pet-hygiene").innerHTML = pet.hygiene
	document.getElementById("pet-status").innerHTML = pet.status
	document.getElementById("pet-graphic").innerHTML = "<(o_o)>"
}

function updatePet() {
	if(pet.life === 0) {
		pet.status = "Dead"
		document.getElementById("pet-graphic").innerHTML= "<(x_x)>"
	} else if (pet.life >= 80 && pet.hunger < 30 && pet.hygiene > 70) {
		pet.status = "Happy"
		document.getElementById("pet-graphic").innerHTML= "<(^-^)>"
	} else if (pet.life > 0 && pet.hunger > 50 && pet.hygiene >= 50) {
		pet.status = "Hungry"
		document.getElementById("pet-graphic").innerHTML= "<('^')>"
	} else if (pet.life > 0 && pet.hunger < 50 && pet.hygiene < 50) {
		pet.status = "Dirty"
		document.getElementById("pet-graphic").innerHTML= "<(v_v)>"
	} else if (pet.life > 0 && pet.hunger > 50 && pet.hygiene < 50) {
		pet.status = "Not Okay"
		document.getElementById("pet-graphic").innerHTML= "<(O~O)>"
	} else {
		pet.status = "Okay"
		document.getElementById("pet-graphic").innerHTML= "<(o_o)>"
	}

	document.getElementById("pet-life").innerHTML = pet.life
	document.getElementById("pet-hunger").innerHTML = pet.hunger
	document.getElementById("pet-hygiene").innerHTML = pet.hygiene
	document.getElementById("pet-status").innerHTML = pet.status

}

function feedPet() {
	document.getElementById("pet-graphic").innerHTML="<(^o^)>"
	if(pet.hunger > 0 && pet.life > 0) {
		pet.hunger = pet.hunger - 10
	}
	if(pet.life > 0 && pet.life < 100){
		pet.life = pet.life + 10
	}

	updatePet()
}

function cleanPet() {
	document.getElementById("pet-graphic").innerHTML="<(^o^)>"
	if(pet.hygiene < 100 && pet.life > 0) {
		pet.hygiene += 10
	}
	if(pet.life > 0 && pet.life < 100){
		pet.life = pet.life + 10
	}

	updatePet()
}

// This function checks the pet's stats and then calls the updatePet function.
function checkPetStatus() {
	if(pet.hunger < 100 && pet.life > 0 && isGameStarted) {
		pet.hunger += 10
		updatePet()
	} else if(pet.hunger === 100) {
		harmPet()
	} 

	if(pet.hygiene > 0 && pet.life > 0 && isGameStarted) {
		pet.hygiene -= 10
		updatePet()
	}
	else if(pet.hygiene === 0) {
		harmPet()
	}
}

function harmPet() {
	if(pet.life > 0) {
	pet.life -= 10
	updatePet()
	}
}
	
let hungerInterval = setInterval(function(){checkPetStatus()}, 10000);