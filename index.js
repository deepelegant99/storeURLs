const urlInfo = require('./urlInfo')
const fs = require('fs')
const path = require('path')


// const myUrl = new URL(
//   "https://www.google.com/search?q=cat&oq=cat&aqs=chrome..69i57j46i433i512j35i39j69i60j69i65l2j69i60j69i61.1041j0j7&sourceid=chrome&ie=UTF-8 "
// );
// console.log(myUrl.toString())
// console.log(myUrl.host)
// console.log(myUrl.hostname)
// console.log(myUrl.pathname)
// console.log(myUrl.search)
//console.log(myUrl.searchParams)


//console.log(urlInfo("https://www.google.com/search?q=cat&oq=cat&aqs=chrome..69i57j46i433i512j35i39j69i60j69i65l2j69i60j69i61.1041j0j7&sourceid=chrome&ie=UTF-8"))

const urls = [
  "https://www.google.com/search?q=cat&oq=cat&aqs=chrome..69i57j46i433i512j35i39j69i60j69i65l2j69i60j69i61.1041j0j7&sourceid=chrome&ie=UTF-8",
  "https://www.youtube.com/watch?v=nXulsCU1geg",
  "https://www2.kickassanime.ro/anime/blue-period-232207/episode-10-242020",
  "https://sf.funcheap.com/today/"
];

fs.mkdir(path.join(__dirname, "urls"), err=>{
    if(err){
        throw err
    }else{
        console.log("...urls directory created")
        //create txt
        fs.writeFile(path.join(__dirname, "urls", "info.txt"),"", err=>{
            if(err){
                throw err
            }else{
                console.log("...info.txt created.... ")
                urls.map(url =>{
                    fs.appendFile(path.join(__dirname, "urls", "info.txt"),JSON.stringify(urlInfo(url)), err=>{
                        if(err){
                            throw err
                        }else{
                            console.log("...append completed")
                        }
                    });
                })
            }
        } )
    }
})

