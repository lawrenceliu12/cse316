import { jsTPS_Transaction } from "../../common/jsTPS.js";

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor (initModel, index, newTitle, newArtist, newLinkId){
        super();
        this.model = initModel;
        this.index = index;
        this.newTitle = newTitle;
        this.newArtist = newArtist;
        this.newLinkId = newLinkId;
    }

    doTransaction(){
        let oldSong = this.model.getSong(this.index);
        this.oldSongTitle = oldSong["title"];
        this.oldSongArtist = oldSong["artist"];
        this.oldSongLinkId = oldSong["youTubeId"];

        this.model.edit(this.index, this.newTitle, this.newArtist, this.newLinkId);
    }

    undoTransaction(){
        this.model.edit(this.index, this.oldSongTitle, this.oldSongArtist, this.oldSongLinkId);
    }
}