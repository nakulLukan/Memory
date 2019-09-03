const HttpStatus = require("http-status-codes");
const threadService = require("./list-thread.service.js");

const getThreads = (req, res)=>{
    let threads = threadService.listThreads();
    return res
    .status(HttpStatus.OK)
    .send(threads);
}

module.exports={
    getThreads
}