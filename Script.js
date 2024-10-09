const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});	

function AdiBul(olay){
	var sonuc = document.getElementById("sonuc")
	var uzunluk = olay.target.value.length
	if(uzunluk>6){
		sonuc.innerHTML = "Şifre uzunluğu uygundur."
		sonuc.style.color = "green"
	}
	else{
		sonuc.innerHTML = "Şifre uzunluğu uygun değildir. Uzunluk: " + uzunluk
		sonuc.style.color = "red"
	}
}