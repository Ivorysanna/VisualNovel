namespace YesterdayGame {
    export class FallingAccident {
        public static async firstFallingAccident(): Promise<void> {
            //*** THIRD BAD ENDING***
            //TODO: ADD SOUNDS
            await fS.Speech.tell(Rika, "SHO, VORSICHT!");
            fS.Sound.play(sound.fallingStairs, 0.5, false);
            fS.Character.hideAll();
            fS.Speech.hide();
            await fS.update(0.5);
            await fS.Progress.delay(2);
            fS.Sound.play(sound.neckCracking, 0.9, false);
            await fS.Progress.delay(1);
            await TransitionManager.blendInOut();
            fS.Sound.fade(sound.cityNoise, 0, 1);
            fS.Inventory.add(items.pictureBridge);
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
