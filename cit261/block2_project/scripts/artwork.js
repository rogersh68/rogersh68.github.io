/* Artwork class constructor */

export class Artwork {
    constructor(name, artist, created, style, fact, source, imageurl) {
        this.name = name; // String, name of artwork
        this.artist = artist; // String, name of artist
        this.created = created; // Integer, year artwork was created
        this.style = style; // String, style of artwork
        this.fact = fact; // String, fact about artwork
        this.source = source; // String/URL, source of info
        this.imageurl = imageurl; // String/URL, artwork image URL
    }
}