namespace Template {
    export class TransitionManager {

        public static async blendInOut(): Promise <void> {
            await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update();
        }
    }
}