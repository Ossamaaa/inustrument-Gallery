/*
 
var student2 = prompt(' what you want to study?','Econome ,Information-technology ,Accounting ');

if(student == 'Econome'){
    
}else if(student == 'Information-technology'){

}else if (student == 'Accounting'){

}else{
    alert('Okay welcome to our college')
}
*/

/*
alert('For more informations about your choice scroll down! ')
*/

var student = prompt('What is your FullName ? ');

alert('Welcome ' + student);


function writePassword() {

var userPassword = prompt('Enter the password!');
 var password = '123456';

 while(userPassword !== password){  
      userPassword = prompt('Please enter the correct password!')
 }
}
writePassword();

 var subject = prompt('whats your subject?!','Accounting , Econome');
     
 while(subject !== 'Accounting' && subject !== 'Econome'){
 
    subject = prompt('please enter on of the following Econome or Accounting');
 }
 
 


 var sub = prompt('How many lectures or subject would you like to see?');
 
 var image = ''; 
 


 for(var i = 1 ; i <=sub; i++ ){
     if(subject === 'Accounting'){
         image = image + '<img src="accounting.jpg"/>';
     }else if(subject === 'Econome'){
         image = image + '<img src="economic.jpg"/>';
     }
 }
 console.log(image);
 document.write(image); 


 var i = 0;
while( i <= 10 ) {
  console.log(i);
  i++;
}

