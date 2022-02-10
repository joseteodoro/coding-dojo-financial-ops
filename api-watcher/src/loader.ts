import fs from 'fs';

export const load = (relativePath : string) : Array<any> =>{
    const files =  fs.readdirSync(relativePath)
    const output = files.map(file =>{
        fs.readFileSync(`${relativePath}/${file}`)
    })
    return output;
}
