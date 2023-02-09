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
                    await ConstructionSite.firstConstructionSiteAccident();
                    break;
                default:
                    console.log("Nimmt Default!");
                    break;
            }
        }

        public static async secondEnding(): Promise <void> {
            let endingTwo = {
                stayInSchool: "Vorschlagen in der Schule zu bleiben.",
                goHomeFast: "Vorschlagen sich zu beeilen."
            };

            let dialogueElement = await fS.Menu.getInput(endingTwo, "choicesCSSClass");
            
            switch (dialogueElement) {
                case endingTwo.stayInSchool:
                    // continue path here
                    console.log("STAY IN SCHOOL PATH");
                    await fS.Speech.tell(Rika, "Sho, was denkst du, sollen wir heute etwas länger bleiben.");
                    await fS.Speech.tell(Sho, "Ja, klar. Ich habe heute noch ein paar Hausaufgaben, die ich erledigen muss. Wir können gerne die gerne zusammen machen.");
                    await fS.Speech.tell(Sho, "Ja, klar, gerne.");
                    await fS.Speech.tell(Sho, "Wohnst du schon lange in Kyoto?");
                    await fS.Speech.tell(Sho, "Ja, eigentlich schon. Ich bin zwar nicht hier geboren. Aber meine Eltern sind, als ich klein war, hier hergezogen. Also ich erinnere mich an nichts anderes.");
                    await fS.Speech.tell(Sho, "Ich glaube, ich erinnere mich nicht mal daran, wie oft wir schon umgezogen sind.");

                    // -- -- -- Auswahlmöglichkeiten -- -- -- 
                    await Choices.askingShoAboutFriends();
                    await SchoolAccident.firstSchoolAccident();
                    break;

                case endingTwo.goHomeFast:
                    // continue path here
                    await fS.Speech.tell(Rika, "<i>Wenn wir uns beeilen... Vielleicht schaffen wir es dann...</i>");
                    await fS.Speech.tell(Rika, "Sho, können wir uns beeilen, ich habe es heute doch etwas eiliger.");
                    await fS.Speech.tell(Sho, "Ja, ich beeile mich. Tut mir leid.");
                    fS.Character.hideAll();
                    fS.Speech.hide();
                    // *** Going outside***
                    //TODO: ADDING STREET SOUND
                    await fS.Location.show(location.bridge);
                    await fS.update();
                    await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(70, 100));
                    await fS.Character.show(Sho, ShoPose.neutral, fS.positionPercent(30, 100));
                    await fS.update();

                    await fS.Speech.tell(Rika, "Lass uns diese Überführung nehmen. Dann kommen wir schneller auf die andere Straßenseite.");
                    await fS.Speech.tell(Sho, "Ja, können wir machen. Warum hast du es heute so eilig?");

                    //-- -- -- Auswahlmöglichkeit -- -- --
                    await Choices.goingHomeFastChoice();
                    await FallingAccident.firstFallingAccident();
                    break;
                default:
                    console.log("Nimmt Default!");
                    break;
            }
        }
    }
}
