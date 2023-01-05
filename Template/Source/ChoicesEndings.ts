namespace Template {
    export class EndingChoices {
        public static async firstEnding(): Promise<void> {
            let endingOne = {
                longPath: "Langen Weg vorschalgen",
                shortPath: "Kurzen Weg vorschlagen"
            };

            let dialogueElement = await fS.Menu.getInput(endingOne, "choicesCSSClass");
            
            switch (dialogueElement) {
                case endingOne.longPath:
                    // continue path here
                    await fS.Speech.tell(Rika, "Lass uns den längeren Weg gehen, er ist nicht viel länger, aber dafür viel schöner.");
                    await fS.Speech.tell(Sho, "Gerne, ich habe es heute sowieso nicht so eilig.");
                    await CarCrash.carCrashHappend();
                    break;
                case endingOne.shortPath:
                    // continue path here
                    await fS.Speech.tell(Rika, "<i>Irgendwie fühle ich mich seltsam, vielleicht sollten wir den kürzeren Weg nehmen.</i>");
                    await fS.Speech.tell(Rika, "Lass uns den kürzeren Weg nehmen. Ich habe es heute etwas eilig.");
                    await fS.Speech.tell(Sho, "…Ja, klar.");
                    break;
                default:
                    console.log("Nimmt Default!");
                    break;
            }
        }
    }
}
