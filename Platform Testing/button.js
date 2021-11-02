class Button {
    constructor(x, y, h, w, name, text, bgcol, textcol, whatdo){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w; 
        this.name = name
        this.text = text;
        this.bgcol = bgcol;
        this.textcol = textcol;
        this.whatdo = whatdo; 
    }

    initalise(){
        this.name = createButton(this.name);
        this.name.mousePressed(this.whatdo);
        this.name.center();
        this.name.position(this.x, this.y);
        this.name.size(this.h, this.w);
        
    }
}