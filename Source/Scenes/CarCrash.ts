namespace Template {
    export class CarCrash {
        public static async firstCarCrash(): Promise<void> {
            console.log("1. Car Crash");
            await fS.Location.show(location.streetCity);
            await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge); 
            await fS.update();

            await fS.Speech.tell(Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");
            StateManager.storyState = StoryState.CarCrashHappend;
            
            
            fS.Speech.hide();
            fS.Character.hideAll();
            //TODO: *** AUTO HUPEN UND REIFEN QUIETSCHEN EINBAUEN ***
            //TODO: *** SZENENBILD ANZEIGEN AUTO ÜBERFAHREN***
        }

        public static async carCrashHappend(): Promise <void> {
            await fS.Location.show(location.streetCity);
            await fS.update();

            await fS.Speech.tell(Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");

            console.log("BAD ENDING 1 GAME OVER");
            
            fS.Speech.hide();
            fS.Character.hideAll();
            await EndScene.gameOver();
            //TODO: *** ENDING THE GAME***
        }
    }
}
