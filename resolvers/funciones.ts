
export const nothave =  (string: string)=>{
    if(!string){
        return true
    }else{
        return false
    }
}

export const doexist =  (string: string): boolean=>{
    if(!string){
        return true
    }else{
        return false
    }
}

export const mustbeanumber = (variable: string | number): number=>{

    if(typeof(variable)==="string"){
        return parseInt(variable)
    }else{
        return variable
    }

}

/*pm.request.raw({
        name: "fer",
        age: 12,
        dni: 23456
    })*/