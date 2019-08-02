/* ===== Persist data with LevelDB ===================================
|  Learn more: level: https://github.com/Level/level     |
|  =============================================================*/

const level = require('level');
const chainDB = './chaindata';

// Declaring a class
class LevelSandbox {
	// Declaring the class constructor
    constructor() {
    	this.db = level(chainDB);
    }
  
  addLevelDBData(key, value){
    let self = this;
    return new Promise((resolve, reject) =>{
      self.db.put(key, value, (error)=>{
        if (error){
          console.log('Block' + key + 'submission failed' , error);
          reject(error);
        }
        console.log(`Added block #${key}`)
        resolve(`Added block #${key}`)
      });
    });
  }

// Get data from levelDB with key (Promise)
getLevelDBData(key){
  let self = this;
  return new Promise((resolve, reject) =>{
    self.db.get(key, (err, value) => {
      if(err){
        if (err.type == 'NotFoundError'){
          resolve(undefined);
        }else{
          console.log('Block' + key + 'get failed' , err);
          reject(err);
        }
      }else{
        resolve(value);
      }
    });
  });
}


// Get data from levelDB with key
/*function getLevelDBData(key){
  db.get(key, function(err, value) {
    if (err) return console.log('Not found!', err);
    console.log('Value = ' + value);
  })
}*/

// Get the Block height from levelDB
getBlockHeightFromDB(){
  return new Promise((resolve, reject) => {
    let height= -1
    this.db.createReadStream().on('data', (data) => {
      height++
    }).on('error',(error) => {
      reject(error)
    }).on('close', () =>{
      resolve(height)
    })
  })
}
}
// Export the class
module.exports.LevelSandbox = LevelSandbox;
