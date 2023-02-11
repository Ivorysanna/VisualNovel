namespace Template {
    export class FallingAccident {
        public static async firstFallingAccident(): Promise<void> {
            //*** THIRD BAD ENDING***
            //TODO: ADD SOUNDS
            //TODO: ADD ENDPICUTRE
            fS.Speech.hide();
            fS.Character.hideAll();
            await TransitionManager.blendInOut();
            await EndScene.gameOver();
            console.log("GAME OVER: Falling Accident");  
        }
        // public static async FallingAccidentHappend(): Promise<void> {
        //     //*** THIRD BAD ENDING***
        //     //TODO: ADD SOUNDS
        //     //TODO: ADD ENDPICUTRE
        //     //*** GAME OVER***
        //     await TransitionManager.blendInOut();
        //     console.log("GAME OVER: Falling Accident");  
        // }
    }
}
