"use strict";
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
        Ai: {
            name: "Ai",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Ai/girl1Neutral.png",
                angry: "Images/Character/Ai/girl1Angry.png",
                happy: "Images/Character/Ai/girl1Happy.png",
                shocked: "Images/Character/Ai/girl1Shocked.png",
                sad: "Images/Character/Ai/girl1Sad.png"
            }
        },
        TestChara: {
            name: "TestChara",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/aisaka_happy.png"
            }
        },
        Rika: {
            name: "Rika Satō",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/aisaka_happy.png"
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
                neutral: "Images/Character/aisaka_happy.png"
            }
        },
        Sho: {
            name: "Shō Rai",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/aisaka_happy.png"
            }
        },
        Teacher: {
            name: "Lehrerin",
            origin: Template.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/aisaka_happy.png"
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
        let scenes = [
            { scene: Template.wakingUp, name: "Waking up" },
            { scene: Template.goingToSchool, name: "Goining to School" }
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
    //*** RIKAS MUTTER ***
    Template.RikaMother = Template.characters.RikaMother;
    Template.RikaMotherPose = Template.characters.RikaMother.pose;
    //*** TEACHER ***
    Template.Teacher = Template.characters.Teacher;
    Template.TeacherPose = Template.characters.Teacher.pose;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function wakingUp() {
        console.log("Waking Up starting");
        // *** DONT FORGET DELAYS *** 
        Template.fS.Speech.hide();
        await Template.fS.Sound.play(Template.sound.alarmClock, 0.5, false);
        //await fS.Progress.delay(4);
        await Template.fS.Location.show(Template.location.bedroom);
        await Template.fS.update(Template.transition.swirl.duration, Template.transition.swirl.alpha, Template.transition.swirl.edge);
        // *** WECKER KLINGELN ***
        await Template.fS.update();
        //await fS.Progress.delay(3);
        await Template.fS.Speech.tell(Template.RikaMother, "Rika wach auf, sonst kommst du zu spät!");
        await Template.fS.Speech.tell(Template.Rika, "Ja, ich bin schon wach.");
        await Template.fS.Speech.tell(Template.Rika, "<i>Ich sollte mich schnell fertig machen, nicht dass Sagi wieder auf mich warten muss …</i>");
        //await fS.Progress.delay(3);
        //TODO *** AUSFADEN EINFADEN***
        await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(40, 100));
        await Template.fS.update(0.5);
        await Template.fS.Speech.tell(Template.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
        Template.fS.Speech.tell(Template.RikaMother, "Okay, viel Erfolg!");
        await Template.fS.Character.animate(Template.Rika, Template.RikaPose.neutral, Template.leavingLeft());
        //await fS.Progress.delay(1);
    }
    Template.wakingUp = wakingUp;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function goingToSchool() {
        console.log("Going to School starting");
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.alley);
        await Template.fS.update();
        await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
        await Template.fS.Character.show(Template.Rika, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
        await Template.fS.Speech.tell(Template.Sagi, "Na, da bist du ja endlich. Komm, sonst kommen wir zu spät!");
        await Template.fS.Speech.tell(Template.Rika, "Tut mir leid, zurzeit schlafe ich wirklich schlecht. Ich frage mich wirklich, woran das liegt …");
        await Template.fS.Speech.tell(Template.Sagi, "Vielleicht bist du ja nur nervös, du weißt ja heute kommt der neue Schüler. Ich frage mich, wie er drauf ist.");
        await Template.fS.Speech.tell(Template.Sagi, "Hey, dann bekommst du ja vielleicht auch mal einen Freund.");
        // TODO: *** LEICHTER BILD WACKELN***
        await Template.fS.Speech.tell(Template.Rika, "Ugh...");
        //await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
        //await fS.update();
        await Template.fS.Speech.tell(Template.Sagi, "Was ist los?!");
        await Template.fS.Speech.tell(Template.Rika, "Ich weiß nicht … irgendwie habe ich gerade ganz schlimme Kopfschmerzen bekommen. Hoffentlich ist es gleich vorbei.");
        await Template.fS.Speech.tell(Template.Sagi, "Hmm … du solltest wirklich mehr trinken, Rika.");
        // Sagi und Rika sind auf dem Campus
        await Template.fS.Location.show(Template.location.uni);
        await Template.fS.update();
        // TODO *** GLOCKE KLINGELT SOUND ***
        await Template.fS.Character.show(Template.Sagi, Template.SagiPose.neutral, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.Sagi, "Komm schnell, wir schaffen es gerade so rechtzeitig.");
        // Sagi und Rika sind im Klassenzimmer
        await Template.fS.Location.show(Template.location.classroom);
        await Template.fS.update();
        await Template.fS.Character.show(Template.Teacher, Template.TeacherPose.neutral, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
        await Template.fS.Character.show(Template.Sho, Template.ShoPose.neutral, Template.fS.positions.bottomcenter);
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");
        // TODO ***GETUSCHEL VON ANDEREN SCHUELERN SOUND ***
        await Template.fS.Speech.tell(Template.Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");
    }
    Template.goingToSchool = goingToSchool;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function firstScene() {
        console.log("First Scene starting");
        // let text = {
        //     Ai: {
        //         T0001: "Hallo",
        //         T0002: "Anderer Text",
        //         T0003: "Text Nummer 3",
        //     },
        // };
        Template.fS.Speech.hide();
        await Template.fS.Location.show(Template.location.alley);
        await Template.fS.Character.show(Template.characters.Ai, Template.characters.Ai.pose.neutral, Template.fS.positions.bottomcenter);
        //await ƒS.Character.show(characters.Ai, characters.Ai.pose.neutral, ƒS.positionPercent(60, 120));
        await Template.fS.update();
        await Template.fS.Speech.tell(Template.characters.Ai, "Text in einer Zeile");
        await Template.fS.Speech.tell(Template.characters.Ai, "Zweiter Text in einer Zeile");
        let pickedYes;
        let pickedNo;
        let pickedMaybe;
        let pickedOk;
        let readEverything = false;
        let dialogue = {
            iSayYes: "Ja",
            iSayOk: "Okay.",
            iSayNo: "Nein",
            iSayMaybe: "Vielleicht"
        };
        //Muss um eine do-while Schleife
        do {
            if (pickedMaybe) {
                //Möglichkeit zum löschen von Auswahlmöglichkeiten
                delete dialogue.iSayMaybe;
            }
            else if (pickedNo) {
                delete dialogue.iSayNo;
            }
            else if (pickedOk) {
                delete dialogue.iSayOk;
            }
            else if (pickedYes) {
                delete dialogue.iSayYes;
            }
            let dialogueElement = await Template.fS.Menu.getInput(dialogue, "choicesCSSClass");
            switch (dialogueElement) {
                case dialogue.iSayYes:
                    //Continue path here
                    console.log("test");
                    await Template.fS.Speech.tell(Template.characters.Ai, "Ich sage JA!");
                    pickedYes = true;
                    break;
                case dialogue.iSayOk:
                    //Continue path here
                    await Template.fS.Speech.tell(Template.characters.Ai, "Ich sage OK!");
                    pickedOk = true;
                    break;
                case dialogue.iSayNo:
                    //Continue path here
                    await Template.fS.Speech.tell(Template.characters.Ai, "Ich sage Nein!");
                    pickedNo = true;
                    break;
                case dialogue.iSayMaybe:
                    //Continue path here
                    await Template.fS.Speech.tell(Template.characters.Ai, "Ich sage Vielleicht!");
                    pickedMaybe = true;
                    break;
            }
            if (pickedMaybe && pickedOk && pickedNo && pickedYes) {
                readEverything = true;
            }
        } while (readEverything == false);
    }
    Template.firstScene = firstScene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function secondScene() {
        console.log("Second Scene starting");
        await Template.fS.Character.show(Template.characters.Ai, Template.characters.Ai.pose.happy, Template.fS.positions.bottomcenter);
        Template.fS.update();
        await Template.fS.Character.animate(Template.characters.Ai, Template.characters.Ai.pose.happy, Template.animation());
    }
    Template.secondScene = secondScene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map