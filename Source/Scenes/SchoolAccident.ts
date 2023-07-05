namespace Template {
    export class SchoolAccident {
        public static async firstSchoolAccident(): Promise<void> {
            console.log("1. School Accident");
            //*** FOURTH BAD ENDING***
            await fS.Speech.tell(Sho, "Was für Hausaufgaben hast du heute? Ich muss noch für Kunst was erledigen, hast du eine Schere?");
            await fS.Speech.tell(Rika, "Nein, leider nicht. Aber ich glaube, im Schrank sollten welche sein.");
            await fS.Speech.tell(Sho, "Ah, danke.");

            //Changing storyState to SchoolAccidentHappend
            StateManager.storyState = StoryState.SchoolAccidentHappend;

            fS.Sound.play(sound.openCabin, 0.5, false);
            await fS.Progress.delay(3);

            await fS.Speech.tell(Sho, "Ohje, die stehen ja ganz oben.");

            fS.Sound.play(sound.fallingObjects, 0.5, false);
            await fS.Progress.delay(1);
            fS.Sound.play(sound.cutThrowFlesh, 0.5, false);
            await fS.Progress.delay(3);
            fS.Inventory.add(items.pictureClassroom);

            fS.Character.hideAll();
            fS.Speech.hide();
            await fS.update(0.5);

            //*** GAME OVER***
            console.log("GAME OVER: School Accident");
        }
        public static async schoolAccidentHappend(): Promise<void> {
            console.log("GAME OVER: School Accident");

            fS.Sound.play(sound.openCabin, 0.5, false);
            await fS.Progress.delay(3);

            await fS.Speech.tell(Sho, "Hier gibt es bestimmt eine Schere.");

            fS.Sound.play(sound.fallingObjects, 0.5, false);
            await fS.Progress.delay(1);
            fS.Sound.play(sound.cutThrowFlesh, 0.5, false);
            await fS.Progress.delay(3);
            fS.Inventory.add(items.pictureClassroom);

            fS.Speech.hide();
            fS.Character.hideAll();
            fS.update(0.5);
            await EndScene.gameOver();
        }
    }
}
