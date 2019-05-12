let city = "北京";
try{
	if(localStorage.city){
		city = localStorage.city
	}
}catch(e){
	//TODO handle the exception
}
export default {
		city:city
}