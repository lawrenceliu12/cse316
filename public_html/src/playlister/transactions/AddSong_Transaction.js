import { jsTPS_Transaction } from "../../common/jsTPS.js";

export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor (initModel, lastIndex){
        super();
        this.model = initModel;
        this.lastIndex = lastIndex;
    }

    doTransaction(){
        this.model.add();
    }

    undoTransaction(){
        this.model.deleteSong(this.lastIndex);
    }
}