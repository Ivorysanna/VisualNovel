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
                    Template.StateManager.loveOMeter -= 10;
                    await Template.fS.Speech.tell(Template.Sho, "Ehm…ja…");
                    break;
                case livingHereChoice.movedLongAgo:
                    // continue path here
                    await Template.fS.Speech.tell(Template.Rika, "Wohnst du schon lange hier? ");
                    await Template.fS.Speech.tell(Template.Sho, "Nein, meine Familie musste umziehen, da mein Vater oft wegen der Arbeit woanders stationiert wird.");
                    Template.StateManager.loveOMeter += 10;
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
                    Template.StateManager.loveOMeter -= 10;
                    break;
                case livingWhereChoice.goingToCityTogether:
                    await Template.fS.Speech.tell(Template.Rika, "Wenn du möchtest, können wir uns mal am Wochenende treffen und wir zeigen dir ein bisschen die Stadt. ");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, gerne, dann verlaufe ich mich vielleicht nicht mehr so oft. Ich glaube, die Straße, in der ich wohne, heißt Kitsuya-bashi Dori.");
                    Template.StateManager.loveOMeter += 10;
                    break;
            }
        }
        static async goingHomeFastChoice() {
            let goingHomeFastChoice = {
                tooMuchHomework: "Ich muss noch sehr viele Hausaufgaben machen.",
                strangeDreams: "Ich habe die letzten Tage was sehr Komisches geträumt.",
                showingFastestRoute: "Ehm... Um dir den schnellsten Weg zu zeigen. Morgen können wir gerne den schöneren Weg nehmen. ",
            };
            let thirdDialogueElement = await Template.fS.Menu.getInput(goingHomeFastChoice, "choicesCSSClass");
            switch (thirdDialogueElement) {
                case goingHomeFastChoice.tooMuchHomework:
                    await Template.fS.Speech.tell(Template.Rika, "Wir haben heute echt einige Aufgaben für zu Hause bekommen. Ich denke, bei dir wird das nicht anders sein.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, stimmt. Wir haben heute auch viele Aufgaben bekommen. Sollen wir das vielleicht zusammen machen?");
                    await Template.fS.Speech.tell(Template.Rika, "J-Ja klar…");
                    //TODO: ADDING FALLING SOUND
                    await Template.fS.Speech.tell(Template.Rika, "SHO, VORSICHT!");
                    break;
                case goingHomeFastChoice.strangeDreams:
                    await Template.fS.Speech.tell(Template.Rika, "Ich habe die letzten Tage etwas echt Komisches geträumt und ich habe das Gefühl, wenn wir schneller nach Hause gehen, dann hören diese Träume auf… ");
                    await Template.fS.Speech.tell(Template.Sho, "Ach so…");
                    Template.StateManager.loveOMeter -= 10;
                    //TODO: ADDING FALLING SOUND
                    await Template.fS.Speech.tell(Template.Rika, "SHO, VORSICHT!");
                    break;
                case goingHomeFastChoice.showingFastestRoute:
                    await Template.fS.Speech.tell(Template.Rika, "Ehm… Um dir den schnellsten Weg zu zeigen. Wir können morgen gerne den anderen Weg nehmen.");
                    await Template.fS.Speech.tell(Template.Sho, "Haha. Irgendwie habe ich ein Déjá-vu. Als hättest du das mit dem schnellsten Weg schon einmal gesagt.");
                    await Template.fS.Speech.tell(Template.Rika, "<i>//Was?!… Hat er auch solche komischen Träume?</i>");
                    await Template.fS.Speech.tell(Template.Rika, "Witzig, dass du das sagst. Ich habe zurzeit so komisch…");
                    //TODO: ADDING FALLING SOUND
                    await Template.fS.Speech.tell(Template.Rika, "SHO, VORSICHT!");
                    Template.StateManager.loveOMeter += 10;
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
                    Template.StateManager.loveOMeter += 10;
                    //TODO: ADDING FALLING SOUND
                    await Template.fS.Speech.tell(Template.Rika, "SHO, VORSICHT!");
                    break;
                case askingAboutFriends.manyFriends:
                    await Template.fS.Speech.tell(Template.Rika, "Ich habe die letzten Tage etwas echt Komisches geträumt und ich habe das Gefühl, wenn wir schneller nach Hause gehen, dann hören diese Träume auf… ");
                    await Template.fS.Speech.tell(Template.Sho, "Ach so…");
                    Template.StateManager.loveOMeter -= 10;
                    //TODO: ADDING FALLING SOUND
                    await Template.fS.Speech.tell(Template.Rika, "SHO, VORSICHT!");
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
                shortPath: "Kurzen Weg vorschlagen"
            };
            let dialogueElement = await Template.fS.Menu.getInput(endingOne, "choicesCSSClass");
            switch (dialogueElement) {
                case endingOne.longPath:
                    // continue path here
                    await Template.fS.Speech.tell(Template.Rika, "Lass uns den längeren Weg gehen, er ist nicht viel länger, aber dafür viel schöner.");
                    await Template.fS.Speech.tell(Template.Sho, "Gerne, ich habe es heute sowieso nicht so eilig.");
                    await Template.CarCrash.carCrashHappend();
                    break;
                case endingOne.shortPath:
                    // continue path here
                    await Template.fS.Speech.tell(Template.Rika, "<i>Irgendwie fühle ich mich seltsam, vielleicht sollten wir den kürzeren Weg nehmen.</i>");
                    await Template.fS.Speech.tell(Template.Rika, "Lass uns den kürzeren Weg nehmen. Ich habe es heute etwas eilig.");
                    await Template.fS.Speech.tell(Template.Sho, "…Ja, klar.");
                    await Template.ConstructionSite.firstConstructionSiteAccident();
                    break;
                default:
                    console.log("Nimmt Default!");
                    break;
            }
        }
        static async secondEnding() {
            let endingTwo = {
                stayInSchool: "Vorschlagen in der Schule zu bleiben.",
                goHomeFast: "Vorschlagen sich zu beeilen."
            };
            let dialogueElement = await Template.fS.Menu.getInput(endingTwo, "choicesCSSClass");
            switch (dialogueElement) {
                case endingTwo.stayInSchool:
                    // continue path here
                    console.log("STAY IN SCHOOL PATH");
                    await Template.fS.Speech.tell(Template.Rika, "Sho, was denkst du, sollen wir heute etwas länger bleiben.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, klar. Ich habe heute noch ein paar Hausaufgaben, die ich erledigen muss. Wir können gerne die gerne zusammen machen.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, klar, gerne.");
                    await Template.fS.Speech.tell(Template.Sho, "Wohnst du schon lange in Kyoto?");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, eigentlich schon. Ich bin zwar nicht hier geboren. Aber meine Eltern sind, als ich klein war, hier hergezogen. Also ich erinnere mich an nichts anderes.");
                    await Template.fS.Speech.tell(Template.Sho, "Ich glaube, ich erinnere mich nicht mal daran, wie oft wir schon umgezogen sind.");
                    // -- -- -- Auswahlmöglichkeiten -- -- -- 
                    break;
                case endingTwo.goHomeFast:
                    // continue path here
                    await Template.fS.Speech.tell(Template.Rika, "<i>Wenn wir uns beeilen... Vielleicht schaffen wir es dann...</i>");
                    await Template.fS.Speech.tell(Template.Rika, "Sho, können wir uns beeilen, ich habe es heute doch etwas eiliger.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, ich beeile mich. Tut mir leid.");
                    Template.fS.Character.hideAll();
                    Template.fS.Speech.hide();
                    // *** Going outside***
                    //TODO: ADDING STREET SOUND
                    await Template.fS.Location.show(Template.location.bridge);
                    await Template.fS.update();
                    await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(70, 100));
                    await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(30, 100));
                    await Template.fS.update();
                    await Template.fS.Speech.tell(Template.Rika, "Lass uns diese Überführung nehmen. Dann kommen wir schneller auf die andere Straßenseite.");
                    await Template.fS.Speech.tell(Template.Sho, "Ja, können wir machen. Warum hast du es heute so eilig?");
                    //-- -- -- Auswahlmöglichkeit -- -- --
                    await Template.Choices.goingHomeFastChoice();
                    await Template.FallingAccident.fallingAccident();
                    break;
                default:
                    console.log("Nimmt Default!");
                    break;
            }
        }
    }
    Template.EndingChoices = EndingChoices;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.f = FudgeCore;
    Template.fS = FudgeStory;
    console.log("FudgeStory template starting");
    //*** TRANSITIONS ***
    Template.transition = {
        swirl: {
            duration: 1,
            alpha: "Images/Splash.png",
            edge: 1
        }
    };
    //*** SOUND ***
    Template.sound = {
        // Themes
        // SFX
        outside: "Sounds/outside.wav",
        alarmClock: "Sounds/alarmClock.wav"
    };
    //*** BACKGROUNDS ***
    Template.location = {
        alley: {
            name: "Alley",
            background: "Images/Backgrounds/alley.png"
            //foreground: ""
        },
        bedroom: {
            name: "Bedroom",
            background: "Images/Backgrounds/bedroom.png"
        },
        classroom: {
            name: "Classroom",
            background: "Images/Backgrounds/classroom.png"
        },
        library: {
            name: "Library",
            background: "Images/Backgrounds/library.png"
        },
        steps: {
            name: "Steps",
            background: "Images/Backgrounds/steps.png"
        },
        street: {
            name: "Street",
            background: "Images/Backgrounds/street.png"
        },
        uni: {
            name: "Uni",
            background: "Images/Backgrounds/uni.png"
        },
        darkBackground: {
            name: "DarkBackground",
            background: "Images/Backgrounds/darkbackground.png"
        },
        streetCity: {
            name: "Streetcity",
            background: "Images/Backgrounds/streetCity.png"
        },
        constructionSite: {
            name: "ConstructionSite",
            background: "Images/Backgrounds/constructionSite.png"
        },
        bridge: {
            name: "Bridge",
            background: "Images/Backgrounds/bridge.png"
        }
    };
    //*** CHARACTERS ***
    Template.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        Rika: {
            name: "Rika Satō",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Rika/rika_neutral.png",
                happy: "Images/Character/Rika/rika_happy.png",
                angry: "Images/Character/Rika/rika_angry.png",
                sad: "Images/Character/Rika/rika_sad.png"
            }
        },
        RikaMother: {
            name: "Rikas Mutter",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/aisaka_happy.png"
            }
        },
        Sagi: {
            name: "Sagi Aoki",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Sagi/sagi_neutral.png",
                happy: "Images/Character/Sagi/sagi_happy.png",
                angry: "Images/Character/Sagi/sagi_angry.png",
                sad: "Images/Character/Sagi/sagi_happy.png",
                insane: "Images/Character/Rika/rika_insane.png"
            }
        },
        Sho: {
            name: "Shō Rai",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Sho/sho_neutral.png",
                happy: "Images/Character/Sho/sho_happy.png",
                angry: "Images/Character/Sho/sho_angry.png",
                sad: "Images/Character/Sho/sho_sad.png"
            }
        },
        Teacher: {
            name: "Lehrerin",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Teacher/teacher_neutral.png"
            }
        }
    };
    // *** DATA THAT WILL BE SAVED (GAME PROGRESS)
    Template.dataForSave = {
        nameProtagonist: ""
    };
    // *** ANIMATION ***
    function animation() {
        return {
            start: { translation: Template.fS.positions.bottomcenter, color: Template.fS.Color.CSS("blue", 1) },
            end: { translation: Template.fS.positions.bottomright, color: Template.fS.Color.CSS("green", 0) },
            duration: 3,
            playmode: Template.fS.ANIMATION_PLAYMODE.LOOP
        };
    }
    Template.animation = animation;
    function leavingLeft() {
        return {
            start: { translation: Template.fS.positionPercent(40, 100), color: Template.fS.Color.CSS("", 1) },
            end: { translation: Template.fS.positionPercent(20, 100), color: Template.fS.Color.CSS("", 0) },
            duration: 3,
            playmode: Template.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.leavingLeft = leavingLeft;
    // *** DATA THAT WILL BE SAVED (GAME PROGRESS)
    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close"
    };
    let gameMenu;
    //open = true, closed = false
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Template.fS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Template.fS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
        }
    }
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
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.fS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        /*** SCENE HIERARCHY ***/
        Template.fS.Speech.hide();
        let scenes = [
            // { id: "wakingUpFirstTime", scene: WakingUp, name: "Waking up" },
            // { id: "toSchoolFirstTime", scene: GoingToSchool, name: "Going to School firstTime"},
            // { id: "inClassFirstTime", scene: InClass, name: "In Class for firstTime"},
            // { id: "wakingUpCarCrash", scene: WakingUp, name: "Waking up Carcrash" },
            // { id: "toSchoolAfterCarCrash", scene: GoingToSchool, name: "Going to School after Carcrash"},
            // { id: "inClassAfterCarCrash", scene: InClass, name: "In Class after Carcrash"},
            // { id: "inClassAfterConstructionAccident", scene: WakingUp, name: "Waking up after Construction Site Accident"},
            // { id: "toSchoolAfterConstructionAccident", scene: GoingToSchool, name: "Going to School after Construction Site Accident"},
            { id: "inClassAfterConstructionAccident", scene: Template.InClass, name: "In Class AfterConstructionAccident" },
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
    })(StoryState = Template.StoryState || (Template.StoryState = {}));
    class StateManager {
        //*** GLOBAL VARIABLES***
        //TODO: FirstRun wieder einblenden 
        // public static storyState: StoryState = StoryState.FirstRun;
        static storyState = StoryState.ConstructionSiteAccidentHappend;
        static loveOMeter = 0;
        static choicesState = "firstChoice";
        static endingState = "";
        static carCrashHappend = false;
    }
    Template.StateManager = StateManager;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class TransitionManager {
        static async blendInOut() {
            await Template.fS.Location.show(Template.location.darkBackground);
            Template.fS.Speech.hide();
            Template.fS.Character.hideAll();
            await Template.fS.update();
        }
    }
    Template.TransitionManager = TransitionManager;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class CarCrash {
        static async firstCarCrash() {
            await Template.fS.Location.show(Template.location.streetCity);
            await Template.fS.update();
            await Template.fS.Speech.tell(Template.Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");
            Template.StateManager.storyState = Template.StoryState.CarCrashHappend;
            Template.fS.Speech.hide();
            Template.fS.Character.hideAll();
            //TODO: *** AUTO HUPEN UND REIFEN QUIETSCHEN EINBAUEN ***
            //TODO: *** SZENENBILD ANZEIGEN AUTO ÜBERFAHREN***
        }
        static async carCrashHappend() {
            await Template.fS.Location.show(Template.location.streetCity);
            await Template.fS.update();
            await Template.fS.Speech.tell(Template.Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");
            console.log("BAD ENDING 1 GAME OVER");
            Template.fS.Speech.hide();
            Template.fS.Character.hideAll();
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
            await Template.fS.update();
            await Template.fS.Speech.tell(Template.Rika, "<i>Komisch ich erinnere mich gar nicht an diese Baustelle, die muss neu sein.</i>");
            await Template.fS.Speech.tell(Template.Sho, "Den Weg kannte ich noch gar nicht.");
            Template.StateManager.storyState = Template.StoryState.ConstructionSiteAccidentHappend;
            //TODO: *** ADDING FALLING SOUND ***
            //TODO: *** ADDING CRACKING SOUND ***
            //TODO: *** SCREEN SHAKING ***
            //TODO: *** LOUD CONSTRUCTION SITE NOISE ***
            await Template.fS.Speech.tell(Template.Sho, "SHO, VORSICHT!");
            Template.fS.Speech.hide();
            Template.fS.Character.hideAll();
            //TODO: *** SHOW SCENE PICTURE
        }
        static async constructionSiteAccident() {
            //*** SECOND BAD ENDING*** 
        }
    }
    Template.ConstructionSite = ConstructionSite;
})(Template || (Template = {}));
var Template;
(function (Template) {
    class FallingAccident {
        static async fallingAccident() {
            //*** THIRD BAD ENDING***
            //TODO: ADD SOUNDS
            //TODO: ADD ENDPICUTRE
            //*** GAME OVER***
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
                await Template.fS.Location.show(Template.location.alley);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.Character.show(Template.Rika, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
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
                // Sagi und Rika sind auf dem Campus
                await Template.fS.Location.show(Template.location.uni);
                await Template.fS.update();
                // TODO: *** GLOCKE KLINGELT SOUND ***
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Sagi, "Komm schnell, wir schaffen es gerade so rechtzeitig.");
                Template.fS.Character.hideAll();
                break;
            case Template.StoryState.CarCrashHappend:
                console.log("Crash Happend!");
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.alley);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.Speech.tell(Template.Sagi, "Na, da bist du ja endlich. Komm, sonst kommen wir zu spät!");
                await Template.fS.Speech.tell(Template.Rika, "Tut mir leid, zurzeit schlafe ich wirklich schlecht. Ich frage mich wirklich, woran das liegt …");
                await Template.fS.Speech.tell(Template.Sagi, "Vielleicht bist du ja nur nervös, du weißt ja heute kommt der neue Schüler. Ich frage mich, wie er darauf ist. Hey, dann bekommst du ja vielleicht auch mal einen Freund.");
                await Template.fS.Speech.tell(Template.Rika, "Was hast du gerade gesagt?");
                await Template.fS.Speech.tell(Template.Sagi, "Ein neuer Schüler kommt heute in unsere Klasse. Bist du wirklich okay? Du siehst etwas blass aus…");
                await Template.fS.Speech.tell(Template.Rika, "Ja, ich denke schon. Du hast recht, ich sollte wirklich mehr trinken.");
                await Template.fS.Speech.tell(Template.Sagi, "Trinken? Das habe ich jetzt nicht gesagt, aber ja, das könnte helfen.");
                await Template.fS.Speech.tell(Template.Rika, "Hast du nicht? Ich dachte, dass du das gesagt hättest…");
                await Template.fS.Speech.tell(Template.Sagi, "Komm, wir gehen los. Sonst kommen wir zu spät.");
                Template.fS.Character.hideAll();
                await Template.fS.Location.show(Template.location.uni);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
                await Template.fS.update();
                //TODO: *** GONG KLINGELT***
                await Template.fS.Speech.tell(Template.Sagi, "Komm wir…");
                await Template.fS.Speech.tell(Template.Rika, "Wir schaffen es zum Unterricht, keine Sorge.");
                await Template.fS.Speech.tell(Template.Sagi, "...");
                break;
            case Template.StoryState.ConstructionSiteAccidentHappend:
                console.log("Construction Accident happend!");
                await Template.fS.Location.show(Template.location.alley);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.update();
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update(0.5);
                Template.fS.Character.hide(Template.Sagi);
                await Template.fS.Speech.tell(Template.Sagi, "Da bist du ja endlich.");
                await Template.fS.Speech.tell(Template.Rika, "Sagi, hast du manchmal das Gefühl, dass du den gleichen Tag immer wieder neu erlebst?");
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.angry, Template.fS.positionPercent(40, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Sagi, "Nein. Warum fragst du mich sowas Komisches?");
                await Template.fS.Speech.tell(Template.Sagi, "<i>Warum hat sie denn so wütend reagiert, hat sie auch solche komischen Träume?</i>");
                await Template.fS.Speech.tell(Template.Sagi, "… Komm wir gehen jetzt, sonst kommen wir zu spät.");
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
                await Template.fS.update();
                await Template.fS.Character.show(Template.Teacher, Template.TeacherPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(30, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                //TODO: ***GETUSCHEL VON ANDEREN SCHUELERN SOUND ***
                await Template.fS.Speech.tell(Template.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                //TODO: *** PAUSEN GONG EINFÜGEN
                //TODO: *** MENSCHEN DIE IN DER PAUSE REDEN EINFÜGEN ***
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update();
                await Template.fS.Progress.delay(3);
                // *** PAUSE ***
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(20, 100));
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(55, 100));
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positionPercent(85, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Rika, "Hey Sho. Ich bin Rika Sato.");
                await Template.fS.Speech.tell(Template.Sagi, "Hi, ich bin Sagi Aoki.");
                await Template.fS.Speech.tell(Template.Sho, "Hi, nett euch kennenzulernen.");
                await Template.fS.Speech.tell(Template.Sagi, "Bist du erst vor kurzem hier hergezogen, oder warum wechselst du die Schule mitten im Jahr?");
                await Template.fS.Speech.tell(Template.Rika, "SAGI! Du kannst doch nicht einfach so fragen.");
                await Template.fS.Speech.tell(Template.Sagi, "Ach komm schon Rika. Du bist doch sicher auch neugierig.");
                Template.fS.Character.hide(Template.Sho);
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.happy, Template.fS.positionPercent(20, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Sho, "Haha. Ach, das macht doch nichts.");
                Template.fS.Character.hide(Template.Sho);
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(20, 100));
                await Template.fS.update();
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
                //TODO: *** PAUSEN GONG EINBAUEN***
                await Template.fS.Speech.tell(Template.Sagi, "Das war eine schnelle Pause. Komm, wir gehen wieder an unseren Platz.");
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update();
                await Template.fS.Progress.delay(3);
                // *** Unterricht zu Ende***
                //TODO: *** GONG EINBAUEN ***
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(80, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Rika, "Okay, können wir los?");
                await Template.fS.Speech.tell(Template.Sho, "Ja, ich packe nur schnell meine Sachen zusammen.");
                // *** Auf dem Weg nach Hause***
                await Template.fS.Location.show(Template.location.uni);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.Speech.tell(Template.Rika, "Okay, dir nach.");
                await Template.fS.Speech.tell(Template.Rika, "Also wir können tatsächlich zwei verschiedene Routen nehmen, die ungefähr gleich lang sind. Aber der etwas längere Weg ist schöner.");
                await Template.fS.Speech.tell(Template.Sho, "Nun, dann gehen wir mal den etwas längeren, außer du hast es eilig.");
                await Template.fS.Speech.tell(Template.Rika, "Ne, ich habe heute nichts mehr vor. Dann kann ich dir etwas von der Stadt zeigen. Vor allem das große Einkaufszentrum. ");
                await Template.fS.Speech.tell(Template.Sho, "Oh, ich wusste gar nicht, dass es hier sowas gibt.");
                await Template.CarCrash.firstCarCrash();
                break;
            case Template.StoryState.CarCrashHappend:
                console.log("Crash Happend!");
                Template.fS.Character.hideAll();
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Teacher, Template.TeacherPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(30, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                // TODO: ***GETUSCHEL VON ANDEREN SCHUELERN SOUND ***
                await Template.fS.Speech.tell(Template.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                Template.fS.Character.hideAll();
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update();
                await Template.fS.Progress.delay(3);
                //TODO: *** PAUSEN GONG EINFÜGEN
                //TODO: *** MENSCHEN DIE IN DER PAUSE REDEN EINFÜGEN ***
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Sagi, "Rika du bist schon die ganze Zeit abwesend. Ist alles in Ordnung?");
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(30, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Rika, "Ja. Ich habe nur irgendwie das Gefühl, dass ich Sho schon mal getroffen habe.");
                await Template.fS.Speech.tell(Template.Sagi, "Mh, sollen wir mit ihm reden? Vielleicht kennt ihr euch.");
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update();
                await Template.fS.Progress.delay(1);
                await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positionPercent(20, 100));
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(55, 100));
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(85, 100));
                await Template.fS.update();
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
                // *** Pause Beendet***
                //TODO: *** PAUSEN GONG EINBAUEN***
                await Template.fS.Speech.tell(Template.Sagi, "Komm, wir gehen an unseren Platz.");
                //*** Unterricht beendet***
                //TODO: *** GONG EINBAUEN ***
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update();
                await Template.fS.Progress.delay(3);
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.Speech.tell(Template.Rika, "Okay, wir können losgehen.");
                await Template.fS.Speech.tell(Template.Sho, "Ja, ein Moment, ich packe schnell meine Sachen zusammen.");
                // -- -- -- Choice Endingrelevant -- -- --
                await Template.EndingChoices.firstEnding();
                break;
            case Template.StoryState.ConstructionSiteAccidentHappend:
                console.log("Construction Site Accident happend!");
                Template.fS.Character.hideAll();
                Template.fS.Speech.hide();
                await Template.fS.Location.show(Template.location.classroom);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Teacher, Template.TeacherPose.neutral, Template.fS.positionPercent(70, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(30, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
                await Template.fS.Speech.tell(Template.Rika, "<i>… Das ist er. Ich habe von ihm geträumt. Aber was ist passiert?</i> ");
                // TODO: ***GETUSCHEL VON ANDEREN SCHUELERN SOUND ***
                await Template.fS.Speech.tell(Template.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update();
                await Template.fS.Progress.delay(3);
                //TODO: *** PAUSEN GONG EINFÜGEN
                //TODO: *** MENSCHEN DIE IN DER PAUSE REDEN EINFÜGEN ***
                // *** PAUSE ***
                await Template.fS.Location.show(Template.location.classroom);
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
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(30, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Rika, "Hi, Sho. Ich bin Rika.");
                await Template.fS.Speech.tell(Template.Sagi, "Hi. Ich bin Sagi.");
                await Template.fS.Speech.tell(Template.Sho, "Hey, nett euch kennenzulernen. ");
                await Template.fS.Speech.tell(Template.Sagi, "Wohnst du schon lange in Kyoto?");
                Template.fS.Character.hide(Template.Sho);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.happy, Template.fS.positionPercent(30, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Sho, "Nein, ich bin erst vor kurzem hergezogen. Deswegen verlaufe ich mich manchmal noch. Haha.");
                Template.fS.Character.hide(Template.Sho);
                await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positionPercent(30, 100));
                await Template.fS.update();
                await Template.fS.Speech.tell(Template.Rika, "Wohnst du denn hier in der Nähe? Wir könnten dich mal in der Stadt herumführen.");
                await Template.fS.Speech.tell(Template.Sho, "Nein. Wir müssen oft umziehen, da mein Vater wegen seiner Arbeit oft in eine andere Stadt verlegt wird. Ich wohne gegenüber vom Umekoji Park.");
                await Template.fS.Speech.tell(Template.Rika, "Ah, da wohne ich auch. Wenn du möchtest, können wir heute gemeinsam nach Hause laufen.");
                await Template.fS.Speech.tell(Template.Rika, "<i>Vielleicht schaffe ich es heute...</i>");
                await Template.fS.Speech.tell(Template.Sho, "Das wäre echt cool. Danke.");
                await Template.fS.Speech.tell(Template.Sho, "Dann müsst ihr das ohne mich machen, ich treffe mich heute nach der Schule mit meiner Mutter.");
                // *** Pause zu Ende***
                //TODO: PAUSEN GONG EINFÜGEN
                await Template.fS.Speech.tell(Template.Rika, "Lass uns wieder an den Platz gehen, Sagi.");
                // *** Unterricht zu Ende***
                await Template.fS.Speech.tell(Template.Sho, "Können wir los gehen?");
                // -- -- -- Choices important for Ending -- -- --
                await Template.EndingChoices.secondEnding();
                break;
        }
    }
    Template.InClass = InClass;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function WakingUp() {
        console.log("Waking Up starting");
        //TODO: *** DONT FORGET DELAYS ***
        switch (Template.StateManager.storyState) {
            case Template.StoryState.FirstRun:
                //TODO:fS.Sound.play(sound.alarmClock, 0.5, false);
                //TODO: await fS.Progress.delay(4);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.update(Template.transition.swirl.duration, Template.transition.swirl.alpha, Template.transition.swirl.edge);
                await Template.fS.update();
                //await fS.Progress.delay(3);
                await Template.fS.Speech.tell(Template.RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await Template.fS.Speech.tell(Template.Rika, "Ja, ich bin schon wach.");
                await Template.fS.Speech.tell(Template.Rika, "Ich sollte mich schnell fertig machen, nicht dass Sagi wieder auf mich warten muss …");
                //TODO: await fS.Progress.delay(3);
                await Template.TransitionManager.blendInOut();
                await Template.fS.Progress.delay(5);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await Template.fS.Speech.tell(Template.RikaMother, "Okay, viel Erfolg!");
                await Template.fS.Character.animate(Template.Rika, Template.RikaPose.neutral, Template.leavingLeft());
                break;
            case Template.StoryState.CarCrashHappend:
                //*** After Car Accident***
                Template.fS.Sound.play(Template.sound.alarmClock, 0.5, false);
                //TODO: await fS.Progress.delay(4);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.update(Template.transition.swirl.duration, Template.transition.swirl.alpha, Template.transition.swirl.edge);
                await Template.fS.Speech.tell(Template.RikaMother, "Rika wach auf, sonst kommst du zu spät!");
                await Template.fS.Speech.tell(Template.Rika, "Was… Was war das für ein Traum…");
                await Template.fS.Speech.tell(Template.Rika, "Ja ich bin schon wach.");
                await Template.fS.Speech.tell(Template.Rika, "Ich sollte mich schnell anziehen, nicht, dass Sagi auf mich warten muss.");
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update();
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await Template.fS.Speech.tell(Template.RikaMother, "Okay, viel Erfolg!");
                break;
            case Template.StoryState.ConstructionSiteAccidentHappend:
                // *** AFTER CONSTRUCTION SITE ACCIDENT ***
                //TODO: await fS.Progress.delay(4);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.update(Template.transition.swirl.duration, Template.transition.swirl.alpha, Template.transition.swirl.edge);
                await Template.fS.Speech.tell(Template.RikaMother, "Rika… Dein Wecker hat nicht geklingelt… Bist du schon wach?");
                await Template.fS.Speech.tell(Template.RikaMother, "<i>Was ist hier los… Habe ich von Sho geträumt? Ich erinnere mich kaum an etwas.</i>");
                await Template.fS.Speech.tell(Template.Rika, "Ja, ich bin wach…");
                await Template.fS.Speech.tell(Template.Rika, "<i>Ich sollte mich schnell anziehen, Sagi wartet bestimmt schon…</i>");
                await Template.fS.Location.show(Template.location.darkBackground);
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                await Template.fS.update();
                await Template.fS.Progress.delay(5);
                await Template.fS.Location.show(Template.location.bedroom);
                await Template.fS.update();
                await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(40, 100));
                await Template.fS.update(0.5);
                await Template.fS.Speech.tell(Template.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
                await Template.fS.Speech.tell(Template.RikaMother, "Geht es dir gut? Du klingst heute etwas krank.");
                await Template.fS.Speech.tell(Template.Rika, "Ja, ich denke schon.");
                await Template.fS.Speech.tell(Template.RikaMother, "Okay… Dann bis heute Abend.");
                Template.fS.Speech.hide();
                Template.fS.Character.hideAll();
                break;
        }
    }
    Template.WakingUp = WakingUp;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map