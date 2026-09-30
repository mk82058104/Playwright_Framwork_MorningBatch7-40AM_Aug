import fs from 'fs'

export function getTestData(key){
const data =JSON.parse(fs.readFileSync('./test-data/testdata.json'))
 return data[key];
}