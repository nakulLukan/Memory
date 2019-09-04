import HttpStatus from 'http-status-codes';
import * as service from './list-thread.service';

const getThreads = (req: any, res: any) : any =>{
    let threads = service.listThreads()
    return res
        .status(HttpStatus.OK)
        .send(threads);
}

export {
    getThreads
}
