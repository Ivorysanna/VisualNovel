namespace Template {
    export class ConstructionSite {
        public static async firstConstructionSiteAccident(): Promise<void> {
            await fS.Location.show(location.constructionSite);
            await fS.update();
            await fS.Speech.tell(Rika, "<i>Komisch ich erinnere mich gar nicht an diese Baustelle, die muss neu sein.</i>");
            await fS.Speech.tell(Sho, "Den Weg kannte ich noch gar nicht.");
            StateManager.storyState = StoryState.ConstructionSiteAccidentHappend;
            //TODO: *** ADDING FALLING SOUND ***
            //TODO: *** ADDING CRACKING SOUND ***
            //TODO: *** SCREEN SHAKING ***
            //TODO: *** LOUD CONSTRUCTION SITE NOISE ***
            await fS.Speech.tell(Sho, "SHO, VORSICHT!");
            fS.Speech.hide();
            fS.Character.hideAll();
            //TODO: *** SHOW SCENE PICTURE

        }

        public static async constructionSiteAccident(): Promise <void>{
            //*** SECOND BAD ENDING*** 
        }
    }
}
