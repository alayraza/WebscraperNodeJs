const axios = require('axios');
const cheerio = require('cherio');
const func=async ()=>{
    const url ='' // input we recieve from user, variable here
    const {data}= await axios({
        method: "GET",
        url: url
    })
    const $ = cheerio.load(data)
    const sele = 'head > meta'
    $(sele).each((parentIdx,parentElem)=>{
        if(parentElem.attribs.property!=undefined && parentElem.attribs.property=="og:site_name" || parentElem.attribs.property=="og:title" || parentElem.attribs.property=="og:image" || parentElem.attribs.property=="og:description"){
            console.log(parentElem.attribs.property," ",parentElem.attribs.content)
        }
    })
}
func()