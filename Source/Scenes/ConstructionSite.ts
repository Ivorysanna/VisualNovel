namespace Template {
    export class ConstructionSite {
        public static async firstConstructionSiteAccident(): Promise<void> {
            await fS.Location.show(location.constructionSite);
            fS.Sound.play(sound.constructionSite, 0.3, true);
            await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);
            
            await fS.Character.show(Sho, ShoPose.neutral, fS.positions.bottomcenter);
            await fS.update(0.5);
            await fS.Speech.tell(Rika, "<i>Komisch ich erinnere mich gar nicht an diese Baustelle, die muss neu sein.</i>");
            await fS.Speech.tell(Sho, "Den Weg kannte ich noch gar nicht.");
            StateManager.storyState = StoryState.ConstructionSiteAccidentHappend;
            fS.Sound.play(sound.metalFalling, 0.8, false);
            //TODO: *** SCREEN SHAKING ***
            fS.Character.hideAll();
            await fS.Speech.tell(Sho, "SHO, VORSICHT!");
            fS.Inventory.add(items.pictureConstructionSite);
            fS.Speech.hide();
            // await fS.Progress.delay(2);
            fS.Sound.fade(sound.constructionSite, 0, 1);
            await TransitionManager.blendInOut();
            //TODO: *** SHOW SCENE PICTURE

        }
    }
}
