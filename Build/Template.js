"use strict";
var Template;
(function (Template) {
    class Choices {
        static async livingHereChoice() {
            let livingHereChoice = {
                movedRecently: "Vor kurzem hergezogen?",
                movedLongAgo: "Wohnst du schon lange hier?",
            };
            let firstDialogueElement = await Template.fS.Menu.getInput(livingHereChoice, "choicesCSSClass");
            switch (firstDialogueElement) {
                case livingHereChoice.movedRecently:
                    // continue path here
                    await Template.fS.Speech.tell(Template.Rika, "Du bist erst vor kurzem hier hergezogen, oder?");
                    Template.dataForSave.shoScore -= 10;
                    await Template.fS.Speech.tell(Template.Sho, "Ehm…ja…");
                    break;
                case livingHereChoice.movedLongAgo:
                    // continue path here
                    await Template.fS.Speech.tell(Template.Rika, "Wohnst du schon lange hier? ");
                    await Template.fS.Speech.tell(Template.Sho, "Nein, meine Familie musste umziehen, da mein Vater oft wegen der Arbeit woanders stationiert wird.");
                    Template.dataForSave.shoScore += 10;
                    console.log("LoveOMeter: " + Template.dataForSave.shoScore);
                    break;
                default:
                    console.log("Default");
                    break;
            }
        }
        static async livingWhereChoice() {
            let livingWhereChoice = {
                livingInPark: "Wohnst gegenüber vom Park?",
                goingToCityTogether: "Anbieten zusammen die Stadt anschauen",
            };
            let secondDialogueElement = await Template.fS.Menu.getInput(livingWhereChoice, "choicesCSSClass");
            switch (secondDialogueElement) {
                case livingWhereChoice.livingInPark:
                    await Template.fS.Speech.tell(Template.Rika, "Du wohnst gegenüber vom Umekoji Park, nicht wahr? ");
                    await Template.fS.Speech.tell(Template.Sho, "… J-ja, woher weißt du das?");
                    await Template.fS.Speech.tell(Template.Rika, "Oh, ehm ich habe einfach geraten…");
                    Template.dataForSave.shoScore -= 10;
                    break;
                case livingWhereChoice.goingToCityTogether:
                    await Template.fS.Speech.tell(Template.Rika, "Wenn du möchtest, können wir uns mal am Wochenende treffen und wir zeigen dir ein bisschen die Stadt. ");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, gerne, dann verlaufe ich mich vielleicht nicht mehr so oft. Ich glaube, die Straße, in der ich wohne, heißt Kitsuya-bashi Dori.");
                    Template.dataForSave.shoScore += 10;
                    break;
            }
        }
        static async goingHomeFastChoice() {
            let goingHomeFastChoice = {
                tooMuchHomework: "Viele Hausaufgaben bekommen",
                strangeDreams: "Komische Träume",
                showingFastestRoute: "Schnellsten Weg zeigen"
            };
            let thirdDialogueElement = await Template.fS.Menu.getInput(goingHomeFastChoice, "choicesCSSClass");
            switch (thirdDialogueElement) {
                case goingHomeFastChoice.tooMuchHomework:
                    await Template.fS.Speech.tell(Template.Rika, "Wir haben heute echt einige Aufgaben für zu Hause bekommen. Ich denke, bei dir wird das nicht anders sein.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, stimmt. Wir haben heute auch viele Aufgaben bekommen. Sollen wir das vielleicht zusammen machen?");
                    await Template.fS.Speech.tell(Template.Rika, "J-Ja klar…");
                    //TODO: ADDING FALLING SOUND
                    break;
                case goingHomeFastChoice.strangeDreams:
                    await Template.fS.Speech.tell(Template.Rika, "Ich habe die letzten Tage etwas echt Komisches geträumt und ich habe das Gefühl, wenn wir schneller nach Hause gehen, dann hören diese Träume auf… ");
                    await Template.fS.Speech.tell(Template.Sho, "Ach so…");
                    Template.dataForSave.shoScore -= 10;
                    //TODO: ADDING FALLING SOUND              
                    break;
                case goingHomeFastChoice.showingFastestRoute:
                    await Template.fS.Speech.tell(Template.Rika, "Ehm… Um dir den schnellsten Weg zu zeigen. Wir können morgen gerne den anderen Weg nehmen.");
                    await Template.fS.Speech.tell(Template.Sho, "Haha. Irgendwie habe ich ein Déjá-vu. Als hättest du das mit dem schnellsten Weg schon einmal gesagt.");
                    await Template.fS.Speech.tell(Template.Rika, "<i>Was?!… Hat er auch solche komischen Träume?</i>");
                    await Template.fS.Speech.tell(Template.Rika, "Witzig, dass du das sagst. Ich habe zurzeit so komisch…");
                    //TODO: ADDING FALLING SOUND
                    Template.dataForSave.shoScore += 10;
                    break;
            }
        }
        static async askingShoAboutFriends() {
            let askingAboutFriends = {
                hardToMoveOften: "Das muss schwer sein, so oft umzuziehen.",
                manyFriends: "Du hast bestimmt viele Freunde, wenn du so oft umziehst.",
            };
            let fourthDialogueElement = await Template.fS.Menu.getInput(askingAboutFriends, "choicesCSSClass");
            switch (fourthDialogueElement) {
                case askingAboutFriends.hardToMoveOften:
                    await Template.fS.Speech.tell(Template.Rika, "Das muss schwer sein, so oft umzuziehen.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, also es geht eigentlich. Dadurch habe ich viele Bekannte, aber leider kaum gute Freunde.");
                    await Template.fS.Speech.tell(Template.Rika, "Hoffentlich bleibst du dieses Mal länger hier.");
                    await Template.fS.Speech.tell(Template.Sho, "… Danke, Rika.");
                    Template.dataForSave.shoScore += 10;
                    await Template.SchoolAccident.firstSchoolAccident();
                    break;
                case askingAboutFriends.manyFriends:
                    await Template.fS.Speech.tell(Template.Rika, "Ich habe die letzten Tage etwas echt Komisches geträumt und ich habe das Gefühl, wenn wir schneller nach Hause gehen, dann hören diese Träume auf… ");
                    await Template.fS.Speech.tell(Template.Sho, "Ach so…");
                    Template.dataForSave.shoScore -= 10;
                    await Template.SchoolAccident.firstSchoolAccident();
                    break;
            }
        }
    }
    Template.Choices = Choices;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class EndingChoices {
        static async firstEnding() {
            let endingOne = {
                longPath: "Langen Weg vorschalgen",
                shortPath: "Kurzen Weg vorschlagen",
            };
            let dialogueElement = await Template.fS.Menu.getInput(endingOne, "choicesCSSClass");
            switch (dialogueElement) {
                case endingOne.longPath:
                    // continue path here
                    await Template.fS.Speech.tell(Template.Rika, "Lass uns den längeren Weg gehen, er ist nicht viel länger, aber dafür viel schöner.");
                    await Template.fS.Speech.tell(Template.Sho, "Gerne, ich habe es heute sowieso nicht so eilig.");
                    Template.fS.Sound.play(Template.sound.packingBag, 0.5, false);
                    await Template.fS.Progress.delay(8);
                    Template.fS.Speech.hide();
                    Template.fS.Character.hideAll();
                    await Template.fS.update(0.5);
                    await Template.CarCrash.carCrashHappend();
                    break;
                case endingOne.shortPath:
                    // continue path here
                    await Template.fS.Speech.tell(Template.Rika, "<i>Irgendwie fühle ich mich seltsam, vielleicht sollten wir den kürzeren Weg nehmen.</i>");
                    await Template.fS.Speech.tell(Template.Rika, "Lass uns den kürzeren Weg nehmen. Ich habe es heute etwas eilig.");
                    await Template.fS.Speech.tell(Template.Sho, "…Ja, klar.");
                    Template.fS.Speech.hide();
                    Template.fS.Character.hideAll();
                    await Template.fS.update(0.5);
                    await Template.ConstructionSite.firstConstructionSiteAccident();
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
            let dialogueElement = await Template.fS.Menu.getInput(endingTwo, "choicesCSSClass");
            switch (dialogueElement) {
                case endingTwo.stayInSchool:
                    // continue path here
                    //Show background class
                    await Template.fS.Location.show(Template.location.classroom);
                    await Template.fS.update(Template.transition.circle.duration, Template.transition.circle.alpha, Template.transition.circle.edge);
                    await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
                    Template.fS.update(0.5);
                    console.log("STAY IN SCHOOL PATH");
                    await Template.fS.Speech.tell(Template.Rika, "Sho, was denkst du, sollen wir heute etwas länger bleiben.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, klar. Ich habe heute noch ein paar Hausaufgaben, die ich erledigen muss. Wir können die gerne zusammen machen.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, klar, gerne.");
                    await Template.fS.Speech.tell(Template.Sho, "Wohnst du schon lange in Kyoto?");
                    await Template.fS.Speech.tell(Template.Rika, "Ja, eigentlich schon. Ich bin zwar nicht hier geboren. Aber meine Eltern sind, als ich klein war, hier hergezogen. Also ich erinnere mich an nichts anderes.");
                    await Template.fS.Speech.tell(Template.Sho, "Ich glaube, ich erinnere mich nicht mal daran, wie oft wir schon umgezogen sind.");
                    // -- -- -- Auswahlmöglichkeiten -- -- --
                    await Template.Choices.askingShoAboutFriends();
                    //await SchoolAccident.firstSchoolAccident();
                    break;
                case endingTwo.goHomeFast:
                    // continue path here
                    //Clear screen
                    // fS.Character.hideAll();
                    // fS.Speech.hide();
                    // fS.update();
                    //Show background class
                    await Template.fS.Location.show(Template.location.classroom);
                    await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                    Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
                    Template.fS.update(0.5);
                    await Template.fS.Speech.tell(Template.Rika, "<i>Wenn wir uns beeilen... Vielleicht schaffen wir es dann...</i>");
                    await Template.fS.Speech.tell(Template.Rika, "Sho, können wir uns beeilen, ich habe es heute doch etwas eiliger.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, ich beeile mich. Tut mir leid.");
                    Template.fS.Character.hideAll();
                    Template.fS.Speech.hide();
                    // *** Going outside***
                    //TODO: ADDING STREET SOUND
                    Template.fS.Sound.play(Template.sound.cityNoise, 0.2, true);
                    await Template.fS.Location.show(Template.location.bridge);
                    await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                    await Template.fS.update();
                    // await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(70, 100));
                    await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(30, 100));
                    await Template.fS.update(0.5);
                    await Template.fS.Speech.tell(Template.Rika, "Lass uns diese Überführung nehmen. Dann kommen wir schneller auf die andere Straßenseite.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, können wir machen. Warum hast du es heute so eilig?");
                    //-- -- -- Auswahlmöglichkeit -- -- --
                    await Template.Choices.goingHomeFastChoice();
                    await Template.FallingAccident.firstFallingAccident();
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
            let dialogueElement = await Template.fS.Menu.getInput(endingThree, "choicesCSSClass");
            switch (dialogueElement) {
                case endingThree.goLibrary:
                    Template.fS.Sound.play(Template.sound.classTalking, 0.5, true);
                    await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                    await Template.fS.update(0.5);
                    await Template.fS.Speech.tell(Template.Rika, "<i>Vielleicht finde ich etwas in der Bibliothek. Ich kann nicht die erste sein, die sowas erlebt.</i>");
                    await Template.fS.Speech.tell(Template.Sagi, "Sollen wir uns was zu essen holen und mit Sho sprechen?");
                    await Template.fS.Speech.tell(Template.Rika, "Geh schon mal vor. Ich möchte noch kurz in die Bibliothek.");
                    await Template.fS.Speech.tell(Template.Sagi, "Willst du ohne mich auf die Prüfungen lernen?");
                    await Template.fS.Speech.tell(Template.Rika, "Nein, ich möchte einfach nur ein Buch abgeben.");
                    await Template.fS.Speech.tell(Template.Sagi, "In Ordnung. Wir sehen uns später.");
                    await Template.fS.Speech.tell(Template.Rika, "Ja, bis später.");
                    Template.fS.Speech.hide();
                    Template.fS.Character.hideAll();
                    await Template.fS.update();
                    Template.fS.Sound.fade(Template.sound.classTalking, 0, 1);
                    await Template.Library.inLibrary();
                    break;
                case endingThree.todaySuccess:
                    Template.fS.Sound.play(Template.sound.classTalking, 0.5, true);
                    await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positionPercent(70, 100));
                    await Template.fS.update(0.5);
                    await Template.fS.Speech.tell(Template.Rika, "<i>Heute schaffe ich es, das weiß ich.</i>");
                    await Template.fS.Speech.tell(Template.Sagi, "Rika, sollen wir zu Sho gehen und mit ihm reden?");
                    await Template.fS.Speech.tell(Template.Rika, "Ja, lass uns zu ihm gehen.");
                    await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(35, 100));
                    await Template.fS.update(0.5);
                    await Template.fS.Speech.tell(Template.Rika, "Hi Sho, ich bin Rika und das ist Sagi.");
                    await Template.fS.Speech.tell(Template.Sho, "Hey, nett euch kennenzulernen.");
                    await Template.fS.Speech.tell(Template.Sagi, "Du bist erst vor kurzem hergezogen, nicht wahr?");
                    await Template.fS.Speech.tell(Template.Sho, "Ja genau, mein erstes Mal in Kyoto.");
                    await Template.fS.Speech.tell(Template.Rika, "Wo bist du denn hingezogen?");
                    await Template.fS.Speech.tell(Template.Rika, "<i>Ich muss versuchen, wieder mit ihm nach Hause zu gehen.</i>");
                    await Template.fS.Speech.tell(Template.Sho, "Ah, ich weiß gerade nicht wie die Straße heißt, aber das ist in der Nähe von einem Park.");
                    await Template.fS.Speech.tell(Template.Rika, "Der Umekoji Park?");
                    await Template.fS.Speech.tell(Template.Sho, "Ja genau, quasi gegenüber.");
                    await Template.fS.Speech.tell(Template.Rika, "<i>Das ist meine Chance.</i>");
                    await Template.fS.Speech.tell(Template.Rika, "Wenn du möchtest, können wir heute zusammen nach Hause gehen, ich wohne in der gleichen Straße.");
                    await Template.fS.Speech.tell(Template.Sagi, "...");
                    await Template.fS.Speech.tell(Template.Sho, "Oh, das wäre echt cool.");
                    Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                    await Template.fS.Progress.delay(3);
                    await Template.fS.Speech.tell(Template.Rika, "Wir sehen uns nach dem Unterricht.");
                    await Template.fS.Speech.tell(Template.Rika, "Komm Sagi.");
                    Template.fS.Character.hideAll();
                    Template.fS.Speech.hide();
                    await Template.fS.update(0.5);
                    Template.fS.Sound.fade(Template.sound.classTalking, 0, 1);
                    await Template.TransitionManager.blendInOut();
                    await Template.fS.Progress.delay(3);
                    Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                    await Template.fS.Progress.delay(3);
                    await Template.fS.Location.show(Template.location.classroom);
                    await Template.fS.update();
                    await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
                    await Template.fS.update(0.5);
                    await Template.fS.Speech.tell(Template.Rika, "Okay, können wir los?");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, ich packe nur schnell meine Sachen zusammen.");
                    Template.fS.Sound.play(Template.sound.packingBag, 0.5, false);
                    await Template.fS.Progress.delay(8);
                    Template.fS.Character.hideAll();
                    Template.fS.Speech.hide();
                    await Template.fS.update(0.5);
                    //Saving Sho
                    await Template.SavingSho.savingSho();
            }
        }
        static async fourthEnding() {
            let endingFour = {
                speakSho: "Mit Sho sprechen",
                speakSagi: "Mit Sagi sprechen",
            };
            let dialogueElement = await Template.fS.Menu.getInput(endingFour, "choicesCSSClass");
            switch (dialogueElement) {
                case endingFour.speakSagi:
                    // continue path here
                    await Template.TalkingSagi.talkingWithSagi();
                    break;
                case endingFour.speakSho:
                    // continue path here
                    await Template.TalkingSho.talkingWithSho();
                    break;
            }
        }
        static async firstBadEndingAgain() {
            let badEndingOne = {
                saveSho: "Sho retten",
                doNothing: "Nicht reagieren",
            };
            let dialogueElement = await Template.fS.Menu.getInput(badEndingOne, "choicesCSSClass");
            switch (dialogueElement) {
                case badEndingOne.saveSho:
                    console.log("saveSho");
                    Template.fS.Sound.play(Template.sound.carCrash, 0.3, false);
                    Template.fS.Character.hideAll();
                    Template.fS.Speech.hide();
                    await Template.fS.update(0.5);
                    await Template.fS.Progress.delay(2);
                    Template.fS.Sound.fade(Template.sound.cityNoise, 0, 1);
                    await Template.EndScene.carEnding();
                    break;
                case badEndingOne.doNothing:
                    console.log("doNothing");
                    Template.fS.Sound.play(Template.sound.carCrash, 0.3, false);
                    Template.fS.Character.hideAll();
                    Template.fS.Speech.hide();
                    await Template.fS.update();
                    await Template.fS.Progress.delay(2);
                    Template.fS.Sound.fade(Template.sound.cityNoise, 0.3, 1);
                    await Template.EndScene.gameOver();
                    break;
            }
        }
    }
    Template.EndingChoices = EndingChoices;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class InterfaceHelper {
        //toggle css class hidden for the button with id ausleihbutton
        static toggleAusleihButton() {
            let ausleihButton = document.getElementById("ausleihbutton");
            ausleihButton.classList.toggle("hidden");
        }
    }
    Template.InterfaceHelper = InterfaceHelper;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
    console.log("FudgeStory template starting");
    //*** TRANSITIONS ***
    Template.transition = {
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
    Template.data = {
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
    Template.sound = {
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
    Template.location = {
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
    Template.characters = {
        narrator: {
            name: "",
        },
        protagonist: {
            name: "",
        },
        Rika: {
            name: "Rika Satō",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Rika/rika_neutral.png",
                happy: "Images/Character/Rika/rika_happy.png",
                angry: "Images/Character/Rika/rika_angry.png",
                sad: "Images/Character/Rika/rika_sad.png",
            },
        },
        RikaMother: {
            name: "Rikas Mutter",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/aisaka_happy.png",
            },
        },
        Sagi: {
            name: "Sagi Aoki",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
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
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Sho/sho_neutral.png",
                happy: "Images/Character/Sho/sho_happy.png",
                angry: "Images/Character/Sho/sho_angry.png",
                sad: "Images/Character/Sho/sho_sad.png",
            },
        },
        Teacher: {
            name: "Lehrerin",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Teacher/teacher_neutral.png",
            },
        },
    };
    // *** DATA THAT WILL BE SAVED (GAME PROGRESS) ***
    Template.dataForSave = {
        nameProtagonist: "",
        shoScore: 0,
    };
    // *** ITEMS ***
    //Static = true Item  wird nicht konsumiert
    Template.items = {
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
    function leavingLeft() {
        return {
            start: { translation: Template.fS.positionPercent(40, 100), color: Template.fS.Color.CSS("", 1) },
            end: { translation: Template.fS.positionPercent(20, 100), color: Template.fS.Color.CSS("", 0) },
            duration: 3,
            playmode: Template.fS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.leavingLeft = leavingLeft;
    // *** DATA THAT WILL BE SAVED (GAME PROGRESS) ***
    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Speichern",
        load: "Laden",
        // close: "Schließen",
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
                await Template.fS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.fS.Progress.load();
                break;
            // case inGameMenuButtons.close:
            //     gameMenu.close();
            //     menuIsOpen = false;
            //     break;
            case inGameMenuButtons.credits:
                let current = 0;
                let flip = { back: "Zurück", next: "Weiter", close: "X" };
                let choice;
                Template.fS.Text.addClass("credits");
                do {
                    Template.fS.Text.print(credits[current]);
                    choice = await Template.fS.Menu.getInput(flip, "flip");
                    switch (choice) {
                        case flip.back:
                            current = Math.max(0, current - 1);
                            break;
                        case flip.next:
                            current = Math.min(credits.length - 1, current + 1);
                            break;
                    }
                } while (choice != flip.close);
                Template.fS.Text.close();
                break;
            default:
        }
    }
    //***  Hide Button ***
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("ausleihbutton").addEventListener("click", () => {
            Template.InterfaceHelper.toggleAusleihButton();
        });
    }, false);
    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPres);
    async function hndKeyPres(_event) {
        switch (_event.code) {
            case Template.f.KEYBOARD_CODE.S:
                console.log("Save...");
                await Template.fS.Progress.save();
                break;
            case Template.f.KEYBOARD_CODE.L:
                console.log("Load");
                await Template.fS.Progress.load();
                break;
            case Template.f.KEYBOARD_CODE.M:
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
            case Template.f.KEYBOARD_CODE.I:
                await Template.fS.Inventory.open();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        shoBar = document.getElementById("shoBar");
        gameMenu = Template.fS.Menu.create(inGameMenuButtons, btnFunctionalities, "gameMenuCSSClass");
        gameMenu.close();
        /*** SCENE HIERARCHY ***/
        Template.fS.Speech.hide();
        let scenes = [
            // { id: "wakingUpFirstTime", scene: WakingUp, name: "Waking up" },
            // { id: "toSchoolFirstTime", scene: GoingToSchool, name: "Going to School firstTime" },
            { id: "inClassFirstTime", scene: Template.InClass, name: "In Class for firstTime" },
            { id: "wakingUpCarCrash", scene: Template.WakingUp, name: "Waking up Carcrash" },
            { id: "toSchoolAfterCarCrash", scene: Template.GoingToSchool, name: "Going to School after Carcrash" },
            { id: "inClassAfterCarCrash", scene: Template.InClass, name: "In Class after Carcrash" },
            { id: "inClassAfterConstructionAccident", scene: Template.WakingUp, name: "Waking up after Construction Site Accident" },
            { id: "toSchoolAfterConstructionAccident", scene: Template.GoingToSchool, name: "Going to School after Construction Site Accident" },
            { id: "inClassAfterConstructionAccident", scene: Template.InClass, name: "In Class AfterConstructionAccident" },
            { id: "wakingUpAfterSchoolAccident", scene: Template.WakingUp, name: "Waking up after School Accident" },
            { id: "toSchoolAfterSchoolAccident", scene: Template.GoingToSchool, name: "Going to School after School Accident" },
            { id: "inClassAfterSchoolAccident", scene: Template.InClass, name: "In Class after School Accident" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.fS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.fS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    //*** RIKA *** 
    Template.Rika = Template.characters.Rika;
    Template.RikaPose = Template.characters.Rika.pose;
    //*** SAGI ***
    Template.Sagi = Template.characters.Sagi;
    Template.SagiPose = Template.characters.Sagi.pose;
    //*** SHO ***
    Template.Sho = Template.characters.Sho;
    Template.ShoPose = Template.characters.Sho.pose;
    //*** RIKAS MOTHER ***
    Template.RikaMother = Template.characters.RikaMother;
    Template.RikaMotherPose = Template.characters.RikaMother.pose;
    //*** TEACHER ***
    Template.Teacher = Template.characters.Teacher;
    Template.TeacherPose = Template.characters.Teacher.pose;
})(Template || (Template = {}));
var Template;
(function (Template) {
    let StoryState;
    (function (StoryState) {
        StoryState[StoryState["FirstRun"] = 0] = "FirstRun";
        StoryState[StoryState["CarCrashHappend"] = 1] = "CarCrashHappend";
        StoryState[StoryState["ConstructionSiteAccidentHappend"] = 2] = "ConstructionSiteAccidentHappend";
        StoryState[StoryState["SchoolAccidentHappend"] = 3] = "SchoolAccidentHappend";
    })(StoryState = Template.StoryState || (Template.StoryState = {}));
    class StateManager {
        //*** GLOBAL VARIABLES***
        //TODO: FirstRun wieder einblenden 
        // public static storyState: StoryState = StoryState.FirstRun;
        // public static storyState: StoryState = StoryState.CarCrashHappend;
        // public static storyState: StoryState = StoryState.ConstructionSiteAccidentHappend;
        static storyState = StoryState.SchoolAccidentHappend;
        static choicesState = "firstChoice";
        static endingState = "";
        static carCrashHappend = false;
    }
    Template.StateManager = StateManager;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class TransitionManager {
        //Transition blending in black screen
        static async blendInOut() {
            // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge);
            await Template.fS.Location.show(Template.location.darkBackground);
            Template.fS.Speech.hide();
            Template.fS.Character.hideAll();
            await Template.fS.update(0.5);
        }
    }
    Template.TransitionManager = TransitionManager;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class CarCrash {
        static async firstCarCrash() {
            console.log("1. Car Crash");
            await Template.fS.Location.show(Template.location.streetCity);
            Template.fS.Sound.play(Template.sound.cityNoise, 0.2, true);
            await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
            await Template.fS.update();
            await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(40, 100));
            await Template.fS.update(0.5);
            await Template.fS.Speech.tell(Template.Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");
            Template.StateManager.storyState = Template.StoryState.CarCrashHappend;
            Template.fS.Inventory.add(Template.items.pictureStreet);
            Template.fS.Speech.hide();
            Template.fS.Character.hideAll();
            await Template.fS.update();
            Template.fS.Sound.play(Template.sound.carHorn, 0.3, false);
            Template.fS.Sound.play(Template.sound.carCrash, 0.3, false);
            await Template.fS.Progress.delay(2);
            Template.fS.Sound.fade(Template.sound.cityNoise, 0, 1);
        }
        static async carCrashHappend() {
            await Template.fS.Location.show(Template.location.streetCity);
            Template.fS.Sound.play(Template.sound.cityNoise, 0.2, true);
            await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
            await Template.fS.update();
            await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(40, 100));
            await Template.fS.update(0.5);
            // await fS.update();
            await Template.fS.Speech.tell(Template.Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");
            console.log("BAD ENDING 1 GAME OVER");
            Template.fS.Speech.hide();
            Template.fS.Character.hideAll();
            await Template.fS.update();
            Template.fS.Sound.play(Template.sound.carHorn, 0.3, false);
            Template.fS.Sound.play(Template.sound.carCrash, 0.3, false);
            await Template.fS.Progress.delay(2);
            Template.fS.Sound.fade(Template.sound.cityNoise, 0, 1);
            await Template.EndScene.gameOver();
            //TODO: *** ENDING THE GAME***
        }
    }
    Template.CarCrash = CarCrash;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class ConstructionSite {
        static async firstConstructionSiteAccident() {
            await Template.fS.Location.show(Template.location.constructionSite);
            Template.fS.Sound.play(Template.sound.constructionSite, 0.3, true);
            await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
            await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
            await Template.fS.update(0.5);
            await Template.fS.Speech.tell(Template.Rika, "<i>Komisch ich erinnere mich gar nicht an diese Baustelle, die muss neu sein.</i>");
            await Template.fS.Speech.tell(Template.Sho, "Den Weg kannte ich noch gar nicht.");
            Template.StateManager.storyState = Template.StoryState.ConstructionSiteAccidentHappend;
            Template.fS.Sound.play(Template.sound.metalFalling, 0.8, false);
            //TODO: *** SCREEN SHAKING ***
            Template.fS.Character.hideAll();
            await Template.fS.Speech.tell(Template.Sho, "SHO, VORSICHT!");
            Template.fS.Inventory.add(Template.items.pictureConstructionSite);
            Template.fS.Character.hideAll();
            Template.fS.Speech.hide();
            await Template.fS.update(0.5);
            // await fS.Progress.delay(2);
            Template.fS.Sound.fade(Template.sound.constructionSite, 0, 1);
            await Template.TransitionManager.blendInOut();
            //TODO: *** SHOW SCENE PICTURE
        }
    }
    Template.ConstructionSite = ConstructionSite;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class EndScene {
        static async gameOver() {
            console.log("End Scene starting");
            await Template.fS.Location.show(Template.location.darkBackground);
            await Template.fS.update(0.5);
            await Template.fS.Speech.tell(Template.characters.narrator, "Du hast es nicht geschafft, Sho zu retten.");
            let startingAgain = {
                startAgain: "Sho retten",
            };
            let userInput = await Template.fS.Menu.getInput(startingAgain, "play-again");
            if (userInput == startingAgain.startAgain) {
                window.location.reload();
            }
        }
        static async carEnding() {
            console.log("Car Game Over starting");
            await Template.fS.Location.show(Template.location.darkBackground);
            await Template.fS.update(0.5);
            await Template.fS.Speech.tell(Template.characters.narrator, "Du hast es geschafft, Sho zu retten.");
            await Template.fS.Speech.tell(Template.characters.narrator, "Aber du musstest dafür dein Leben geben.");
            await Template.fS.Speech.tell(Template.characters.narrator, "ENDING: Auto Unfall");
        }
    }
    Template.EndScene = EndScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class FallingAccident {
        static async firstFallingAccident() {
            //*** THIRD BAD ENDING***
            //TODO: ADD SOUNDS
            await Template.fS.Speech.tell(Template.Rika, "SHO, VORSICHT!");
            Template.fS.Sound.play(Template.sound.fallingStairs, 0.5, false);
            Template.fS.Character.hideAll();
            Template.fS.Speech.hide();
            await Template.fS.update(0.5);
            await Template.fS.Progress.delay(2);
            Template.fS.Sound.play(Template.sound.neckCracking, 0.9, false);
            await Template.fS.Progress.delay(1);
            await Template.TransitionManager.blendInOut();
            Template.fS.Sound.fade(Template.sound.cityNoise, 0, 1);
            Template.fS.Inventory.add(Template.items.pictureBridge);
            await Template.EndScene.gameOver();
            console.log("GAME OVER: Falling Accident");
        }
    }
    Template.FallingAccident = FallingAccident;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function GoingToSchool() {
        console.log("Going to School starting");
        switch (Template.StateManager.storyState) {
            case Template.StoryState.FirstRun:
                console.log("First Run!");
                Template.fS.Speech.hide();
                Template.fS.Sound.play(Template.sound.outside, 0.5, true);
                await Template.fS.Location.show(Template.location.alley);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sagi, "Na, da bist du ja endlich. Komm, sonst kommen wir zu spät!");
                await Template.fS.Speech.tell(Template.Rika, "Tut mir leid, zurzeit schlafe ich wirklich schlecht. Ich frage mich wirklich, woran das liegt …");
                await Template.fS.Speech.tell(Template.Sagi, "Vielleicht bist du ja nur nervös, du weißt ja heute kommt der neue Schüler. Ich frage mich, wie er drauf ist.");
                await Template.fS.Speech.tell(Template.Sagi, "Hey, dann bekommst du ja vielleicht auch mal einen Freund.");
                // TODO: *** LEICHTES BILD WACKELN***
                await Template.fS.Speech.tell(Template.Rika, "Ugh...");
                //await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
                //await fS.update();
                await Template.fS.Speech.tell(Template.Sagi, "Was ist los?!");
                await Template.fS.Speech.tell(Template.Rika, "Ich weiß nicht … irgendwie habe ich gerade ganz schlimme Kopfschmerzen bekommen. Hoffentlich ist es gleich vorbei.");
                await Template.fS.Speech.tell(Template.Sagi, "Hmm … du solltest wirklich mehr trinken, Rika.");
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update(0.5);
                // Sagi und Rika sind auf dem Campus
                // await TransitionManager.blendInOut();
                await Template.fS.Location.show(Template.location.uni);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update();
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sagi, "Komm schnell, wir schaffen es gerade so rechtzeitig.");
                await Template.fS.Progress.delay(3);
                Template.fS.Character.hideAll();
                Template.fS.Speech.hide();
                await Template.fS.update(0.5);
                Template.fS.Sound.fade(Template.sound.outside, 0, 1);
                // await TransitionManager.blendInOut();
                break;
            case Template.StoryState.CarCrashHappend:
                console.log("Crash Happend!");
                Template.fS.Speech.hide();
                Template.fS.Sound.play(Template.sound.outside, 0.5, true);
                await Template.fS.Location.show(Template.location.alley);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                // await fS.Character.show(Rika, RikaPose.neutral, fS.positions.bottomcenter);
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sagi, "Na, da bist du ja endlich. Komm, sonst kommen wir zu spät!");
                await Template.fS.Speech.tell(Template.Rika, "Tut mir leid, zurzeit schlafe ich wirklich schlecht. Ich frage mich wirklich, woran das liegt …");
                await Template.fS.Speech.tell(Template.Sagi, "Vielleicht bist du ja nur nervös, du weißt ja heute kommt der neue Schüler. Ich frage mich, wie er darauf ist. Hey, dann bekommst du ja vielleicht auch mal einen Freund.");
                await Template.fS.Speech.tell(Template.Rika, "Was hast du gerade gesagt?");
                await Template.fS.Speech.tell(Template.Sagi, "Ein neuer Schüler kommt heute in unsere Klasse. Bist du wirklich okay? Du siehst etwas blass aus…");
                await Template.fS.Speech.tell(Template.Rika, "Ja, ich denke schon. Du hast recht, ich sollte wirklich mehr trinken.");
                await Template.fS.Speech.tell(Template.Sagi, "Trinken? Das habe ich jetzt nicht gesagt, aber ja, das könnte helfen.");
                await Template.fS.Speech.tell(Template.Rika, "Hast du nicht? Ich dachte, dass du das gesagt hättest…");
                await Template.fS.Speech.tell(Template.Sagi, "Komm, wir gehen los. Sonst kommen wir zu spät.");
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update(0.5);
                await Template.fS.Location.show(Template.location.uni);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update();
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                await Template.fS.Progress.delay(3);
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sagi, "Komm wir…");
                await Template.fS.Speech.tell(Template.Rika, "Wir schaffen es zum Unterricht, keine Sorge.");
                await Template.fS.Speech.tell(Template.Sagi, "...");
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update(0.5);
                // await TransitionManager.blendInOut();
                // await fS.update(0.5);
                Template.fS.Sound.fade(Template.sound.outside, 0, 1);
                break;
            case Template.StoryState.ConstructionSiteAccidentHappend:
                console.log("Construction Accident happend!");
                Template.fS.Speech.hide();
                Template.fS.Sound.play(Template.sound.outside, 0.5, true);
                await Template.fS.Location.show(Template.location.alley);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update(0.5);
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sagi, "Da bist du ja endlich.");
                await Template.fS.Speech.tell(Template.Rika, "Sagi, hast du manchmal das Gefühl, dass du den gleichen Tag immer wieder neu erlebst?");
                await Template.fS.Speech.tell(Template.Sagi, "Nein. Warum fragst du mich sowas Komisches?");
                await Template.fS.Speech.tell(Template.Sagi, "<i>Warum hat sie denn so wütend reagiert, hat sie auch solche komischen Träume?</i>");
                await Template.fS.Speech.tell(Template.Sagi, "… Komm wir gehen jetzt, sonst kommen wir zu spät.");
                Template.fS.Character.hideAll();
                Template.fS.Speech.hide();
                await Template.fS.update(0.5);
                // await TransitionManager.blendInOut();
                Template.fS.Sound.fade(Template.sound.outside, 0, 1);
                break;
            case Template.StoryState.SchoolAccidentHappend:
                console.log("School Accident happend!");
                await Template.fS.Location.show(Template.location.alley);
                Template.fS.Sound.play(Template.sound.outside, 0.5, true);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sagi, "Da bist du ja endlich … Du siehst ja gar nicht gut aus.");
                await Template.fS.Speech.tell(Template.Rika, "Sagi. Welchen Tag haben wir heute?");
                await Template.fS.Speech.tell(Template.Sagi, "Ehm …ist alles in Ordnung?");
                await Template.fS.Speech.tell(Template.Rika, "Ich habe zurzeit wirklich komische Träume. Es sind nicht mal wirklich Träume. Ich weiß zum Beispiel, dass wir heute einen neuen Schüler bekommen und dass sein Name Sho ist.");
                await Template.fS.Speech.tell(Template.Sagi, "…");
                await Template.fS.Speech.tell(Template.Rika, "Und ich weiß, dass heute was ganz Schlimmes mit Sho passieren wird.");
                await Template.fS.Speech.tell(Template.Sagi, "Rika. Beruhig dich. Bald sind Prüfungen, vielleicht bist du etwas gestresst.");
                await Template.fS.Speech.tell(Template.Rika, "Ich glaube, du verstehst mich nicht. Ich lebe den heutigen Tag immer und immer wieder.");
                await Template.fS.Speech.tell(Template.Rika, "Ich will einfach, dass es aufhört.");
                await Template.fS.Speech.tell(Template.Sagi, "Ich kann dir nicht wirklich helfen. Lass uns heute Abend noch mal darüber sprechen.");
                await Template.fS.Speech.tell(Template.Sagi, "Komm, wir gehen erstmal zur Schule.");
                await Template.fS.Speech.tell(Template.Rika, "Ja…");
                Template.fS.Character.hideAll();
                Template.fS.Speech.hide();
                await Template.fS.update(0.5);
                // await TransitionManager.blendInOut();
                Template.fS.Sound.fade(Template.sound.outside, 0, 1);
                break;
        }
    }
    Template.GoingToSchool = GoingToSchool;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function InClass() {
        console.log("First Class starting");
        switch (Template.StateManager.storyState) {
            case Template.StoryState.FirstRun:
                // Sagi und Rika sind im Klassenzimmer
                console.log("First Run!");
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.Character.show(Template.Teacher, Template.TeacherPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(35, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                // fS.Sound.play(sound.classTalking, 0.5, true);
                Template.fS.Sound.fade(Template.sound.classTalking, 0.5, 0, true);
                await Template.fS.Progress.delay(4);
                await Template.fS.Speech.tell(Template.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                Template.fS.Sound.fade(Template.sound.classTalking, 0, 1);
                // *** Lecture starting ***
                await Template.fS.Progress.delay(1);
                await Template.TransitionManager.blendInOut();
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                await Template.fS.Progress.delay(4);
                Template.fS.Sound.fade(Template.sound.classTalking, 0.5, 1, true);
                // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge);
                await Template.fS.Progress.delay(3);
                // *** Break ***
                await Template.fS.Location.show(Template.location.classroom);
                // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge); 
                await Template.fS.update(0.5);
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(35, 100));
                // await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(55, 100));
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "Hey Sho. Ich bin Rika Sato.");
                await Template.fS.Speech.tell(Template.Sagi, "Hi, ich bin Sagi Aoki.");
                await Template.fS.Speech.tell(Template.Sho, "Hi, nett euch kennenzulernen.");
                await Template.fS.Speech.tell(Template.Sagi, "Bist du erst vor kurzem hier hergezogen, oder warum wechselst du die Schule mitten im Jahr?");
                await Template.fS.Speech.tell(Template.Rika, "SAGI! Du kannst doch nicht einfach so fragen.");
                await Template.fS.Speech.tell(Template.Sagi, "Ach komm schon Rika. Du bist doch sicher auch neugierig.");
                await Template.fS.Speech.tell(Template.Sho, "Haha. Ach, das macht doch nichts.");
                await Template.fS.Speech.tell(Template.Sho, "Meine Familie muss recht oft umziehen, da mein Vater wegen seiner Arbeit oft in eine andere Stadt versetzt wird. Aber das macht mir nicht so viel aus.");
                await Template.fS.Speech.tell(Template.Sagi, "Aber vermisst du deine Freunde denn nicht?");
                await Template.fS.Speech.tell(Template.Sho, "Na ja, meistens bleibe ich nicht lange genug in einer Stadt, um wirklich gute Freunde zu finden. Und hin und wieder kann ich mich mit ein paar Bekannten treffen, aber das ist eher selten der Fall.");
                await Template.fS.Speech.tell(Template.Rika, "Mh, aber vielleicht findest du hier jemanden. Kyoto ist eine große Stadt und die Schule auch.");
                await Template.fS.Speech.tell(Template.Sagi, "Wir können dich auch gerne mal in der Stadt herumführen, nicht wahr, Rika?");
                await Template.fS.Speech.tell(Template.Rika, "Ehm… Ja klar.");
                await Template.fS.Speech.tell(Template.Sho, "Das wäre echt cool. Manchmal verlaufe ich mich immer noch. Hoffentlich schaffe ich es heute nach Hause nach der Schule.");
                await Template.fS.Speech.tell(Template.Rika, "Oh, wo wohnst du denn?");
                await Template.fS.Speech.tell(Template.Sho, "Ah…Eh… Gegenüber vom Umekoji Park. Ich kann mir leider die Straße nie merken.");
                await Template.fS.Speech.tell(Template.Rika, "An der Kitsuya-bashi Dori? Da wohne ich auch in der Nähe.");
                await Template.fS.Speech.tell(Template.Sho, "Oh, wirklich?! Dann kannst du mich eventuell heute begleiten. Haha.");
                await Template.fS.Speech.tell(Template.Sagi, "Dann müsst ihr wohl ohne mich heute gehen. Ich treffe mich heute mit meiner Mutter nach der Schule.");
                await Template.fS.Speech.tell(Template.Rika, "Ja, kein Problem. Können gerne zusammen gehen.");
                // *** Pause Beendet***
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                await Template.fS.Progress.delay(4);
                await Template.fS.Speech.tell(Template.Sagi, "Das war eine schnelle Pause. Komm, wir gehen wieder an unseren Platz.");
                Template.fS.Sound.fade(Template.sound.classTalking, 0, 1);
                await Template.TransitionManager.blendInOut();
                await Template.fS.Progress.delay(3);
                // *** Lecture finished ***
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                await Template.fS.Progress.delay(4);
                await Template.fS.Location.show(Template.location.classroom);
                // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge); 
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(40, 100));
                // await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(80, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "Okay, können wir los?");
                await Template.fS.Speech.tell(Template.Sho, "Ja, ich packe nur schnell meine Sachen zusammen.");
                Template.fS.Sound.play(Template.sound.packingBag, 0.5, false);
                await Template.fS.Progress.delay(7);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                // *** Auf dem Weg nach Hause***
                await Template.fS.Location.show(Template.location.uni);
                Template.fS.Sound.play(Template.sound.outside, 0.5, true);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "Okay, dir nach.");
                await Template.fS.Speech.tell(Template.Rika, "Also wir können tatsächlich zwei verschiedene Routen nehmen, die ungefähr gleich lang sind. Aber der etwas längere Weg ist schöner.");
                await Template.fS.Speech.tell(Template.Sho, "Nun, dann gehen wir mal den etwas längeren, außer du hast es eilig.");
                await Template.fS.Speech.tell(Template.Rika, "Ne, ich habe heute nichts mehr vor. Dann kann ich dir etwas von der Stadt zeigen. Vor allem das große Einkaufszentrum. ");
                await Template.fS.Speech.tell(Template.Sho, "Oh, ich wusste gar nicht, dass es hier sowas gibt.");
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update(0.5);
                Template.fS.Sound.fade(Template.sound.outside, 0, 1);
                // await TransitionManager.blendInOut();
                await Template.CarCrash.firstCarCrash();
                break;
            case Template.StoryState.CarCrashHappend:
                console.log("Crash Happend!");
                Template.fS.Character.hideAll();
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Teacher, Template.TeacherPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(35, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                Template.fS.Sound.fade(Template.sound.classTalking, 0.5, 1, true);
                await Template.fS.Progress.delay(3);
                await Template.fS.Speech.tell(Template.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                await Template.fS.Progress.delay(1);
                Template.fS.Sound.fade(Template.sound.classTalking, 0, 1);
                await Template.TransitionManager.blendInOut();
                // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge);
                await Template.fS.Progress.delay(3);
                //TODO: *** PAUSEN GONG EINFÜGEN
                //TODO: *** MENSCHEN DIE IN DER PAUSE REDEN EINFÜGEN ***
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                Template.fS.Sound.play(Template.sound.classTalking, 0.5, true);
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update(0.5);
                // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge); 
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sagi, "Rika du bist schon die ganze Zeit abwesend. Ist alles in Ordnung?");
                // await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(30, 100));
                // await fS.update();
                await Template.fS.Speech.tell(Template.Rika, "Ja. Ich habe nur irgendwie das Gefühl, dass ich Sho schon mal getroffen habe.");
                await Template.fS.Speech.tell(Template.Sagi, "Mh, sollen wir mit ihm reden? Vielleicht kennt ihr euch.");
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update(0.5);
                await Template.fS.Progress.delay(1);
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(35, 100));
                // await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(85, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sagi, "Hi, ich bin Sagi Aoki.");
                await Template.fS.Speech.tell(Template.Rika, "Hey Sho. Ich bin Rika Sato.");
                await Template.fS.Speech.tell(Template.Sho, "Hey, freut mich euch kennenzulernen.");
                //-- -- --  Choice -- -- --
                await Template.Choices.livingHereChoice();
                await Template.fS.Speech.tell(Template.Sagi, "Kennst du dich denn schon in Kyoto etwas aus?");
                await Template.fS.Speech.tell(Template.Sho, "Nein, nicht wirklich. Ich verlaufe mich manchmal noch auf dem Weg nach Hause. Haha.");
                //-- -- --  Choice -- -- --
                await Template.Choices.livingWhereChoice();
                await Template.fS.Speech.tell(Template.Sagi, "Na ja, dann könnt ihr beiden heute zusammen nach Hause laufen, dann findest du sicher den Weg. Rika wohnt auch in der Straße.");
                await Template.fS.Speech.tell(Template.Sagi, "Ich kann leider nicht mitkommen, treffe mich heute nach der Schule mit meiner Mutter.");
                await Template.fS.Speech.tell(Template.Sho, "Wirklich?! Ja, das wäre ganz gut.");
                await Template.fS.Speech.tell(Template.Sho, "Können wir gerne machen, dann kann ich dir noch etwas die Stadt zeigen.");
                // *** Break finished***
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                await Template.fS.Progress.delay(4);
                await Template.fS.Speech.tell(Template.Sagi, "Komm, wir gehen an unseren Platz.");
                Template.fS.Sound.fade(Template.sound.classTalking, 0, 1);
                //*** lecture finished ***
                await Template.TransitionManager.blendInOut();
                await Template.fS.Progress.delay(3);
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                await Template.fS.Progress.delay(4);
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update();
                // await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(40, 100));
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update(0.5);
                await Template.fS.Progress.delay(2);
                await Template.fS.Speech.tell(Template.Rika, "Okay, wir können losgehen.");
                await Template.fS.Speech.tell(Template.Sho, "Ja, ein Moment, ich packe schnell meine Sachen zusammen.");
                // -- -- -- Choice Endingrelevant -- -- --
                await Template.EndingChoices.firstEnding();
                await Template.TransitionManager.blendInOut();
                break;
            case Template.StoryState.ConstructionSiteAccidentHappend:
                console.log("Construction Site Accident happend!");
                Template.fS.Character.hideAll();
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Teacher, Template.TeacherPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(35, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                Template.fS.Sound.play(Template.sound.classTalking, 0.5, true);
                await Template.fS.Speech.tell(Template.Rika, "<i>… Das ist er. Ich habe von ihm geträumt. Aber was ist passiert?</i> ");
                // TODO: ***GETUSCHEL VON ANDEREN SCHUELERN SOUND ***
                await Template.fS.Progress.delay(2);
                await Template.fS.Speech.tell(Template.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                Template.fS.Sound.fade(Template.sound.classTalking, 0, 1);
                await Template.TransitionManager.blendInOut();
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                await Template.fS.Progress.delay(7);
                //TODO: *** PAUSEN GONG EINFÜGEN
                //TODO: *** MENSCHEN DIE IN DER PAUSE REDEN EINFÜGEN ***
                // *** PAUSE ***
                Template.fS.Sound.play(Template.sound.classTalking, 0.5, true);
                await Template.fS.Progress.delay(2);
                await Template.fS.Location.show(Template.location.classroom);
                // await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge); 
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "… Rika? Du bist etwas abwesend.");
                await Template.fS.Speech.tell(Template.Rika, "<i>Es hatte mit einem Unfall zu tun. Aber was war es?</i>");
                await Template.fS.Speech.tell(Template.Sagi, "Rika?!");
                await Template.fS.Speech.tell(Template.Rika, "… was ist?");
                await Template.fS.Speech.tell(Template.Sagi, "Ist irgendwas passiert? Warum bist du heute so komisch?");
                await Template.fS.Speech.tell(Template.Rika, "<i>Sagi hat heute Morgen schon etwas komisch reagiert. Ich denke, ich werde erstmal nichts sagen.</i>");
                await Template.fS.Speech.tell(Template.Rika, "Ich weiß es nicht. Zurzeit habe ich komische Träume, das ist alles.");
                await Template.fS.Speech.tell(Template.Sagi, "Okay... Komm, lass uns mit Sho reden. Vielleicht bist du einfach nur etwas nervös.");
                Template.fS.Character.hideAll();
                Template.fS.Speech.hide();
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(35, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "Hi, Sho. Ich bin Rika.");
                await Template.fS.Speech.tell(Template.Sagi, "Hi. Ich bin Sagi.");
                await Template.fS.Speech.tell(Template.Sho, "Hey, nett euch kennenzulernen. ");
                await Template.fS.Speech.tell(Template.Sagi, "Wohnst du schon lange in Kyoto?");
                await Template.fS.Speech.tell(Template.Sho, "Nein, ich bin erst vor kurzem hergezogen. Deswegen verlaufe ich mich manchmal noch. Haha.");
                await Template.fS.Speech.tell(Template.Rika, "Wohnst du denn hier in der Nähe? Wir könnten dich mal in der Stadt herumführen.");
                await Template.fS.Speech.tell(Template.Sho, "Nein. Wir müssen oft umziehen, da mein Vater wegen seiner Arbeit oft in eine andere Stadt verlegt wird. Ich wohne gegenüber vom Umekoji Park.");
                await Template.fS.Speech.tell(Template.Rika, "Ah, da wohne ich auch. Wenn du möchtest, können wir heute gemeinsam nach Hause laufen.");
                await Template.fS.Speech.tell(Template.Rika, "<i>Vielleicht schaffe ich es heute...</i>");
                await Template.fS.Speech.tell(Template.Sho, "Das wäre echt cool. Danke.");
                await Template.fS.Speech.tell(Template.Sho, "Dann müsst ihr das ohne mich machen, ich treffe mich heute nach der Schule mit meiner Mutter.");
                // *** Pause zu Ende***
                //TODO: PAUSEN GONG EINFÜGEN
                await Template.fS.Speech.tell(Template.Rika, "Lass uns wieder an den Platz gehen, Sagi.");
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                Template.fS.Sound.fade(Template.sound.classTalking, 0, 1);
                await Template.fS.Progress.delay(2);
                //Fade out screen 
                await Template.TransitionManager.blendInOut();
                await Template.fS.Progress.delay(3);
                // *** Unterricht zu Ende***
                //Fade in screen
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sho, "Können wir los gehen?");
                // -- -- -- Choices important for Ending -- -- --
                await Template.EndingChoices.secondEnding();
                await Template.TransitionManager.blendInOut();
                break;
            case Template.StoryState.SchoolAccidentHappend:
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Teacher, Template.TeacherPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(35, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                Template.fS.Sound.play(Template.sound.classTalking, 0.5, true);
                await Template.fS.Progress.delay(2);
                await Template.fS.Speech.tell(Template.Rika, "<i>… Das ist er. Ich habe von ihm geträumt. Aber was ist passiert? </i>");
                //TODO: *** Talking Sound ***
                await Template.fS.Speech.tell(Template.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                Template.fS.Sound.fade(Template.sound.classTalking, 0, 1);
                //fade out screen
                await Template.TransitionManager.blendInOut();
                await Template.fS.Progress.delay(3);
                Template.fS.Sound.play(Template.sound.schoolBell, 0.5, false);
                await Template.fS.Progress.delay(3);
                //fade in screen classroom
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.update();
                //TODO: *** Talking Sound ***
                //speech rika   
                await Template.fS.Speech.tell(Template.Rika, "<i>Ich will nicht, dass sich der Tag wiederholt. Was kann ich bloß machen?</i>");
                // *** Auswahlmöglichkeit*** 
                await Template.EndingChoices.thirdEnding();
        }
    }
    Template.InClass = InClass;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class Library {
        static async inLibrary() {
            console.log("Library");
            await Template.fS.Location.show(Template.location.library);
            await Template.fS.update();
            //TODO: *** ADDING SOUND LIBRARY***
            await Template.fS.Speech.tell(Template.Rika, "<i>Okay, wo schaue ich das jetzt nach?</i>");
            await Template.fS.Speech.tell(Template.Rika, "<i>Mal sehen. “Japanische Mythologie”. Das sieht vielversprechend aus.</i>");
            //TODO: *** ADDING BOOK SOUND EFFECTS ***
            await Template.fS.Speech.tell(Template.Rika, "<i>Das ist wirklich viel. Ich sollte das Buch ausleihen.</i>");
            Template.InterfaceHelper.toggleAusleihButton();
            await Template.fS.Progress.delay(10);
            // InterfaceHelper.toggleAusleihButton();
            await Template.fS.Speech.tell(Template.Rika, "<i>Okay also, das Buch sagt, ich muss den Namen von diesem Dämon kennen.</i>");
            //TODO: *** ADDING IF FOR CHECKING THE NAME***
            let nameGuessed = false;
            while (!nameGuessed) {
                await Template.fS.Speech.tell(Template.Rika, "<i>Wer könnte der Dämon sein?</i>");
                let demonName = await Template.fS.Speech.getInput();
                console.log(demonName);
                if (demonName == "Sagi" || demonName == "sagi" || demonName == "Sagi Aoki" || demonName == "sagi aoki" || demonName == "Sagi aoki" || demonName == "sagi Aoki") {
                    await Template.fS.Speech.tell(Template.Rika, "<i>… Sagi. Wir sind schon so lange Freunde. Wie kann sie mir das antun.</i>");
                    await Template.fS.Speech.tell(Template.Rika, "<i>Soll ich mit Sagi sprechen, oder versuchen Sho überreden, dazubleiben?</i>");
                    nameGuessed = true;
                    // *** Auswahlmöglichkeit ***
                    await Template.EndingChoices.fourthEnding();
                }
                else {
                    await Template.fS.Speech.tell(Template.Rika, "<i>Nein, das ergibt keinen Sinn.</i>");
                }
            }
        }
    }
    Template.Library = Library;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class SavingSho {
        static async savingSho() {
            console.log("Saving Sho");
            Template.fS.Sound.play(Template.sound.outside, 0.5, true);
            await Template.fS.Location.show(Template.location.uni);
            await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
            await Template.fS.update();
            await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
            await Template.fS.update(0.5);
            //sho tell
            await Template.fS.Speech.tell(Template.Sho, "Okay, dir nach.");
            await Template.fS.Speech.tell(Template.Rika, "...");
            await Template.fS.Speech.tell(Template.Rika, "<i>Ich muss den gleichen Weg nehmen wie beim ersten Mal.</i>");
            await Template.fS.Speech.tell(Template.Rika, "Lass uns den etwas längeren Weg nehmen, er ist nicht arg länger, aber dafür viel schöner.");
            await Template.fS.Speech.tell(Template.Sho, "Klar, gerne, dann sehe ich auch mal neue Orte in dieser Stadt.");
            Template.fS.Sound.fade(Template.sound.outside, 0, 1);
            //hide charakter
            Template.fS.Character.hideAll();
            Template.fS.Speech.hide();
            await Template.fS.update(0.5);
            //TODO: *** ADDING SOUND STREET***
            Template.fS.Sound.play(Template.sound.cityNoise, 0.2, true);
            await Template.fS.Location.show(Template.location.streetCity);
            await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
            await Template.fS.update();
            await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
            await Template.fS.update(0.5);
            await Template.fS.Speech.tell(Template.Rika, "<i>Hier müsste es gleich sein, gleich kommt das Auto.</i>");
            await Template.fS.Speech.tell(Template.Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");
            //TODO: *** ADDING SOUND CAR***
            Template.fS.Sound.play(Template.sound.carHorn, 0.3, false);
            // *** Auswahlmöglichkeit***
            await Template.EndingChoices.firstBadEndingAgain();
        }
    }
    Template.SavingSho = SavingSho;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class SchoolAccident {
        static async firstSchoolAccident() {
            console.log("1. School Accident");
            //*** FOURTH BAD ENDING***
            await Template.fS.Speech.tell(Template.Sho, "Was für Hausaufgaben hast du heute? Ich muss noch für Kunst was erledigen, hast du eine Schere?");
            await Template.fS.Speech.tell(Template.Rika, "Nein, leider nicht. Aber ich glaube, im Schrank sollten welche sein.");
            await Template.fS.Speech.tell(Template.Sho, "Ah, danke.");
            //Changing storyState to SchoolAccidentHappend
            Template.StateManager.storyState = Template.StoryState.SchoolAccidentHappend;
            Template.fS.Sound.play(Template.sound.openCabin, 0.5, false);
            await Template.fS.Progress.delay(3);
            await Template.fS.Speech.tell(Template.Sho, "Ohje, die stehen ja ganz oben.");
            Template.fS.Sound.play(Template.sound.fallingObjects, 0.5, false);
            await Template.fS.Progress.delay(1);
            Template.fS.Sound.play(Template.sound.cutThrowFlesh, 0.5, false);
            await Template.fS.Progress.delay(3);
            Template.fS.Inventory.add(Template.items.pictureClassroom);
            Template.fS.Character.hideAll();
            Template.fS.Speech.hide();
            await Template.fS.update(0.5);
            //*** GAME OVER***
            console.log("GAME OVER: School Accident");
        }
        static async schoolAccidentHappend() {
            //*** FOURTH BAD ENDING***
            //TODO: ADD SOUNDS
            //TODO: ADD ENDPICUTRE
            //*** GAME OVER***
            console.log("GAME OVER: School Accident");
            Template.fS.Speech.hide();
            Template.fS.Character.hideAll();
            await Template.EndScene.gameOver();
        }
    }
    Template.SchoolAccident = SchoolAccident;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class TalkingSagi {
        static async talkingWithSagi() {
            console.log("Talking with Sagi");
            await Template.fS.Location.show(Template.location.classroom);
            await Template.fS.update();
            await Template.fS.Speech.tell(Template.Rika, "<i>Wie konnte Sie mir das antun. Ich weiß nicht, wie oft ich diesen Tag jetzt immer und immer wieder erleben musste.</i>");
            await Template.fS.Speech.tell(Template.Rika, "<i>Ich werde mit ihr reden, wir sind beste Freundinnen, schon so lange.</i>");
            await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
            await Template.fS.update();
            await Template.fS.Speech.tell(Template.Rika, "Sagi?");
            await Template.fS.Speech.tell(Template.Sagi, "Ja, was gibts?");
            await Template.fS.Speech.tell(Template.Rika, "Ich weiß, wer du bist … warum tust du mir das an?");
            await Template.fS.Speech.tell(Template.Sagi, "Wovon redest du?");
            await Template.fS.Speech.tell(Template.Rika, "Bitte mach es nicht noch schwerer, ich weiß, dass du dafür verantwortlich bist, dass Sho stirbt.");
            await Template.fS.Speech.tell(Template.Sagi, "...");
            await Template.fS.Speech.tell(Template.Rika, "Ich dachte wir sind Freunde, wie lange geht das schon so?");
            await Template.fS.Speech.tell(Template.Rika, "Zum wievielten Mal erlebe ich den heutigen Tag schon?!");
            await Template.fS.Speech.tell(Template.Sagi, "Ich habe wirklich gehofft, dass du es nicht herausfindest.");
            await Template.fS.Speech.tell(Template.Sagi, "Dann bleibt mir wohl nichts anderes übrig.");
            //TODO: ADDING SOUND FIGHTING
            //*** BAD ENDING 4***             
        }
    }
    Template.TalkingSagi = TalkingSagi;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class TalkingSho {
        static async talkingWithSho() {
            console.log("Talking with Sho");
            await Template.fS.Speech.tell(Template.Rika, "<i>Ich denke, ich versuche Sho zu überreden. Wenn ich das Buch richtig verstanden habe, dann muss ich nur die Zeit tot schlagen.</i>");
            await Template.fS.Location.show(Template.location.classroom);
            await Template.fS.update();
            await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
            await Template.fS.Speech.tell(Template.Rika, "Hey Sho. Ich bin Rika.");
            await Template.fS.Speech.tell(Template.Sho, "Hey. Nett dich kennenzulernen. ");
            await Template.fS.Speech.tell(Template.Rika, "Willst du heute nach dem Unterricht hier bleiben? Wir können zusammen Hausaufgaben machen und ich kann dir etwas von der Schule zeigen.");
            await Template.fS.Speech.tell(Template.Sho, "Klar, das wäre echt cool.");
            await Template.fS.Speech.tell(Template.Rika, "<i>Okay, also wenn ich hier mit ihm bleibe, sollte alles gut sein. Ich muss mich nur erinnern, was wir das letzte Mal gemacht haben.</i>");
            //TODO: ADDING SOUND EFFECTS SCHOOLBELLS
            //fade out screen
            Template.fS.Character.hideAll();
            Template.fS.Speech.hide();
            Template.fS.update();
            await Template.fS.Location.show(Template.location.darkBackground);
            await Template.fS.update();
            //fade in screen
            await Template.fS.Location.show(Template.location.classroom);
            await Template.fS.update();
            await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
            await Template.fS.update();
            await Template.fS.Speech.tell(Template.Sho, "Also ich habe noch eine Aufgabe in Zeichnen. Hast du eine Schere?");
            await Template.fS.Speech.tell(Template.Rika, "<i>Eine Schere?!</i>");
            await Template.fS.Speech.tell(Template.Rika, "N-nein tut mir Leid. Sollen wir mit etwas anfangen, was wir zusammen machen können?");
            await Template.fS.Speech.tell(Template.Sho, "Mh, vielleicht gibt es hier welche im Klassenzimmer.");
            await Template.fS.Speech.tell(Template.Rika, "Halt warte. Wir sollten einfach warten, okay?");
            await Template.fS.Speech.tell(Template.Sho, "Warten? Worauf?");
            await Template.fS.Speech.tell(Template.Rika, "Setzt dich bitte, ich weiß nicht wie ich dir das erklären soll, ohne wie eine Verrückte zu klingen.");
            await Template.fS.Speech.tell(Template.Sho, "Okay, dann versuch es mal.");
            console.log(Template.dataForSave.shoScore);
            //if statement for loveometer enough
            //TODO: ADJUST LOVEOMETER VALUE
            if (Template.dataForSave.shoScore >= 10) {
                console.log("Loveometer is high enough");
                await Template.fS.Speech.tell(Template.Rika, "Also ich habe zurzeit so ein Gefühl, dass ich immer wieder das Gleiche durchlebe. ");
                await Template.fS.Speech.tell(Template.Rika, "Und um eine bestimmte Zeit … stirbst du…");
                await Template.fS.Speech.tell(Template.Sho, "…");
                await Template.fS.Speech.tell(Template.Rika, "Und ich habe das Buch gelesen. Da steht etwas von einem Dämon…");
                await Template.fS.Speech.tell(Template.Rika, "Jedenfalls, sollten wir die Zeit einfach totschlagen.");
                await Template.fS.Speech.tell(Template.Sho, "O-okay, ich glaube dir mal…");
                await Template.fS.Speech.tell(Template.Rika, "Ich weiß es klingt total verrückt. Aber wir müssen einfach nur warten und nichts machen.");
                await Template.fS.Speech.tell(Template.Rika, "Morgen ist alles wieder normal.");
                // *** GOOD ENDING 1 ***
            }
            else {
                console.log("Loveometer is not high enough");
                await Template.fS.Speech.tell(Template.Rika, "Also ich habe zurzeit so ein Gefühl, dass ich immer wieder das Gleiche durchlebe. ");
                await Template.fS.Speech.tell(Template.Rika, "Und um eine bestimmte Zeit … stirbst du…");
                await Template.fS.Speech.tell(Template.Sho, "W-was redest du da?");
                await Template.fS.Speech.tell(Template.Rika, "Ich habe das in einem Buch gelesen. Es handelt sich um einen Zeitdämonen.");
                await Template.fS.Speech.tell(Template.Sho, "In einem Buch?");
                await Template.fS.Speech.tell(Template.Sho, "Ich weiß ja nicht was für Fantasy Bücher du liest, aber das ist nicht wahr.");
                await Template.fS.Speech.tell(Template.Sho, "Ich werde jetzt meine Zeichen Aufgabe machen und du solltest einfach gehen, wenn du keine Hausaufgaben erledigen willst.");
                await Template.fS.Speech.tell(Template.Rika, "Jetzt warte doch mal…");
                //TODO: ADDING SOUND EFFECTS OPENING CABINET
                await Template.fS.Speech.tell(Template.Sho, "Hier gibt es bestimmt eine Schere.");
                //TODO: ADDING SOUND EFFECTS FALLING OBJECTS
                // *** BAD ENDING 3 ***
            }
        }
    }
    Template.TalkingSho = TalkingSho;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function WakingUp() {
        console.log("Waking Up starting");
        //TODO: *** DONT FORGET DELAYS ***
        switch (Template.StateManager.storyState) {
            case Template.StoryState.FirstRun:
                Template.fS.Sound.play(Template.sound.alarmClock, 0.5, false);
                await Template.fS.Progress.delay(2);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.Progress.delay(3);
                await Template.fS.Speech.tell(Template.RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await Template.fS.Speech.tell(Template.Rika, "Ja, ich bin schon wach.");
                await Template.fS.Speech.tell(Template.Rika, "<i>Ich sollte mich schnell fertig machen, nicht dass Sagi wieder auf mich warten muss …</i>");
                await Template.fS.Progress.delay(1);
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update(0.5);
                Template.fS.Sound.play(Template.sound.cloth, 0.8, false);
                await Template.fS.Progress.delay(8);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await Template.fS.Speech.tell(Template.RikaMother, "Okay, viel Erfolg!");
                await Template.fS.Character.animate(Template.Rika, Template.RikaPose.neutral, Template.leavingLeft());
                // await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);
                await Template.TransitionManager.blendInOut();
                // await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge);
                break;
            case Template.StoryState.CarCrashHappend:
                //*** After Car Accident***
                await Template.fS.Progress.delay(4);
                await Template.fS.Location.show(Template.location.bedroom);
                Template.fS.Sound.play(Template.sound.alarmClock, 0.5, false);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.Speech.tell(Template.RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await Template.fS.Speech.tell(Template.Rika, "<i>Was… Was war das für ein Traum…</i>");
                await Template.fS.Speech.tell(Template.Rika, "Ja ich bin schon wach.");
                await Template.fS.Speech.tell(Template.Rika, "<i>Ich sollte mich schnell anziehen, nicht, dass Sagi auf mich warten muss.</i>");
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update(0.5);
                Template.fS.Sound.play(Template.sound.cloth, 0.8, false);
                await Template.fS.Progress.delay(8);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await Template.fS.Speech.tell(Template.RikaMother, "Okay, viel Erfolg!");
                await Template.fS.Character.animate(Template.Rika, Template.RikaPose.neutral, Template.leavingLeft());
                Template.fS.Character.hideAll();
                // await TransitionManager.blendInOut();
                break;
            case Template.StoryState.ConstructionSiteAccidentHappend:
                // *** AFTER CONSTRUCTION SITE ACCIDENT ***
                await Template.fS.Progress.delay(4);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.Progress.delay(2);
                await Template.fS.Speech.tell(Template.RikaMother, "Rika… Dein Wecker hat nicht geklingelt… Bist du schon wach?");
                await Template.fS.Speech.tell(Template.RikaMother, "<i>Was ist hier los… Habe ich von Sho geträumt? Ich erinnere mich kaum an etwas.</i>");
                await Template.fS.Speech.tell(Template.Rika, "Ja, ich bin wach…");
                await Template.fS.Speech.tell(Template.Rika, "<i>Ich sollte mich schnell anziehen, Sagi wartet bestimmt schon…</i>");
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update(0.5);
                Template.fS.Sound.play(Template.sound.cloth, 0.8, false);
                await Template.fS.Progress.delay(8);
                await Template.fS.Progress.delay(2);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.update(0.5);
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await Template.fS.Speech.tell(Template.RikaMother, "Geht es dir gut? Du klingst heute etwas krank.");
                await Template.fS.Speech.tell(Template.Rika, "Ja, mir gehts gut.");
                await Template.fS.Speech.tell(Template.RikaMother, "Okay… Dann bis heute Abend.");
                await Template.fS.Character.animate(Template.Rika, Template.RikaPose.neutral, Template.leavingLeft());
                Template.fS.Character.hideAll();
                // await TransitionManager.blendInOut();
                break;
            case Template.StoryState.SchoolAccidentHappend:
                // *** AFTER SCHOOL ACCIDENT ***
                //show bedroom
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.update(Template.transition.wipeLeft.duration, Template.transition.wipeLeft.alpha, Template.transition.wipeLeft.edge);
                await Template.fS.Speech.tell(Template.Rika, "<i>Ich verstehe nicht, was hier passiert. Wie viele Tage habe ich das schon durchgemacht.</i>");
                //play sound alarm clock
                // fS.Sound.play(sound.alarmClock, 0.5, false);
                await Template.fS.Speech.tell(Template.Rika, "<i>Ob Sho sich auch erinnert … Es können keine Träume sein. Ich sollte Sho noch gar nicht kennen.</i>");
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update(0.5);
                Template.fS.Sound.play(Template.sound.cloth, 0.8, false);
                await Template.fS.Progress.delay(8);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "<i>Ich sollte mit Sagi reden, ihr muss doch auch was aufgefallen sein.");
                await Template.fS.Character.animate(Template.Rika, Template.RikaPose.neutral, Template.leavingLeft());
                // await TransitionManager.blendInOut();
                break;
        }
    }
    Template.WakingUp = WakingUp;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map