// objname = {
//  key: "value"
// }

const credentials = {
username: "Admin",
password: "admin123",

data: {
    fathername: "Eeranna",
    mothername: "Rathnamma"
}

}
// console.log(credentials.username)
// console.log(credentials.password)
// console.log(credentials.data.fathername)
// console.log(credentials.data.mothername)

console.log(credentials['username'])
    console.log(credentials['data'].fathername)
console.log(credentials['data']['mothername'])

credentials['username'] = "User"
console.log(credentials.username)
//edit a property
console.log(credentials.firstname) // undefined
credentials['firstname'] = "Ammu"
console.log(credentials.firstname)
// to delete a property
delete credentials['password']
console.log(credentials.password)

const menuitems = {
menu1: "Admin",
menu2: "PIM",
menu3: "Leave"


}
menuitems['menu4'] = "Time"
for(let item in menuitems) {
    console.log("loops starts")
    console.log(item +" : " + menuitems[item])

    console.log("loops ends")
}

