var name = 'Vishwa'  //Global scope

console.log(name)  //Vishwa

function func() {
    console.log(name)  //Vishwa
}
func()

{
    console.log(name)
}