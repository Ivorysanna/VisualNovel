namespace Template {
    export class EndingChoices {
        public static async firstEnding(): Promise<void> {
            let endingOne = {
                longPath: "Langen Weg vorschlagen",
                shortPath: "Kurzen Weg vorschlagen",
            };

            let dialogueElement = await fS.Menu.getInput(endingOne, "choicesCSSClass");

            switch (dialogueElement) {
                case endingOne.longPath:
                    // continue path here
                    await fS.Speech.tell(Rika, "Lass uns den längeren Weg gehen, er ist nicht viel länger, aber dafür viel schöner.");
                    await fS.Speech.tell(Sho, "Gerne, ich habe es heute sowieso nicht so eilig.");
                    fS.Sound.play(sound.packingBag, 0.5, false);
                    await fS.Progress.delay(8);
                    fS.Speech.hide();
                    fS.Character.hideAll();
                    await fS.update(0.5);
                    await CarCrash.carCrashHappend();
                    
                    break;
                case endingOne.shortPath:
                    // continue path here
                    await fS.Speech.tell(Rika, "<i>Irgendwie fühle ich mich seltsam, vielleicht sollten wir den kürzeren Weg nehmen.</i>");
                    await fS.Speech.tell(Rika, "Lass uns den kürzeren Weg nehmen. Ich habe es heute etwas eilig.");
                    await fS.Speech.tell(Sho, "…Ja, klar.");
                    fS.Speech.hide();
                    fS.Character.hideAll();
                    await fS.update(0.5);
                    await ConstructionSite.firstConstructionSiteAccident();
                    break;
                default:
                    console.log("Nimmt Default!");
                    break;
            }
        }

        public static async secondEnding(): Promise<void> {
            let endingTwo = {
                goHomeFast: "Vorschlagen sich zu beeilen.",
                stayInSchool: "Vorschlagen in der Schule zu bleiben.",
            };

            let dialogueElement = await fS.Menu.getInput(endingTwo, "choicesCSSClass");

            switch (dialogueElement) {
                case endingTwo.stayInSchool:
                    // continue path here
                    //Show background class
                    await fS.Location.show(location.classroom);
                    await fS.update(transition.circle.duration, transition.circle.alpha, transition.circle.edge); 
                    await fS.Character.show(Sho, ShoPose.neutral, fS.positions.bottomcenter);
                    fS.update(0.5);

                    console.log("STAY IN SCHOOL PATH");
                    await fS.Speech.tell(Rika, "Sho, was denkst du, sollen wir heute etwas länger bleiben.");
                    await fS.Speech.tell(Sho, "Ja, klar. Ich habe heute noch ein paar Hausaufgaben, die ich erledigen muss. Wir können die gerne zusammen machen.");
                    await fS.Speech.tell(Sho, "Ja, klar, gerne.");
                    await fS.Speech.tell(Sho, "Wohnst du schon lange in Kyoto?");
                    await fS.Speech.tell(Rika, "Ja, eigentlich schon. Ich bin zwar nicht hier geboren. Aber meine Eltern sind, als ich klein war, hier hergezogen. Also ich erinnere mich an nichts anderes.");
                    await fS.Speech.tell(Sho, "Ich glaube, ich erinnere mich nicht mal daran, wie oft wir schon umgezogen sind.");

                    // -- -- -- Auswahlmöglichkeiten -- -- --
                    await Choices.askingShoAboutFriends();
                    //await SchoolAccident.firstSchoolAccident();
                    break;

                case endingTwo.goHomeFast:
                    // continue path here
                    //Clear screen
                    // fS.Character.hideAll();
                    // fS.Speech.hide();
                    // fS.update();
                    //Show background class
                    await fS.Location.show(location.classroom);
                    await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge); 
                    fS.Character.show(Sho, ShoPose.neutral, fS.positions.bottomcenter);
                    fS.update(0.5);

                    await fS.Speech.tell(Rika, "<i>Wenn wir uns beeilen... Vielleicht schaffen wir es dann...</i>");
                    await fS.Speech.tell(Rika, "Sho, können wir uns beeilen, ich habe es heute doch etwas eiliger.");
                    await fS.Speech.tell(Sho, "Ja, ich beeile mich. Tut mir leid.");
                    fS.Character.hideAll();
                    fS.Speech.hide();
                    // *** Going outside***
                    //TODO: ADDING STREET SOUND
                    fS.Sound.play(sound.cityNoise, 0.2, true);
                    await fS.Location.show(location.bridge);
                    await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge); 

                    await fS.update();
                    await fS.Character.show(Sho, ShoPose.neutral, fS.positionPercent(30, 100));
                    await fS.update(0.5);

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

        public static async thirdEnding(): Promise<void> {
            let endingThree = {
                todaySuccess: "Heute schaffe ich es, das weiß ich.",
                goLibrary: "Vielleicht finde ich irgendwas in der Bibliothek.",
            };
            let dialogueElement = await fS.Menu.getInput(endingThree, "choicesCSSClass");

            switch (dialogueElement) {
                case endingThree.goLibrary:
                    fS.Sound.play(sound.classTalking, 0.5, true);
                    await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
                    await fS.update(0.5);
                    await fS.Speech.tell(Rika, "<i>Vielleicht finde ich etwas in der Bibliothek. Ich kann nicht die Erste sein, die sowas erlebt.</i>");
                    await fS.Speech.tell(Sagi, "Sollen wir uns was zu essen holen und mit Sho sprechen?");
                    await fS.Speech.tell(Rika, "Geh schon mal vor. Ich möchte noch kurz in die Bibliothek.");
                    await fS.Speech.tell(Sagi, "Willst du ohne mich auf die Prüfungen lernen?");
                    await fS.Speech.tell(Rika, "Nein, ich möchte einfach nur ein Buch abgeben.");
                    await fS.Speech.tell(Sagi, "In Ordnung. Wir sehen uns später.");
                    await fS.Speech.tell(Rika, "Ja, bis später.");
                    fS.Speech.hide();
                    fS.Character.hideAll();
                    await fS.update(0.5);
                    fS.Sound.fade(sound.classTalking, 0, 1);
                    await Library.inLibrary();
                    break;

                case endingThree.todaySuccess:
                    fS.Sound.play(sound.classTalking, 0.5, true);
                    await fS.Character.show(Sagi, SagiPose.neutral, fS.positionPercent(70, 100));
                    await fS.update(0.5);
                    await fS.Speech.tell(Rika, "<i>Heute schaffe ich es, das weiß ich.</i>");
                    await fS.Speech.tell(Sagi, "Rika, sollen wir zu Sho gehen und mit ihm reden?");
                    await fS.Speech.tell(Rika, "Ja, lass uns zu ihm gehen.");

                    await fS.Character.show(Sho, ShoPose.neutral, fS.positionPercent(35, 100));
                    await fS.update(0.5);

                    await fS.Speech.tell(Rika, "Hi Sho, ich bin Rika und das ist Sagi.");
                    await fS.Speech.tell(Sho, "Hey, nett euch kennenzulernen.");
                    await fS.Speech.tell(Sagi, "Du bist erst vor kurzem hergezogen, nicht wahr?");
                    await fS.Speech.tell(Sho, "Ja genau, mein erstes Mal in Kyoto.");
                    await fS.Speech.tell(Rika, "Wo bist du denn hingezogen?");
                    await fS.Speech.tell(Rika, "<i>Ich muss versuchen, wieder mit ihm nach Hause zu gehen.</i>");
                    await fS.Speech.tell(Sho, "Ah, ich weiß gerade nicht wie die Straße heißt, aber das ist in der Nähe von einem Park.");
                    await fS.Speech.tell(Rika, "Der Umekoji Park?");
                    await fS.Speech.tell(Sho, "Ja genau, quasi gegenüber.");
                    await fS.Speech.tell(Rika, "<i>Das ist meine Chance.</i>");
                    await fS.Speech.tell(Rika, "Wenn du möchtest, können wir heute zusammen nach Hause gehen, ich wohne in der gleichen Straße.");
                    await fS.Speech.tell(Sagi, "...");
                    await fS.Speech.tell(Sho, "Oh, das wäre echt cool.");
        
                    fS.Sound.play(sound.schoolBell, 0.3, false);
                    await fS.Progress.delay(3);
                    await fS.Speech.tell(Rika, "Wir sehen uns nach dem Unterricht.");
                    await fS.Speech.tell(Rika, "Komm Sagi.");
        
                    fS.Character.hideAll();
                    fS.Speech.hide();
                    await fS.update(0.5);
                    fS.Sound.fade(sound.classTalking, 0, 1);

                    await TransitionManager.blendInOut();

                    await fS.Progress.delay(3);
                    
                    fS.Sound.play(sound.schoolBell, 0.5, false);
                    await fS.Progress.delay(3);

                    await fS.Location.show(location.classroom);
                    await fS.update();
                    await fS.Character.show(Sho, ShoPose.neutral, fS.positions.bottomcenter);
                    await fS.update(0.5);
                    await fS.Speech.tell(Rika, "Okay, können wir los?");
                    await fS.Speech.tell(Sho, "Ja, ich packe nur schnell meine Sachen zusammen.");
                    fS.Sound.play(sound.packingBag, 0.5, false);
                    await fS.Progress.delay(8);
                    fS.Character.hideAll();
                    fS.Speech.hide();
                    await fS.update(0.5);

                    //Saving Sho
                    await SavingSho.savingSho();
            }
        }

        public static async fourthEnding(): Promise<void> {
            let endingFour = {
                speakSho: "Mit Sho sprechen",
                speakSagi: "Mit Sagi sprechen",
            };
            let dialogueElement = await fS.Menu.getInput(endingFour, "choicesCSSClass");

            switch (dialogueElement) {
                case endingFour.speakSagi:
                    fS.Sound.fade(sound.librarySound, 0, 1);
                    fS.Speech.hide();
                    await fS.update();
                    await TalkingSagi.talkingWithSagi();
                    break;
                case endingFour.speakSho:
                    fS.Sound.fade(sound.librarySound, 0, 1);
                    fS.Speech.hide();
                    await fS.update();
                    await TalkingSho.talkingWithSho();
                    break;
            }
        }
        public static async firstBadEndingAgain(): Promise<void> {
            let badEndingOne = {
                saveSho: "Sho retten",
                doNothing: "Nicht reagieren",
            };
            let dialogueElement = await fS.Menu.getInput(badEndingOne, "choicesCSSClass");

            switch (dialogueElement) {
                case badEndingOne.saveSho:
                    console.log("saveSho");
                    fS.Sound.play(sound.carCrash, 0.3, false);
                    
                    fS.Character.hideAll();
                    fS.Speech.hide();
                    await fS.update(0.5);
                    await fS.Progress.delay(2);
                    fS.Sound.fade(sound.cityNoise, 0, 1);
                    await EndScene.carEnding();

                    break;
                case badEndingOne.doNothing:
                    console.log("doNothing");
                    fS.Sound.play(sound.carCrash, 0.3, false);
                    fS.Character.hideAll();
                    fS.Speech.hide();
                    await fS.update();
                    await fS.Progress.delay(2);
                    fS.Sound.fade(sound.cityNoise, 0.3, 1);
                    await EndScene.gameOver();
                    break;
            }
        }
    }
}
