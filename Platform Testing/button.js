class Button {
    constructor(x, y, name, text, bgcol, textcol, whatdo){
        this.x = x;
        this.y = y;
        this.name = name
        this.text = text;
        this.bgcol = bgcol;
        this.textcol = textcol;
        this.whatdo = whatdo; 
    }

    initalise(){
        this.name = createButton(this.name);
        this
    }
}