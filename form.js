function checkName(){
	document.getElementById("nameMissing").style.visibility ="visible";
	document.myForm.nama.focus();
	return false;
}
function checkTel(){
	document.getElementById("telMissing").style.visibility ="visible";
	document.myForm.tel.focus();
	return false;
}
function mailNotMatch(){
	document.getElementById("mailNotMatch").style.visibility ="visible";
	document.myForm.mail.focus();
	return false;
}
function checkTGL(){
	document.getElementById("tglMissing").style.visibility ="visible";
	document.myForm.tgl.focus();
	return false;
}
function checkKupon(){
	document.getElementById("kuponMissing").style.visibility ="visible";
	document.myForm.kupon.focus();
	return false;
}
function checkDropdown(){
	document.getElementById("kotaMissing").style.visibility ="visible";
	return false;
}
function checkRadio(){
	document.getElementById("radioMissing").style.visibility ="visible";
	return false;
}
function checkAlamat(){
	document.getElementById("alamatMissing").style.visibility ="visible";
	return false;
}
function checkValueName(){
	if (document.myForm.name.value != "" ){
	document.getElementById("nameMissing").style.visibility = "hidden";
}
}
function checkValueTel(){
	document.getElementById("telMissing").style.visibility = "hidden";
}
function checkMailMatch(){
	if (document.myForm.mail.value != "" ){
	document.getElementById("mailNotMatch").style.visibility = "hidden";
}
}
function checkValueTGL(){
	if (document.myForm.tgl.value != "" ){
	document.getElementById("tglMissing").style.visibility = "hidden";
}
}
function checkValueKupon(){
	if (document.myForm.kupon.value != "" ){
	document.getElementById("kuponMissing").style.visibility = "hidden";
}
}
function checkValueKota(){
	if (document.myForm.kota.value != "" ){
	document.getElementById("kotaMissing").style.visibility = "hidden";
}
}
function checkValueAlamat(){
	if (document.myForm.alamat.value != "" ){
	document.getElementById("alamatMissing").style.visibility = "hidden";
}
}
function checkValueRadio(){
	if (document.myForm.bayar.value != false ){
	document.getElementById("kotaMissing").style.visibility = "hidden";
}
}
function validate(){
	var alfabet=/^[a-zA-Z]+$/;
	var telepon=/^[0-9]\d{2}[0-9]\d{2}\d{4}$/;
	var nomor =/^[0-9]+$/;
	var tgl =/^(19|20)\d\d[-/](0[1-9]|1[012])[-/](0[1-9]|[12][0-9]|3[01])$/g;
	var pola_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (document.myForm.name.value=='' || !document.myForm.name.value.match(alfabet)){
		checkName()
		return false;
	}
	else if (document.myForm.telephone.value=='' ||!document.myForm.telephone.value.match(telepon)){
		checkTel()
		return false;
	}
	else if (!pola_email.test(myForm.mail.value)){
		mailNotMatch()
		return false
	}
	else if (!tgl.test(document.myForm.tgl.value)){
		checkTGL()
		return false;
	}
	else if (document.myForm.kota.value=='1'){
		checkDropdown()
		return false;
	}
	else if (document.myForm.alamat.value==''){
		checkAlamat()
		return false;
	}
	else if (!document.myForm.kupon.value.match(nomor)){
		checkKupon()
		return false;
	}
	else if (!document.getElementById('lima_km').checked && !document.getElementById('sepuluh_km').checked && !document.getElementById('limabelas_km').checked ){
		document.getElementById("checkMissing").style.visibility = "visible";
		return false
	}
	else if (!document.getElementById('cod').checked && !document.getElementById('tf').checked){
		document.getElementById("radioMissing").style.visibility = "visible";
		document.getElementById("checkMissing").style.visibility = "hidden";
		return false
	}
	else if (document.getElementById('tf').checked==true){
		document.getElementById("radioMissing").style.visibility ="hidden";
		document.getElementById("chooseTF").style.visibility = "visible";
		document.getElementById("checkMissing").style.visibility = "hidden";
		return false
	}
	else if (document.getElementById('cod').checked==true){
		document.getElementById("radioMissing").style.visibility ="hidden";
		document.getElementById("chooseTF").style.visibility = "hidden";
		document.getElementById("checkMissing").style.visibility = "hidden";
		return false
	}
}