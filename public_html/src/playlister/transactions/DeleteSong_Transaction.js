import { jsTPS_Transaction } from "../../common/jsTPS.js";

export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor (initModel, index, deletedSong){
        super();
        this.model = initModel;
        this.index = index;
        this.deletedSong = deletedSong;
    }

    doTransaction(){
        this.model.deleteSong(this.index);
    }

    undoTransaction(){
        this.model.addWithIndex(this.index, this.deletedSong);
    }
}