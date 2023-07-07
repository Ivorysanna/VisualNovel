namespace YesterdayGame {
    export class TransitionManager {
        //Transition blending in black screen
        public static async blendInOut(): Promise<void> {
            // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge);
            await fS.Location.show(location.darkBackground);
            fS.Speech.hide();
            fS.Character.hideAll();
            await fS.update(0.5);
        }
    }
}
