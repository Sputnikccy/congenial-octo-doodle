export class DataFromJson{
    getData(){
        return new Promise ((resolve, reject)=>{
            resolve(JSON.parse('[{"name":"Jonas Valenciunas","age":26,"job":"Center","salary":"4.66m"},{"name":"Kyle Lowry","age":32,"job":"Point Guard","salary":"28.7m"},{"name":"Demar DeRozan","age":28,"job":"Shooting Guard","salary":"26.54m"},{"name":"Jakob Poeltl","age":22,"job":"Center","salary":"2.704m"}]'))
        })
    }
}

//This part is only for getting data, applying the single responsibility principle.