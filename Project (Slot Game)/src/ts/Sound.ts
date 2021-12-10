export class Sound {
    private tone: HTMLAudioElement;
    private name: string
    constructor(name: string) {
        this.name = name
        this.tone = new Audio(this.name)
    }
    
    public playMusic() {
        this.tone.play();
    }

    public stopMusic() {
        this.tone.pause();
    }

    // public loopPlay() {
    //     this.tone.play();
    //     this.tone.loop;
    // }
}