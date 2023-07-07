"use strict";
var YesterdayGame;
(function (YesterdayGame) {
    class Choices {
        static async livingHereChoice() {
            let livingHereChoice = {
                movedRecently: "Vor kurzem hergezogen?",
                movedLongAgo: "Wohnst du schon lange hier?",
            };
            let firstDialogueElement = await YesterdayGame.fS.Menu.getInput(livingHereChoice, "choicesCSSClass");
            switch (firstDialogueElement) {
                case livingHereChoice.movedRecently:
                    // continue path here
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Du bist erst vor kurzem hier hergezogen, oder?");
                    YesterdayGame.dataForSave.shoScore -= 10;
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ehm…ja…");
                    break;
                case livingHereChoice.movedLongAgo:
                    // continue path here
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Wohnst du schon lange hier? ");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Nein, meine Familie musste umziehen, da mein Vater oft wegen der Arbeit woanders stationiert wird.");
                    YesterdayGame.dataForSave.shoScore += 10;
                    console.log("LoveOMeter: " + YesterdayGame.dataForSave.shoScore);
                    break;
                default:
                    console.log("Default");
                    break;
            }
        }
        static async livingWhereChoice() {
            let livingWhereChoice = {
                livingInPark: "Wohnst gegenüber vom Park?",
                goingToCityTogether: "Anbieten zusammen die Stadt anzuschauen",
            };
            let secondDialogueElement = await YesterdayGame.fS.Menu.getInput(livingWhereChoice, "choicesCSSClass");
            switch (secondDialogueElement) {
                case livingWhereChoice.livingInPark:
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Du wohnst gegenüber vom Umekoji Park, nicht wahr? ");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "… J-ja, woher weißt du das?");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Oh, ehm ich habe einfach geraten…");
                    YesterdayGame.dataForSave.shoScore -= 10;
                    break;
                case livingWhereChoice.goingToCityTogether:
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Wenn du möchtest, können wir uns mal am Wochenende treffen und wir zeigen dir ein bisschen die Stadt. ");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja, gerne, dann verlaufe ich mich vielleicht nicht mehr so oft. Ich glaube, die Straße, in der ich wohne, heißt Kitsuya-bashi Dori.");
                    YesterdayGame.dataForSave.shoScore += 10;
                    break;
            }
        }
        static async goingHomeFastChoice() {
            let goingHomeFastChoice = {
                tooMuchHomework: "Viele Hausaufgaben bekommen",
                strangeDreams: "Komische Träume",
                showingFastestRoute: "Schnellsten Weg zeigen"
            };
            let thirdDialogueElement = await YesterdayGame.fS.Menu.getInput(goingHomeFastChoice, "choicesCSSClass");
            switch (thirdDialogueElement) {
                case goingHomeFastChoice.tooMuchHomework:
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Wir haben heute echt einige Aufgaben für zu Hause bekommen. Ich denke, bei dir wird das nicht anders sein.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja, stimmt. Wir haben heute auch viele Aufgaben bekommen. Sollen wir das vielleicht zusammen machen?");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "J-Ja klar…");
                    break;
                case goingHomeFastChoice.strangeDreams:
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich habe die letzten Tage etwas echt Komisches geträumt und ich habe das Gefühl, wenn wir schneller nach Hause gehen, dann hören diese Träume auf… ");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ach so…");
                    YesterdayGame.dataForSave.shoScore -= 10;
                    break;
                case goingHomeFastChoice.showingFastestRoute:
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ehm… Um dir den schnellsten Weg zu zeigen. Wir können morgen gerne den anderen Weg nehmen.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Haha. Irgendwie habe ich ein Déjá-vu. Als hättest du das mit dem schnellsten Weg schon einmal gesagt.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Was?!… Hat er auch solche komischen Träume?</i>");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Witzig, dass du das sagst. Ich habe zurzeit so komisch…");
                    YesterdayGame.dataForSave.shoScore += 10;
                    break;
            }
        }
        static async askingShoAboutFriends() {
            let askingAboutFriends = {
                hardToMoveOften: "Das muss schwer sein, so oft umzuziehen.",
                manyFriends: "Du hast bestimmt viele Freunde, wenn du so oft umziehst.",
            };
            let fourthDialogueElement = await YesterdayGame.fS.Menu.getInput(askingAboutFriends, "choicesCSSClass");
            switch (fourthDialogueElement) {
                case askingAboutFriends.hardToMoveOften:
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Das muss schwer sein, so oft umzuziehen.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja, also es geht eigentlich. Dadurch habe ich viele Bekannte, aber leider kaum gute Freunde.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Hoffentlich bleibst du dieses Mal länger hier.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "… Danke, Rika.");
                    YesterdayGame.dataForSave.shoScore += 10;
                    await YesterdayGame.SchoolAccident.firstSchoolAccident();
                    break;
                case askingAboutFriends.manyFriends:
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich habe die letzten Tage etwas echt Komisches geträumt und ich habe das Gefühl, wenn wir schneller nach Hause gehen, dann hören diese Träume auf… ");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ach so…");
                    YesterdayGame.dataForSave.shoScore -= 10;
                    await YesterdayGame.SchoolAccident.firstSchoolAccident();
                    break;
            }
        }
    }
    YesterdayGame.Choices = Choices;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class EndingChoices {
        static async firstEnding() {
            let endingOne = {
                longPath: "Langen Weg vorschlagen",
                shortPath: "Kurzen Weg vorschlagen",
            };
            let dialogueElement = await YesterdayGame.fS.Menu.getInput(endingOne, "choicesCSSClass");
            switch (dialogueElement) {
                case endingOne.longPath:
                    // continue path here
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Lass uns den längeren Weg gehen, er ist nicht viel länger, aber dafür viel schöner.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Gerne, ich habe es heute sowieso nicht so eilig.");
                    YesterdayGame.fS.Sound.play(YesterdayGame.sound.packingBag, 0.5, false);
                    await YesterdayGame.fS.Progress.delay(8);
                    YesterdayGame.fS.Speech.hide();
                    YesterdayGame.fS.Character.hideAll();
                    await YesterdayGame.fS.update(0.5);
                    await YesterdayGame.CarCrash.carCrashHappend();
                    break;
                case endingOne.shortPath:
                    // continue path here
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Irgendwie fühle ich mich seltsam, vielleicht sollten wir den kürzeren Weg nehmen.</i>");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Lass uns den kürzeren Weg nehmen. Ich habe es heute etwas eilig.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "…Ja, klar.");
                    YesterdayGame.fS.Speech.hide();
                    YesterdayGame.fS.Character.hideAll();
                    await YesterdayGame.fS.update(0.5);
                    await YesterdayGame.ConstructionSite.firstConstructionSiteAccident();
                    break;
                default:
                    console.log("Nimmt Default!");
                    break;
            }
        }
        static async secondEnding() {
            let endingTwo = {
                goHomeFast: "Vorschlagen sich zu beeilen.",
                stayInSchool: "Vorschlagen in der Schule zu bleiben.",
            };
            let dialogueElement = await YesterdayGame.fS.Menu.getInput(endingTwo, "choicesCSSClass");
            switch (dialogueElement) {
                case endingTwo.stayInSchool:
                    // continue path here
                    //Show background class
                    await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                    await YesterdayGame.fS.update(YesterdayGame.transition.circle.duration, YesterdayGame.transition.circle.alpha, YesterdayGame.transition.circle.edge);
                    await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                    YesterdayGame.fS.update(0.5);
                    console.log("STAY IN SCHOOL PATH");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Sho, was denkst du, sollen wir heute etwas länger bleiben.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja, klar. Ich habe heute noch ein paar Hausaufgaben, die ich erledigen muss. Wir können die gerne zusammen machen.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja, klar, gerne.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Wohnst du schon lange in Kyoto?");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja, eigentlich schon. Ich bin zwar nicht hier geboren. Aber meine Eltern sind, als ich klein war, hier hergezogen. Also ich erinnere mich an nichts anderes.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ich glaube, ich erinnere mich nicht mal daran, wie oft wir schon umgezogen sind.");
                    // -- -- -- Auswahlmöglichkeiten -- -- --
                    await YesterdayGame.Choices.askingShoAboutFriends();
                    //await SchoolAccident.firstSchoolAccident();
                    break;
                case endingTwo.goHomeFast:
                    // continue path here
                    //Clear screen
                    // fS.Character.hideAll();
                    // fS.Speech.hide();
                    // fS.update();
                    //Show background class
                    await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                    await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                    YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                    YesterdayGame.fS.update(0.5);
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Wenn wir uns beeilen... Vielleicht schaffen wir es dann...</i>");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Sho, können wir uns beeilen, ich habe es heute doch etwas eiliger.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja, ich beeile mich. Tut mir leid.");
                    YesterdayGame.fS.Character.hideAll();
                    YesterdayGame.fS.Speech.hide();
                    // *** Going outside***
                    //TODO: ADDING STREET SOUND
                    YesterdayGame.fS.Sound.play(YesterdayGame.sound.cityNoise, 0.2, true);
                    await YesterdayGame.fS.Location.show(YesterdayGame.location.bridge);
                    await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                    await YesterdayGame.fS.update();
                    await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(30, 100));
                    await YesterdayGame.fS.update(0.5);
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Lass uns diese Überführung nehmen. Dann kommen wir schneller auf die andere Straßenseite.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja, können wir machen. Warum hast du es heute so eilig?");
                    //-- -- -- Auswahlmöglichkeit -- -- --
                    await YesterdayGame.Choices.goingHomeFastChoice();
                    await YesterdayGame.FallingAccident.firstFallingAccident();
                    break;
                default:
                    console.log("Nimmt Default!");
                    break;
            }
        }
        static async thirdEnding() {
            let endingThree = {
                todaySuccess: "Heute schaffe ich es, das weiß ich.",
                goLibrary: "Vielleicht finde ich irgendwas in der Bibliothek.",
            };
            let dialogueElement = await YesterdayGame.fS.Menu.getInput(endingThree, "choicesCSSClass");
            switch (dialogueElement) {
                case endingThree.goLibrary:
                    YesterdayGame.fS.Sound.play(YesterdayGame.sound.classTalking, 0.5, true);
                    await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                    await YesterdayGame.fS.update(0.5);
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Vielleicht finde ich etwas in der Bibliothek. Ich kann nicht die Erste sein, die sowas erlebt.</i>");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Sollen wir uns was zu essen holen und mit Sho sprechen?");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Geh schon mal vor. Ich möchte noch kurz in die Bibliothek.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Willst du ohne mich auf die Prüfungen lernen?");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Nein, ich möchte einfach nur ein Buch abgeben.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "In Ordnung. Wir sehen uns später.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja, bis später.");
                    YesterdayGame.fS.Speech.hide();
                    YesterdayGame.fS.Character.hideAll();
                    await YesterdayGame.fS.update(0.5);
                    YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0, 1);
                    await YesterdayGame.Library.inLibrary();
                    break;
                case endingThree.todaySuccess:
                    YesterdayGame.fS.Sound.play(YesterdayGame.sound.classTalking, 0.5, true);
                    await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positionPercent(70, 100));
                    await YesterdayGame.fS.update(0.5);
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Heute schaffe ich es, das weiß ich.</i>");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Rika, sollen wir zu Sho gehen und mit ihm reden?");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja, lass uns zu ihm gehen.");
                    await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(35, 100));
                    await YesterdayGame.fS.update(0.5);
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Hi Sho, ich bin Rika und das ist Sagi.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Hey, nett euch kennenzulernen.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Du bist erst vor kurzem hergezogen, nicht wahr?");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja genau, mein erstes Mal in Kyoto.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Wo bist du denn hingezogen?");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich muss versuchen, wieder mit ihm nach Hause zu gehen.</i>");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ah, ich weiß gerade nicht wie die Straße heißt, aber das ist in der Nähe von einem Park.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Der Umekoji Park?");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja genau, quasi gegenüber.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Das ist meine Chance.</i>");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Wenn du möchtest, können wir heute zusammen nach Hause gehen, ich wohne in der gleichen Straße.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "...");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Oh, das wäre echt cool.");
                    YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                    await YesterdayGame.fS.Progress.delay(3);
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Wir sehen uns nach dem Unterricht.");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Komm Sagi.");
                    YesterdayGame.fS.Character.hideAll();
                    YesterdayGame.fS.Speech.hide();
                    await YesterdayGame.fS.update(0.5);
                    YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0, 1);
                    await YesterdayGame.TransitionManager.blendInOut();
                    await YesterdayGame.fS.Progress.delay(3);
                    YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.5, false);
                    await YesterdayGame.fS.Progress.delay(3);
                    await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                    await YesterdayGame.fS.update();
                    await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                    await YesterdayGame.fS.update(0.5);
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Okay, können wir los?");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja, ich packe nur schnell meine Sachen zusammen.");
                    YesterdayGame.fS.Sound.play(YesterdayGame.sound.packingBag, 0.5, false);
                    await YesterdayGame.fS.Progress.delay(8);
                    YesterdayGame.fS.Character.hideAll();
                    YesterdayGame.fS.Speech.hide();
                    await YesterdayGame.fS.update(0.5);
                    //Saving Sho
                    await YesterdayGame.SavingSho.savingSho();
            }
        }
        static async fourthEnding() {
            let endingFour = {
                speakSho: "Mit Sho sprechen",
                speakSagi: "Mit Sagi sprechen",
            };
            let dialogueElement = await YesterdayGame.fS.Menu.getInput(endingFour, "choicesCSSClass");
            switch (dialogueElement) {
                case endingFour.speakSagi:
                    YesterdayGame.fS.Sound.fade(YesterdayGame.sound.librarySound, 0, 1);
                    YesterdayGame.fS.Speech.hide();
                    await YesterdayGame.fS.update();
                    await YesterdayGame.TalkingSagi.talkingWithSagi();
                    break;
                case endingFour.speakSho:
                    YesterdayGame.fS.Sound.fade(YesterdayGame.sound.librarySound, 0, 1);
                    YesterdayGame.fS.Speech.hide();
                    await YesterdayGame.fS.update();
                    await YesterdayGame.TalkingSho.talkingWithSho();
                    break;
            }
        }
        static async firstBadEndingAgain() {
            let badEndingOne = {
                saveSho: "Sho retten",
                doNothing: "Nicht reagieren",
            };
            let dialogueElement = await YesterdayGame.fS.Menu.getInput(badEndingOne, "choicesCSSClass");
            switch (dialogueElement) {
                case badEndingOne.saveSho:
                    console.log("saveSho");
                    YesterdayGame.fS.Sound.play(YesterdayGame.sound.carCrash, 0.3, false);
                    YesterdayGame.fS.Character.hideAll();
                    YesterdayGame.fS.Speech.hide();
                    await YesterdayGame.fS.update(0.5);
                    await YesterdayGame.fS.Progress.delay(2);
                    YesterdayGame.fS.Sound.fade(YesterdayGame.sound.cityNoise, 0, 1);
                    await YesterdayGame.EndScene.carEnding();
                    break;
                case badEndingOne.doNothing:
                    console.log("doNothing");
                    YesterdayGame.fS.Sound.play(YesterdayGame.sound.carCrash, 0.3, false);
                    YesterdayGame.fS.Character.hideAll();
                    YesterdayGame.fS.Speech.hide();
                    await YesterdayGame.fS.update();
                    await YesterdayGame.fS.Progress.delay(2);
                    YesterdayGame.fS.Sound.fade(YesterdayGame.sound.cityNoise, 0.3, 1);
                    await YesterdayGame.EndScene.gameOver();
                    break;
            }
        }
    }
    YesterdayGame.EndingChoices = EndingChoices;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class InterfaceHelper {
        //toggle css class hidden for the button with id ausleihbutton
        static toggleAusleihButton() {
            let ausleihButton = document.getElementById("ausleihbutton");
            ausleihButton.classList.toggle("hidden");
        }
        static showAusleihButton() {
            let ausleihButton = document.getElementById("ausleihbutton");
            ausleihButton.classList.remove("hidden");
        }
        static hideAusleihButton() {
            let ausleihButton = document.getElementById("ausleihbutton");
            ausleihButton.classList.add("hidden");
        }
    }
    YesterdayGame.InterfaceHelper = InterfaceHelper;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    YesterdayGame.f = FudgeCore;
    YesterdayGame.fS = FudgeStory;
    console.log("FudgeStory template starting");
    //*** TRANSITIONS ***
    YesterdayGame.transition = {
        block: {
            duration: 1.5,
            alpha: "Images/Transitions/block.png",
            edge: 1,
        },
        circle: {
            duration: 1.5,
            alpha: "Images/Transitions/cw-top.jpg",
            edge: 1,
        },
        wipeLeft: {
            duration: 1.5,
            alpha: "Images/Transitions/wipeLeft.jpg",
            edge: 1,
        },
        wipeRight: {
            duration: 1,
            alpha: "Images/Transitions/wipeRight.png",
            edge: 1,
        },
    };
    YesterdayGame.data = {
        Protagonist: {
            name: "Protagonist",
        },
        score: {
            a: 0,
        },
        ended: false,
        correct: false,
    };
    //*** SOUND ***
    YesterdayGame.sound = {
        // Themes
        // SFX
        outside: "Sounds/outside.wav",
        alarmClock: "Sounds/alarmClock.wav",
        book: "Sounds/book.wav",
        breakChatter: "Sounds/breakChatter.mp3",
        carHorn: "Sounds/carHorn.mp3",
        cityNoise: "Sounds/cityNoise.mp3",
        // classWhispering: "Sounds/classWhispering.mp3",
        cloth: "Sounds/cloths.wav",
        constructionSite: "Sounds/constructionSite.mp3",
        intenseSound: "Sounds/intenseSound.wav",
        librarySound: "Sounds/librarySound.mp3",
        neckCracking: "Sounds/neckCracking.mp3",
        packingBag: "Sounds/packingBag.mp3",
        schoolBell: "Sounds/schoolBell.mp3",
        classTalking: "Sounds/classTalking.mp3",
        carCrash: "Sounds/carCrash.wav",
        metalFalling: "Sounds/metalFalling.mp3",
        fallingStairs: "Sounds/fallingStairs.wav",
        fallingObjects: "Sounds/fallingObjects.mp3",
        cutThrowFlesh: "Sounds/cutFleshSound.mp3",
        openCabin: "Sounds/openCabin.wav",
    };
    //*** BACKGROUNDS ***
    YesterdayGame.location = {
        alley: {
            name: "Alley",
            background: "Images/Backgrounds/alley.png",
            //foreground: ""
        },
        bedroom: {
            name: "Bedroom",
            background: "Images/Backgrounds/bedroom.png",
        },
        classroom: {
            name: "Classroom",
            background: "Images/Backgrounds/classroom.png",
        },
        library: {
            name: "Library",
            background: "Images/Backgrounds/library.png",
        },
        steps: {
            name: "Steps",
            background: "Images/Backgrounds/steps.png",
        },
        street: {
            name: "Street",
            background: "Images/Backgrounds/street.png",
        },
        uni: {
            name: "Uni",
            background: "Images/Backgrounds/uni.png",
        },
        darkBackground: {
            name: "DarkBackground",
            background: "Images/Backgrounds/darkbackground.png",
        },
        streetCity: {
            name: "Streetcity",
            background: "Images/Backgrounds/streetCity.png",
        },
        constructionSite: {
            name: "ConstructionSite",
            background: "Images/Backgrounds/constructionSite.png",
        },
        bridge: {
            name: "Bridge",
            background: "Images/Backgrounds/bridge.png",
        },
    };
    //*** CHARACTERS ***
    YesterdayGame.characters = {
        narrator: {
            name: "",
        },
        protagonist: {
            name: "",
        },
        Rika: {
            name: "Rika Satō",
            origin: YesterdayGame.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Rika/rika_neutral.png",
                happy: "Images/Character/Rika/rika_happy.png",
                angry: "Images/Character/Rika/rika_angry.png",
                sad: "Images/Character/Rika/rika_sad.png",
            },
        },
        RikaMother: {
            name: "Rikas Mutter",
            origin: YesterdayGame.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/aisaka_happy.png",
            },
        },
        Sagi: {
            name: "Sagi Aoki",
            origin: YesterdayGame.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Sagi/sagi_neutral.png",
                happy: "Images/Character/Sagi/sagi_happy.png",
                angry: "Images/Character/Sagi/sagi_angry.png",
                sad: "Images/Character/Sagi/sagi_happy.png",
                insane: "Images/Character/Rika/rika_insane.png",
            },
        },
        Sho: {
            name: "Shō Rai",
            origin: YesterdayGame.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Sho/sho_neutral.png",
                happy: "Images/Character/Sho/sho_happy.png",
                angry: "Images/Character/Sho/sho_angry.png",
                sad: "Images/Character/Sho/sho_sad.png",
            },
        },
        Teacher: {
            name: "Lehrerin",
            origin: YesterdayGame.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Teacher/teacher_neutral.png",
            },
        },
    };
    let StoryState;
    (function (StoryState) {
        StoryState[StoryState["FirstRun"] = 0] = "FirstRun";
        StoryState[StoryState["CarCrashHappend"] = 1] = "CarCrashHappend";
        StoryState[StoryState["ConstructionSiteAccidentHappend"] = 2] = "ConstructionSiteAccidentHappend";
        StoryState[StoryState["SchoolAccidentHappend"] = 3] = "SchoolAccidentHappend";
    })(StoryState = YesterdayGame.StoryState || (YesterdayGame.StoryState = {}));
    // *** DATA THAT WILL BE SAVED (GAME PROGRESS) ***
    YesterdayGame.dataForSave = {
        // nameProtagonist: "",
        shoScore: 0,
        // items: "", Items speichern hat nicht funktioniert
        storyState: StoryState.FirstRun,
        choicesState: "firstChoice",
        endingState: "",
        carCrashHappend: false,
    };
    // *** ITEMS ***
    //Static = true Item  wird nicht konsumiert
    YesterdayGame.items = {
        pictureStreet: {
            name: "Straßenbild",
            image: "Images/Backgrounds/streetCity.png",
            description: "Ein Bild von der Straße",
            static: true,
        },
        pictureConstructionSite: {
            name: "Baustellenbild",
            image: "Images/Backgrounds/constructionSite.png",
            description: "Ein Bild von der Baustelle",
            static: true,
        },
        pictureSteps: {
            name: "Stufenbild",
            image: "Images/Backgrounds/steps.png",
            description: "Ein Bild von Stufen",
            static: true,
        },
        pictureClassroom: {
            name: "Klassenzimmerbild",
            image: "Images/Backgrounds/steps.png",
            description: "Ein Bild von unserem Klassenzimmer",
            static: true,
        },
        pictureBridge: {
            name: "Brückenbild",
            image: "Images/Backgrounds/bridge.png",
            description: "Ein Bild von der Brücke",
            static: true,
        }
    };
    // *** CREDITS ***
    let credits = [
        "<b>Bilder:</b></br>\
        <i>Hintergrundbilder/Taschenuhr: Pixabay</i> </br>\
        <i>Animefilter: Animefilter.com</i>",
        "<b>Sounds:</b></br>\
        <i>Freesound.org und Youtube</i>",
        "<b>Storyinspiration: </b></br>\
        <i>Vocaloid Lied: Heat-Haze Days / カゲロウデイズ</i> </br>\ ",
    ];
    // *** ANIMATION ***
    function redSagiRight() {
        return {
            start: { translation: YesterdayGame.fS.positionPercent(20, 100), color: YesterdayGame.fS.Color.CSS("red", 1) },
            end: { translation: YesterdayGame.fS.positionPercent(20, 100), color: YesterdayGame.fS.Color.CSS("red", 0) },
            duration: 4,
            playmode: YesterdayGame.fS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    YesterdayGame.redSagiRight = redSagiRight;
    function redSagiLeft() {
        return {
            start: { translation: YesterdayGame.fS.positionPercent(70, 100), color: YesterdayGame.fS.Color.CSS("red", 1) },
            end: { translation: YesterdayGame.fS.positionPercent(70, 100), color: YesterdayGame.fS.Color.CSS("red", 0) },
            duration: 4,
            playmode: YesterdayGame.fS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    YesterdayGame.redSagiLeft = redSagiLeft;
    // *** DATA THAT WILL BE SAVED (GAME PROGRESS) ***
    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Speichern",
        load: "Laden",
        credits: "Credits",
    };
    let gameMenu;
    let shoBar;
    //open = true, closed = false
    let menuIsOpen = false;
    async function btnFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await YesterdayGame.fS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await YesterdayGame.fS.Progress.load();
                break;
            case inGameMenuButtons.credits:
                let current = 0;
                let flip = { back: "Zurück", next: "Weiter", close: "X" };
                let choice;
                YesterdayGame.fS.Text.addClass("credits");
                do {
                    YesterdayGame.fS.Text.print(credits[current]);
                    choice = await YesterdayGame.fS.Menu.getInput(flip, "flip");
                    switch (choice) {
                        case flip.back:
                            current = Math.max(0, current - 1);
                            break;
                        case flip.next:
                            current = Math.min(credits.length - 1, current + 1);
                            break;
                    }
                } while (choice != flip.close);
                YesterdayGame.fS.Text.close();
                break;
            default:
        }
    }
    //***  Hide Button ***
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("ausleihbutton").addEventListener("click", () => {
            YesterdayGame.InterfaceHelper.toggleAusleihButton();
        });
    }, false);
    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPres);
    async function hndKeyPres(_event) {
        switch (_event.code) {
            case YesterdayGame.f.KEYBOARD_CODE.S:
                console.log("Save...");
                await YesterdayGame.fS.Progress.save();
                break;
            case YesterdayGame.f.KEYBOARD_CODE.L:
                console.log("Load");
                await YesterdayGame.fS.Progress.load();
                break;
            case YesterdayGame.f.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    shoBar.classList.add("hidden");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    shoBar.classList.remove("hidden");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
            case YesterdayGame.f.KEYBOARD_CODE.I:
                await YesterdayGame.fS.Inventory.open();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        shoBar = document.getElementById("shoBar");
        gameMenu = YesterdayGame.fS.Menu.create(inGameMenuButtons, btnFunctionalities, "gameMenuCSSClass");
        gameMenu.close();
        /*** SCENE HIERARCHY ***/
        YesterdayGame.fS.Speech.hide();
        let scenes = [
            // *** FIRST RUN ***
            { id: "wakingUpFirstTime", scene: YesterdayGame.WakingUp, name: "Waking up" },
            { id: "toSchoolFirstTime", scene: YesterdayGame.GoingToSchool, name: "Going to School firstTime" },
            { id: "inClassFirstTime", scene: YesterdayGame.InClass, name: "In Class for firstTime" },
            // *** SECOND RUN ***
            { id: "wakingUpCarCrash", scene: YesterdayGame.WakingUp, name: "Waking up Carcrash" },
            { id: "toSchoolAfterCarCrash", scene: YesterdayGame.GoingToSchool, name: "Going to School after Carcrash" },
            { id: "inClassAfterCarCrash", scene: YesterdayGame.InClass, name: "In Class after Carcrash" },
            // *** THIRD RUN ***
            { id: "inClassAfterConstructionAccident", scene: YesterdayGame.WakingUp, name: "Waking up after Construction Site Accident" },
            { id: "toSchoolAfterConstructionAccident", scene: YesterdayGame.GoingToSchool, name: "Going to School after Construction Site Accident" },
            { id: "inClassAfterConstructionAccident", scene: YesterdayGame.InClass, name: "In Class AfterConstructionAccident" },
            // *** LAST RUN ***
            { id: "wakingUpAfterSchoolAccident", scene: YesterdayGame.WakingUp, name: "Waking up after School Accident" },
            { id: "toSchoolAfterSchoolAccident", scene: YesterdayGame.GoingToSchool, name: "Going to School after School Accident" },
            { id: "inClassAfterSchoolAccident", scene: YesterdayGame.InClass, name: "In Class after School Accident" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        YesterdayGame.dataForSave = YesterdayGame.fS.Progress.setData(YesterdayGame.dataForSave, uiElement);
        // start the sequence
        YesterdayGame.fS.Progress.go(scenes);
    }
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    //*** RIKA *** 
    YesterdayGame.Rika = YesterdayGame.characters.Rika;
    // export  const RikaPose = characters.Rika.pose;
    //*** SAGI ***
    YesterdayGame.Sagi = YesterdayGame.characters.Sagi;
    YesterdayGame.SagiPose = YesterdayGame.characters.Sagi.pose;
    //*** SHO ***
    YesterdayGame.Sho = YesterdayGame.characters.Sho;
    YesterdayGame.ShoPose = YesterdayGame.characters.Sho.pose;
    //*** RIKAS MOTHER ***
    YesterdayGame.RikaMother = YesterdayGame.characters.RikaMother;
    YesterdayGame.RikaMotherPose = YesterdayGame.characters.RikaMother.pose;
    //*** TEACHER ***
    YesterdayGame.Teacher = YesterdayGame.characters.Teacher;
    YesterdayGame.TeacherPose = YesterdayGame.characters.Teacher.pose;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class TransitionManager {
        //Transition blending in black screen
        static async blendInOut() {
            // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge);
            await YesterdayGame.fS.Location.show(YesterdayGame.location.darkBackground);
            YesterdayGame.fS.Speech.hide();
            YesterdayGame.fS.Character.hideAll();
            await YesterdayGame.fS.update(0.5);
        }
    }
    YesterdayGame.TransitionManager = TransitionManager;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class CarCrash {
        static async firstCarCrash() {
            console.log("1. Car Crash");
            await YesterdayGame.fS.Location.show(YesterdayGame.location.streetCity);
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.cityNoise, 0.2, true);
            await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
            await YesterdayGame.fS.update();
            await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(40, 100));
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");
            YesterdayGame.dataForSave.storyState = YesterdayGame.StoryState.CarCrashHappend;
            YesterdayGame.fS.Inventory.add(YesterdayGame.items.pictureStreet);
            YesterdayGame.fS.Speech.hide();
            YesterdayGame.fS.Character.hideAll();
            await YesterdayGame.fS.update();
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.carHorn, 0.3, false);
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.carCrash, 0.3, false);
            await YesterdayGame.fS.Progress.delay(2);
            YesterdayGame.fS.Sound.fade(YesterdayGame.sound.cityNoise, 0, 1);
        }
        static async carCrashHappend() {
            await YesterdayGame.fS.Location.show(YesterdayGame.location.streetCity);
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.cityNoise, 0.2, true);
            await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
            await YesterdayGame.fS.update();
            await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(40, 100));
            await YesterdayGame.fS.update(0.5);
            // await fS.update();
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");
            console.log("BAD ENDING 1 GAME OVER");
            YesterdayGame.fS.Speech.hide();
            YesterdayGame.fS.Character.hideAll();
            await YesterdayGame.fS.update();
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.carHorn, 0.3, false);
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.carCrash, 0.3, false);
            await YesterdayGame.fS.Progress.delay(2);
            YesterdayGame.fS.Sound.fade(YesterdayGame.sound.cityNoise, 0, 1);
            await YesterdayGame.EndScene.gameOver();
            //TODO: *** ENDING THE GAME***
        }
    }
    YesterdayGame.CarCrash = CarCrash;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class ConstructionSite {
        static async firstConstructionSiteAccident() {
            await YesterdayGame.fS.Location.show(YesterdayGame.location.constructionSite);
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.constructionSite, 0.3, true);
            await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
            await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positions.bottomcenter);
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Komisch ich erinnere mich gar nicht an diese Baustelle, die muss neu sein.</i>");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Den Weg kannte ich noch gar nicht.");
            YesterdayGame.dataForSave.storyState = YesterdayGame.StoryState.ConstructionSiteAccidentHappend;
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.metalFalling, 0.8, false);
            //TODO: *** SCREEN SHAKING ***
            YesterdayGame.fS.Character.hideAll();
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "SHO, VORSICHT!");
            YesterdayGame.fS.Inventory.add(YesterdayGame.items.pictureConstructionSite);
            YesterdayGame.fS.Character.hideAll();
            YesterdayGame.fS.Speech.hide();
            await YesterdayGame.fS.update(0.5);
            // await fS.Progress.delay(2);
            YesterdayGame.fS.Sound.fade(YesterdayGame.sound.constructionSite, 0, 1);
            await YesterdayGame.TransitionManager.blendInOut();
            //TODO: *** SHOW SCENE PICTURE
        }
    }
    YesterdayGame.ConstructionSite = ConstructionSite;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class EndScene {
        static async gameOver() {
            console.log("End Scene starting");
            await YesterdayGame.fS.Location.show(YesterdayGame.location.darkBackground);
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.characters.narrator, "Du hast es nicht geschafft, Sho zu retten.");
            let startingAgain = {
                startAgain: "Sho retten",
            };
            let userInput = await YesterdayGame.fS.Menu.getInput(startingAgain, "play-again");
            if (userInput == startingAgain.startAgain) {
                window.location.reload();
            }
        }
        static async carEnding() {
            console.log("Car Game Over starting");
            await YesterdayGame.fS.Location.show(YesterdayGame.location.darkBackground);
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.characters.narrator, "Du hast es geschafft, Sho zu retten.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.characters.narrator, "Aber du musstest dafür dein Leben geben.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.characters.narrator, "ENDING: Auto Unfall");
        }
        static async goodEndingWaiting() {
            console.log("Good Ending starting");
            await YesterdayGame.fS.Location.show(YesterdayGame.location.darkBackground);
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.characters.narrator, "Du hast es geschafft, Sho zu retten.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.characters.narrator, "ENDING: Gewartet");
        }
        static async badEndingSagi() {
            console.log("Bad Ending Sagi starting");
            await YesterdayGame.fS.Location.show(YesterdayGame.location.darkBackground);
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.characters.narrator, "Du hast es nicht geschafft, Sho zu retten.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.characters.narrator, "ENDING: Sagi konfrontiert");
        }
    }
    YesterdayGame.EndScene = EndScene;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class FallingAccident {
        static async firstFallingAccident() {
            //*** THIRD BAD ENDING***
            //TODO: ADD SOUNDS
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "SHO, VORSICHT!");
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.fallingStairs, 0.5, false);
            YesterdayGame.fS.Character.hideAll();
            YesterdayGame.fS.Speech.hide();
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Progress.delay(2);
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.neckCracking, 0.9, false);
            await YesterdayGame.fS.Progress.delay(1);
            await YesterdayGame.TransitionManager.blendInOut();
            YesterdayGame.fS.Sound.fade(YesterdayGame.sound.cityNoise, 0, 1);
            YesterdayGame.fS.Inventory.add(YesterdayGame.items.pictureBridge);
            await YesterdayGame.EndScene.gameOver();
            console.log("GAME OVER: Falling Accident");
        }
    }
    YesterdayGame.FallingAccident = FallingAccident;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    async function GoingToSchool() {
        console.log("Going to School starting");
        switch (YesterdayGame.dataForSave.storyState) {
            case YesterdayGame.StoryState.FirstRun:
                console.log("First Run!");
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.outside, 0.5, true);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.alley);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Na, da bist du ja endlich. Komm, sonst kommen wir zu spät!");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Tut mir leid, zurzeit schlafe ich wirklich schlecht. Ich frage mich wirklich, woran das liegt …");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Vielleicht bist du ja nur nervös, du weißt ja heute kommt der neue Schüler. Ich frage mich, wie er drauf ist.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Hey, dann bekommst du ja vielleicht auch mal einen Freund.");
                // TODO: *** LEICHTES BILD WACKELN***
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ugh...");
                //await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
                //await fS.update();
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Was ist los?!");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich weiß nicht … irgendwie habe ich gerade ganz schlimme Kopfschmerzen bekommen. Hoffentlich ist es gleich vorbei.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Hmm … du solltest wirklich mehr trinken, Rika.");
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Character.hideAll();
                await YesterdayGame.fS.update(0.5);
                // Sagi und Rika sind auf dem Campus
                // await TransitionManager.blendInOut();
                await YesterdayGame.fS.Location.show(YesterdayGame.location.uni);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update();
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Komm schnell, wir schaffen es gerade so rechtzeitig.");
                await YesterdayGame.fS.Progress.delay(3);
                YesterdayGame.fS.Character.hideAll();
                YesterdayGame.fS.Speech.hide();
                await YesterdayGame.fS.update(0.5);
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.outside, 0, 1);
                // await TransitionManager.blendInOut();
                break;
            case YesterdayGame.StoryState.CarCrashHappend:
                console.log("Crash Happend!");
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.outside, 0.5, true);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.alley);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Na, da bist du ja endlich. Komm, sonst kommen wir zu spät!");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Tut mir leid, zurzeit schlafe ich wirklich schlecht. Ich frage mich wirklich, woran das liegt …");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Vielleicht bist du ja nur nervös, du weißt ja heute kommt der neue Schüler. Ich frage mich, wie er darauf ist. Hey, dann bekommst du ja vielleicht auch mal einen Freund.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Was hast du gerade gesagt?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Ein neuer Schüler kommt heute in unsere Klasse. Bist du wirklich okay? Du siehst etwas blass aus…");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja, ich denke schon. Du hast recht, ich sollte wirklich mehr trinken.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Trinken? Das habe ich jetzt nicht gesagt, aber ja, das könnte helfen.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Hast du nicht? Ich dachte, dass du das gesagt hättest…");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Komm, wir gehen los. Sonst kommen wir zu spät.");
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Character.hideAll();
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.uni);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update();
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                await YesterdayGame.fS.Progress.delay(3);
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Komm wir…");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Wir schaffen es zum Unterricht, keine Sorge.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "...");
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Character.hideAll();
                await YesterdayGame.fS.update(0.5);
                // await TransitionManager.blendInOut();
                // await fS.update(0.5);
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.outside, 0, 1);
                break;
            case YesterdayGame.StoryState.ConstructionSiteAccidentHappend:
                console.log("Construction Accident happend!");
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.outside, 0.5, true);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.alley);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Da bist du ja endlich.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Sagi, hast du manchmal das Gefühl, dass du den gleichen Tag immer wieder neu erlebst?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Nein. Warum fragst du mich sowas Komisches?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "<i>Warum hat sie denn so wütend reagiert, hat sie auch solche komischen Träume?</i>");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "… Komm wir gehen jetzt, sonst kommen wir zu spät.");
                YesterdayGame.fS.Character.hideAll();
                YesterdayGame.fS.Speech.hide();
                await YesterdayGame.fS.update(0.5);
                // await TransitionManager.blendInOut();
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.outside, 0, 1);
                break;
            case YesterdayGame.StoryState.SchoolAccidentHappend:
                console.log("School Accident happend!");
                await YesterdayGame.fS.Location.show(YesterdayGame.location.alley);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.outside, 0.5, true);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Da bist du ja endlich … Du siehst ja gar nicht gut aus.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Sagi. Welchen Tag haben wir heute?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Ehm …ist alles in Ordnung?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich habe zurzeit wirklich komische Träume. Es sind nicht mal wirklich Träume. Ich weiß zum Beispiel, dass wir heute einen neuen Schüler bekommen und dass sein Name Sho ist.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "…");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Und ich weiß, dass heute was ganz Schlimmes mit Sho passieren wird.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Rika. Beruhig dich. Bald sind Prüfungen, vielleicht bist du etwas gestresst.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich glaube, du verstehst mich nicht. Ich lebe den heutigen Tag immer und immer wieder.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich will einfach, dass es aufhört.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Ich kann dir nicht wirklich helfen. Lass uns heute Abend noch mal darüber sprechen.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Komm, wir gehen erstmal zur Schule.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja…");
                YesterdayGame.fS.Character.hideAll();
                YesterdayGame.fS.Speech.hide();
                await YesterdayGame.fS.update(0.5);
                // await TransitionManager.blendInOut();
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.outside, 0, 1);
                break;
        }
    }
    YesterdayGame.GoingToSchool = GoingToSchool;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    async function InClass() {
        console.log("First Class starting");
        switch (YesterdayGame.dataForSave.storyState) {
            case YesterdayGame.StoryState.FirstRun:
                // Sagi und Rika sind im Klassenzimmer
                console.log("First Run!");
                YesterdayGame.fS.Speech.hide();
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.Character.show(YesterdayGame.Teacher, YesterdayGame.TeacherPose.neutral, YesterdayGame.fS.positionPercent(70, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(35, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0.5, 0, true);
                await YesterdayGame.fS.Progress.delay(4);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0, 1);
                // *** Lecture starting ***
                await YesterdayGame.fS.Progress.delay(1);
                await YesterdayGame.TransitionManager.blendInOut();
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                await YesterdayGame.fS.Progress.delay(4);
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0.5, 1, true);
                await YesterdayGame.fS.Progress.delay(3);
                // *** Break ***
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(35, 100));
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positionPercent(70, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Hey Sho. Ich bin Rika Sato.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Hi, ich bin Sagi Aoki.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Hi, nett euch kennenzulernen.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Bist du erst vor kurzem hier hergezogen, oder warum wechselst du die Schule mitten im Jahr?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "SAGI! Du kannst doch nicht einfach so fragen.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Ach komm schon Rika. Du bist doch sicher auch neugierig.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Haha. Ach, das macht doch nichts.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Meine Familie muss recht oft umziehen, da mein Vater wegen seiner Arbeit oft in eine andere Stadt versetzt wird. Aber das macht mir nicht so viel aus.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Aber vermisst du deine Freunde denn nicht?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Na ja, meistens bleibe ich nicht lange genug in einer Stadt, um wirklich gute Freunde zu finden. Und hin und wieder kann ich mich mit ein paar Bekannten treffen, aber das ist eher selten der Fall.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Mh, aber vielleicht findest du hier jemanden. Kyoto ist eine große Stadt und die Schule auch.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Wir können dich auch gerne mal in der Stadt herumführen, nicht wahr, Rika?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ehm… Ja klar.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Das wäre echt cool. Manchmal verlaufe ich mich immer noch. Hoffentlich schaffe ich es heute nach Hause nach der Schule.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Oh, wo wohnst du denn?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ah…Eh… Gegenüber vom Umekoji Park. Ich kann mir leider die Straße nie merken.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "An der Kitsuya-bashi Dori? Da wohne ich auch in der Nähe.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Oh, wirklich?! Dann kannst du mich eventuell heute begleiten. Haha.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Dann müsst ihr wohl ohne mich heute gehen. Ich treffe mich heute mit meiner Mutter nach der Schule.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja, kein Problem. Können gerne zusammen gehen.");
                // *** Pause Beendet***
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                await YesterdayGame.fS.Progress.delay(4);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Das war eine schnelle Pause. Komm, wir gehen wieder an unseren Platz.");
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0, 1);
                await YesterdayGame.TransitionManager.blendInOut();
                await YesterdayGame.fS.Progress.delay(3);
                // *** Lecture finished ***
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                await YesterdayGame.fS.Progress.delay(4);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(40, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Okay, können wir los?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja, ich packe nur schnell meine Sachen zusammen.");
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.packingBag, 0.5, false);
                await YesterdayGame.fS.Progress.delay(7);
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Character.hideAll();
                // *** Auf dem Weg nach Hause***
                await YesterdayGame.fS.Location.show(YesterdayGame.location.uni);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.outside, 0.5, true);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(40, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Okay, dir nach.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Also wir können tatsächlich zwei verschiedene Routen nehmen, die ungefähr gleich lang sind. Aber der etwas längere Weg ist schöner.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Nun, dann gehen wir mal den etwas längeren, außer du hast es eilig.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ne, ich habe heute nichts mehr vor. Dann kann ich dir etwas von der Stadt zeigen. Vor allem das große Einkaufszentrum. ");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Oh, ich wusste gar nicht, dass es hier sowas gibt.");
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Character.hideAll();
                await YesterdayGame.fS.update(0.5);
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.outside, 0, 1);
                await YesterdayGame.CarCrash.firstCarCrash();
                break;
            case YesterdayGame.StoryState.CarCrashHappend:
                console.log("Crash Happend!");
                YesterdayGame.fS.Character.hideAll();
                YesterdayGame.fS.Speech.hide();
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Character.show(YesterdayGame.Teacher, YesterdayGame.TeacherPose.neutral, YesterdayGame.fS.positionPercent(70, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(35, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0.5, 1, true);
                await YesterdayGame.fS.Progress.delay(3);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                await YesterdayGame.fS.Progress.delay(1);
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0, 1);
                await YesterdayGame.TransitionManager.blendInOut();
                await YesterdayGame.fS.Progress.delay(3);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.classTalking, 0.5, true);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positionPercent(70, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Rika du bist schon die ganze Zeit abwesend. Ist alles in Ordnung?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja. Ich habe nur irgendwie das Gefühl, dass ich Sho schon mal getroffen habe.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Mh, sollen wir mit ihm reden? Vielleicht kennt ihr euch.");
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Character.hideAll();
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Progress.delay(1);
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positionPercent(70, 100));
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(35, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Hi, ich bin Sagi Aoki.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Hey Sho. Ich bin Rika Sato.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Hey, freut mich euch kennenzulernen.");
                //-- -- --  Choice -- -- --
                await YesterdayGame.Choices.livingHereChoice();
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Kennst du dich denn schon in Kyoto etwas aus?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Nein, nicht wirklich. Ich verlaufe mich manchmal noch auf dem Weg nach Hause. Haha.");
                //-- -- --  Choice -- -- --
                await YesterdayGame.Choices.livingWhereChoice();
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Na ja, dann könnt ihr beiden heute zusammen nach Hause laufen, dann findest du sicher den Weg. Rika wohnt auch in der Straße.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Ich kann leider nicht mitkommen, treffe mich heute nach der Schule mit meiner Mutter.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Wirklich?! Ja, das wäre ganz gut.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Können wir gerne machen, dann kann ich dir noch etwas die Stadt zeigen.");
                // *** Break finished***
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                await YesterdayGame.fS.Progress.delay(4);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Komm, wir gehen an unseren Platz.");
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0, 1);
                //*** lecture finished ***
                await YesterdayGame.TransitionManager.blendInOut();
                await YesterdayGame.fS.Progress.delay(3);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                await YesterdayGame.fS.Progress.delay(4);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Progress.delay(2);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Okay, wir können losgehen.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ja, ein Moment, ich packe schnell meine Sachen zusammen.");
                // -- -- -- Choice Endingrelevant -- -- --
                await YesterdayGame.EndingChoices.firstEnding();
                await YesterdayGame.TransitionManager.blendInOut();
                break;
            case YesterdayGame.StoryState.ConstructionSiteAccidentHappend:
                console.log("Construction Site Accident happend!");
                YesterdayGame.fS.Character.hideAll();
                YesterdayGame.fS.Speech.hide();
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Character.show(YesterdayGame.Teacher, YesterdayGame.TeacherPose.neutral, YesterdayGame.fS.positionPercent(70, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(35, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.classTalking, 0.5, true);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>… Das ist er. Ich habe von ihm geträumt. Aber was ist passiert?</i> ");
                await YesterdayGame.fS.Progress.delay(2);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0, 1);
                await YesterdayGame.TransitionManager.blendInOut();
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                await YesterdayGame.fS.Progress.delay(7);
                // *** PAUSE ***
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.classTalking, 0.5, true);
                await YesterdayGame.fS.Progress.delay(2);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positionPercent(70, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "… Rika? Du bist etwas abwesend.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Es hatte mit einem Unfall zu tun. Aber was war es?</i>");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Rika?!");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "… was ist?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Ist irgendwas passiert? Warum bist du heute so komisch?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Sagi hat heute Morgen schon etwas komisch reagiert. Ich denke, ich werde erstmal nichts sagen.</i>");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich weiß es nicht. Zurzeit habe ich komische Träume, das ist alles.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Okay... Komm, lass uns mit Sho reden. Vielleicht bist du einfach nur etwas nervös.");
                YesterdayGame.fS.Character.hideAll();
                YesterdayGame.fS.Speech.hide();
                await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positionPercent(70, 100));
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(35, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Hi, Sho. Ich bin Rika.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Hi. Ich bin Sagi.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Hey, nett euch kennenzulernen. ");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Wohnst du schon lange in Kyoto?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Nein, ich bin erst vor kurzem hergezogen. Deswegen verlaufe ich mich manchmal noch. Haha.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Wohnst du denn hier in der Nähe? Wir könnten dich mal in der Stadt herumführen.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Nein. Wir müssen oft umziehen, da mein Vater wegen seiner Arbeit oft in eine andere Stadt verlegt wird. Ich wohne gegenüber vom Umekoji Park.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ah, da wohne ich auch. Wenn du möchtest, können wir heute gemeinsam nach Hause laufen.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Vielleicht schaffe ich es heute...</i>");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Das wäre echt cool. Danke.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Dann müsst ihr das ohne mich machen, ich treffe mich heute nach der Schule mit meiner Mutter.");
                // *** Pause zu Ende***
                //TODO: PAUSEN GONG EINFÜGEN
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Lass uns wieder an den Platz gehen, Sagi.");
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0, 1);
                await YesterdayGame.fS.Progress.delay(2);
                //Fade out screen 
                await YesterdayGame.TransitionManager.blendInOut();
                await YesterdayGame.fS.Progress.delay(3);
                // *** Unterricht zu Ende***
                //Fade in screen
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positions.bottomcenter);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Können wir los gehen?");
                // -- -- -- Choices important for Ending -- -- --
                await YesterdayGame.EndingChoices.secondEnding();
                await YesterdayGame.TransitionManager.blendInOut();
                break;
            case YesterdayGame.StoryState.SchoolAccidentHappend:
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Character.show(YesterdayGame.Teacher, YesterdayGame.TeacherPose.neutral, YesterdayGame.fS.positionPercent(70, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positionPercent(35, 100));
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.classTalking, 0.5, true);
                await YesterdayGame.fS.Progress.delay(2);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>… Das ist er. Ich habe von ihm geträumt. Aber was ist passiert? </i>");
                //TODO: *** Talking Sound ***
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0, 1);
                //fade out screen
                await YesterdayGame.TransitionManager.blendInOut();
                await YesterdayGame.fS.Progress.delay(3);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
                await YesterdayGame.fS.Progress.delay(3);
                //fade in screen classroom
                await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.update();
                //TODO: *** Talking Sound *** 
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich will nicht, dass sich der Tag wiederholt. Was kann ich bloß machen?</i>");
                // *** Auswahlmöglichkeit*** 
                await YesterdayGame.EndingChoices.thirdEnding();
        }
    }
    YesterdayGame.InClass = InClass;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class Library {
        static async inLibrary() {
            console.log("Library");
            await YesterdayGame.fS.Location.show(YesterdayGame.location.library);
            await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
            await YesterdayGame.fS.update();
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.librarySound, 0.5, true);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Okay, wo schaue ich das jetzt nach?</i>");
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.book, 0.7, false);
            await YesterdayGame.fS.Progress.delay(1);
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.book, 0.7, false);
            await YesterdayGame.fS.Progress.delay(1);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Mal sehen. “Japanische Mythologie”. Das sieht vielversprechend aus.</i>");
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.book, 0.7, false);
            await YesterdayGame.fS.Progress.delay(1);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Das ist wirklich viel. Ich sollte das Buch ausleihen.</i>");
            YesterdayGame.InterfaceHelper.showAusleihButton();
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich sollte das Buch jetzt lesen.</i>");
            YesterdayGame.InterfaceHelper.hideAusleihButton();
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Okay also, das Buch sagt, ich muss den Namen von diesem Dämon kennen.</i>");
            let nameGuessed = false;
            while (!nameGuessed) {
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Wer könnte der Dämon sein?</i>");
                let demonName = await YesterdayGame.fS.Speech.getInput();
                console.log(demonName);
                if (demonName == "Sagi" || demonName == "sagi" || demonName == "Sagi Aoki" || demonName == "sagi aoki" || demonName == "Sagi aoki" || demonName == "sagi Aoki") {
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>… Sagi. Wir sind schon so lange Freunde. Wie kann sie mir das antun.</i>");
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Soll ich mit Sagi sprechen, oder versuchen Sho überreden, dazubleiben?</i>");
                    nameGuessed = true;
                    // *** Auswahlmöglichkeit ***
                    // fS.Sound.fade(sound.librarySound, 0, 1);
                    await YesterdayGame.EndingChoices.fourthEnding();
                }
                else {
                    await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, demonName + ". ... " + "<i>Nein, das ergibt keinen Sinn.</i>");
                }
            }
        }
    }
    YesterdayGame.Library = Library;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class SavingSho {
        static async savingSho() {
            console.log("Saving Sho");
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.outside, 0.5, true);
            await YesterdayGame.fS.Location.show(YesterdayGame.location.uni);
            await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
            await YesterdayGame.fS.update();
            await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positions.bottomcenter);
            await YesterdayGame.fS.update(0.5);
            //sho tell
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Okay, dir nach.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "...");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich muss den gleichen Weg nehmen wie beim ersten Mal.</i>");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Lass uns den etwas längeren Weg nehmen, er ist nicht arg länger, aber dafür viel schöner.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Klar, gerne, dann sehe ich auch mal neue Orte in dieser Stadt.");
            YesterdayGame.fS.Sound.fade(YesterdayGame.sound.outside, 0, 1);
            //hide charakter
            YesterdayGame.fS.Character.hideAll();
            YesterdayGame.fS.Speech.hide();
            await YesterdayGame.fS.update(0.5);
            //TODO: *** ADDING SOUND STREET***
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.cityNoise, 0.2, true);
            await YesterdayGame.fS.Location.show(YesterdayGame.location.streetCity);
            await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
            await YesterdayGame.fS.update();
            await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positions.bottomcenter);
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Hier müsste es gleich sein, gleich kommt das Auto.</i>");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");
            //TODO: *** ADDING SOUND CAR***
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.carHorn, 0.3, false);
            // *** Auswahlmöglichkeit***
            await YesterdayGame.EndingChoices.firstBadEndingAgain();
        }
    }
    YesterdayGame.SavingSho = SavingSho;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class SchoolAccident {
        static async firstSchoolAccident() {
            console.log("1. School Accident");
            //*** FOURTH BAD ENDING***
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Was für Hausaufgaben hast du heute? Ich muss noch für Kunst was erledigen, hast du eine Schere?");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Nein, leider nicht. Aber ich glaube, im Schrank sollten welche sein.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ah, danke.");
            //Changing storyState to SchoolAccidentHappend
            YesterdayGame.dataForSave.storyState = YesterdayGame.StoryState.SchoolAccidentHappend;
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.openCabin, 0.5, false);
            await YesterdayGame.fS.Progress.delay(3);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ohje, die stehen ja ganz oben.");
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.fallingObjects, 0.5, false);
            await YesterdayGame.fS.Progress.delay(1);
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.cutThrowFlesh, 0.5, false);
            await YesterdayGame.fS.Progress.delay(3);
            YesterdayGame.fS.Inventory.add(YesterdayGame.items.pictureClassroom);
            YesterdayGame.fS.Character.hideAll();
            YesterdayGame.fS.Speech.hide();
            await YesterdayGame.fS.update(0.5);
            //*** GAME OVER***
            console.log("GAME OVER: School Accident");
        }
        static async schoolAccidentHappend() {
            console.log("GAME OVER: School Accident");
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.openCabin, 0.5, false);
            await YesterdayGame.fS.Progress.delay(3);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Hier gibt es bestimmt eine Schere.");
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.fallingObjects, 0.5, false);
            await YesterdayGame.fS.Progress.delay(1);
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.cutThrowFlesh, 0.5, false);
            await YesterdayGame.fS.Progress.delay(3);
            // fS.Inventory.add(items.pictureClassroom);
            YesterdayGame.fS.Speech.hide();
            YesterdayGame.fS.Character.hideAll();
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.EndScene.gameOver();
        }
    }
    YesterdayGame.SchoolAccident = SchoolAccident;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class TalkingSagi {
        static async talkingWithSagi() {
            console.log("Talking with Sagi");
            await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
            await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
            await YesterdayGame.fS.update();
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Wie konnte Sie mir das antun. Ich weiß nicht, wie oft ich diesen Tag jetzt immer und immer wieder erleben musste.</i>");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich werde mit ihr reden, wir sind beste Freundinnen, schon so lange.</i>");
            await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positions.bottomcenter);
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Sagi?");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Ja, was gibts?");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich weiß, wer du bist … warum tust du mir das an?");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Wovon redest du?");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Bitte mach es nicht noch schwerer, ich weiß, dass du dafür verantwortlich bist, dass Sho stirbt.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "...");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich dachte wir sind Freunde, wie lange geht das schon so?");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Zum wievielten Mal erlebe ich den heutigen Tag schon?!");
            YesterdayGame.fS.Sound.fade(YesterdayGame.sound.intenseSound, 0.2, 1);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Ich habe wirklich gehofft, dass du es nicht herausfindest.");
            await YesterdayGame.fS.Character.animate(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.redSagiRight());
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sagi, "Dann bleibt mir wohl nichts anderes übrig.");
            await YesterdayGame.fS.Character.animate(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.redSagiLeft());
            await YesterdayGame.fS.Character.show(YesterdayGame.Sagi, YesterdayGame.SagiPose.neutral, YesterdayGame.fS.positions.bottomcenter);
            await YesterdayGame.fS.update();
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.neckCracking, 0.5, false);
            YesterdayGame.fS.Character.hideAll();
            YesterdayGame.fS.Speech.hide();
            await YesterdayGame.fS.update(0.5);
            YesterdayGame.fS.Sound.fade(YesterdayGame.sound.intenseSound, 0, 1);
            //TODO: ADDING SOUND FIGHTING
            //*** BAD ENDING 4*** 
            await YesterdayGame.EndScene.badEndingSagi();
        }
    }
    YesterdayGame.TalkingSagi = TalkingSagi;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    class TalkingSho {
        static async talkingWithSho() {
            console.log("Talking with Sho");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich denke, ich versuche Sho zu überreden. Wenn ich das Buch richtig verstanden habe, dann muss ich nur die Zeit tot schlagen.</i>");
            YesterdayGame.fS.Speech.hide();
            await YesterdayGame.fS.update();
            await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.classTalking, 0.3, true);
            await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
            await YesterdayGame.fS.update();
            await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positions.bottomcenter);
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Hey Sho. Ich bin Rika.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Hey. Nett dich kennenzulernen. ");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Willst du heute nach dem Unterricht hier bleiben? Wir können zusammen Hausaufgaben machen und ich kann dir etwas von der Schule zeigen.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Klar, das wäre echt cool.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Okay, also wenn ich hier mit ihm bleibe, sollte alles gut sein. Ich muss mich nur erinnern, was wir das letzte Mal gemacht haben.</i>");
            YesterdayGame.fS.Sound.play(YesterdayGame.sound.schoolBell, 0.3, false);
            await YesterdayGame.fS.Progress.delay(6);
            YesterdayGame.fS.Character.hideAll();
            YesterdayGame.fS.Speech.hide();
            await YesterdayGame.fS.update(0.5);
            YesterdayGame.fS.Sound.fade(YesterdayGame.sound.classTalking, 0, 1);
            await YesterdayGame.fS.Progress.delay(1);
            //fade out screen
            await YesterdayGame.TransitionManager.blendInOut();
            await YesterdayGame.fS.Progress.delay(3);
            await YesterdayGame.fS.Location.show(YesterdayGame.location.classroom);
            await YesterdayGame.fS.update();
            await YesterdayGame.fS.Character.show(YesterdayGame.Sho, YesterdayGame.ShoPose.neutral, YesterdayGame.fS.positions.bottomcenter);
            await YesterdayGame.fS.update(0.5);
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Also ich habe noch eine Aufgabe in Zeichnen. Hast du eine Schere?");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Eine Schere?!</i>");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "N-nein tut mir Leid. Sollen wir mit etwas anfangen, was wir zusammen machen können?");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Mh, vielleicht gibt es hier welche im Klassenzimmer.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Halt warte. Wir sollten einfach warten, okay?");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Warten? Worauf?");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Setzt dich bitte, ich weiß nicht wie ich dir das erklären soll, ohne wie eine Verrückte zu klingen.");
            await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Okay, dann versuch es mal.");
            console.log(YesterdayGame.dataForSave.shoScore);
            //if statement for loveometer enough
            //TODO: ADJUST LOVEOMETER VALUE
            if (YesterdayGame.dataForSave.shoScore >= 30) {
                console.log("Loveometer is high enough");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Also ich habe zurzeit so ein Gefühl, dass ich immer wieder das Gleiche durchlebe. ");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Und um eine bestimmte Zeit … stirbst du…");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "…");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Und ich habe das Buch gelesen. Da steht etwas von einem Dämon…");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Jedenfalls, sollten wir die Zeit einfach totschlagen.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "O-okay, ich glaube dir mal…");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich weiß es klingt total verrückt. Aber wir müssen einfach nur warten und nichts machen.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Morgen ist alles wieder normal.");
                YesterdayGame.fS.Character.hideAll();
                YesterdayGame.fS.Speech.hide();
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.EndScene.goodEndingWaiting();
            }
            else {
                console.log("Loveometer is not high enough");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Also ich habe zurzeit so ein Gefühl, dass ich immer wieder das Gleiche durchlebe. ");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Und um eine bestimmte Zeit … stirbst du…");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "W-was redest du da?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ich habe das in einem Buch gelesen. Es handelt sich um einen Zeitdämonen.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "In einem Buch?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ich weiß ja nicht was für Fantasy Bücher du liest, aber das ist nicht wahr.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Sho, "Ich werde jetzt meine Zeichen Aufgabe machen und du solltest einfach gehen, wenn du keine Hausaufgaben erledigen willst.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Jetzt warte doch mal…");
                await YesterdayGame.SchoolAccident.schoolAccidentHappend();
            }
        }
    }
    YesterdayGame.TalkingSho = TalkingSho;
})(YesterdayGame || (YesterdayGame = {}));
var YesterdayGame;
(function (YesterdayGame) {
    async function WakingUp() {
        console.log("Waking Up starting");
        //TODO: *** DONT FORGET DELAYS ***
        switch (YesterdayGame.dataForSave.storyState) {
            case YesterdayGame.StoryState.FirstRun:
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.alarmClock, 0.5, false);
                await YesterdayGame.fS.Progress.delay(2);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.bedroom);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.Progress.delay(3);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja, ich bin schon wach.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich sollte mich schnell fertig machen, nicht dass Sagi wieder auf mich warten muss …</i>");
                await YesterdayGame.fS.Progress.delay(1);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.darkBackground);
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Character.hideAll();
                await YesterdayGame.fS.update(0.5);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.cloth, 0.8, false);
                await YesterdayGame.fS.Progress.delay(8);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.bedroom);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.RikaMother, "Okay, viel Erfolg!");
                // await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);
                await YesterdayGame.TransitionManager.blendInOut();
                // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge);
                break;
            case YesterdayGame.StoryState.CarCrashHappend:
                //*** After Car Accident***
                await YesterdayGame.fS.Progress.delay(4);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.bedroom);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.alarmClock, 0.5, false);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Was… Was war das für ein Traum…</i>");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja ich bin schon wach.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich sollte mich schnell anziehen, nicht, dass Sagi auf mich warten muss.</i>");
                await YesterdayGame.fS.Location.show(YesterdayGame.location.darkBackground);
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Character.hideAll();
                await YesterdayGame.fS.update(0.5);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.cloth, 0.8, false);
                await YesterdayGame.fS.Progress.delay(8);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.bedroom);
                await YesterdayGame.fS.update();
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.RikaMother, "Okay, viel Erfolg!");
                YesterdayGame.fS.Character.hideAll();
                // await TransitionManager.blendInOut();
                break;
            case YesterdayGame.StoryState.ConstructionSiteAccidentHappend:
                // *** AFTER CONSTRUCTION SITE ACCIDENT ***
                await YesterdayGame.fS.Progress.delay(4);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.bedroom);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.Progress.delay(2);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.RikaMother, "Rika… Dein Wecker hat nicht geklingelt… Bist du schon wach?");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.RikaMother, "<i>Was ist hier los… Habe ich von Sho geträumt? Ich erinnere mich kaum an etwas.</i>");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja, ich bin wach…");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich sollte mich schnell anziehen, Sagi wartet bestimmt schon…</i>");
                await YesterdayGame.fS.Location.show(YesterdayGame.location.darkBackground);
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Character.hideAll();
                await YesterdayGame.fS.update(0.5);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.cloth, 0.8, false);
                await YesterdayGame.fS.Progress.delay(8);
                await YesterdayGame.fS.Progress.delay(2);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.bedroom);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.RikaMother, "Geht es dir gut? Du klingst heute etwas krank.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "Ja, mir gehts gut.");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.RikaMother, "Okay… Dann bis heute Abend.");
                YesterdayGame.fS.Character.hideAll();
                // await TransitionManager.blendInOut();
                break;
            case YesterdayGame.StoryState.SchoolAccidentHappend:
                // *** AFTER SCHOOL ACCIDENT ***
                await YesterdayGame.fS.Location.show(YesterdayGame.location.bedroom);
                await YesterdayGame.fS.update(YesterdayGame.transition.wipeLeft.duration, YesterdayGame.transition.wipeLeft.alpha, YesterdayGame.transition.wipeLeft.edge);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich verstehe nicht, was hier passiert. Wie viele Tage habe ich das schon durchgemacht.</i>");
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ob Sho sich auch erinnert … Es können keine Träume sein. Ich sollte Sho noch gar nicht kennen.</i>");
                await YesterdayGame.fS.Location.show(YesterdayGame.location.darkBackground);
                YesterdayGame.fS.Speech.hide();
                YesterdayGame.fS.Character.hideAll();
                await YesterdayGame.fS.update(0.5);
                YesterdayGame.fS.Sound.play(YesterdayGame.sound.cloth, 0.8, false);
                await YesterdayGame.fS.Progress.delay(8);
                await YesterdayGame.fS.Location.show(YesterdayGame.location.bedroom);
                await YesterdayGame.fS.update(0.5);
                await YesterdayGame.fS.Speech.tell(YesterdayGame.Rika, "<i>Ich sollte mit Sagi reden, ihr muss doch auch was aufgefallen sein.");
                break;
        }
    }
    YesterdayGame.WakingUp = WakingUp;
})(YesterdayGame || (YesterdayGame = {}));
//# sourceMappingURL=Template.js.map