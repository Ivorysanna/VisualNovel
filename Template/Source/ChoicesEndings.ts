namespace Template {
    export async function ChoicesEndings(): fS.SceneReturn {

        let endingOneChoice = {
            longPath: "<i>Langen aber schönen Weg vorschlagen</i>",
            shortPath: "<i>Kurzen Weg vorschlagen</i>"
        };
        let firstendingDialogue = await fS.Menu.getInput(endingOneChoice, "choicesCSSClass");

        if (storyState == "endingOne") {
            switch(firstendingDialogue){
                case endingOneChoice.longPath:
                    Template.CarCrash();
                    console.log("Passt!");
                    break;

                case endingOneChoice.shortPath:
                    await fS.Speech.tell(Rika, "Lass uns den längeren Weg gehen, er ist nicht viel länger, aber dafür viel schöner.");

            }
        }
    }
}