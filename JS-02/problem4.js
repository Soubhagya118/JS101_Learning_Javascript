let stored_username="rinki";
let stored_password="Rinki@80";


let input_username="rinkii";
let input_password="Rinki@80";


if(stored_username == input_username &&stored_password == input_password ){
  console.log("user can login");
}else if(stored_username==input_username && stored_password!=input_password){
  console.log("wrong password");
}else if (stored_username != input_username &&stored_password == input_password){
  console.log("wrong username");
}else{
  console.log("wrong username & password");
}