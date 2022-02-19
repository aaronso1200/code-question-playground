a = "A in function file"
b = "B in function file"

function haveSomeThis() {
    console.log(this.a)
    console.log(this.b)
}

class HaveThisClass {
     a = "A in have this class"
     b = "B in have this class"

    haveSomeThis() {
         console.log(this.a)
        console.log(this.b)
    }
}

module.exports= {HaveThisClass,haveSomeThis}