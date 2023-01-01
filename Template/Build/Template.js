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
        },
        darkBackground: {
            name: "DarkBackground",
            background: "Images/Backgrounds/darkbackground.png"
        },
        streetCity: {
            name: "Streetcity",
            background: "Images/Backgrounds/streetCity.png"
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
            //{ id: "wakingUp1", scene: WakingUp, name: "Waking up" },
            //{ id: "toSchool1", scene: GoingToSchool, name: "Going to School firstTime"},
            { id: "inClassFirstTime", scene: Template.InKlasseErste, name: "In Class for firstTime" }
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
    async function GoingToSchool() {
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
    }
    Template.GoingToSchool = GoingToSchool;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function InKlasseErste() {
        // Sagi und Rika sind im Klassenzimmer
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
        //TODO: *** PAUSEN GONG EINFÜGEN
        //TODO: *** MENSCHEN DIE IN DER PAUSE REDEN EINFÜGEN ***
        await Template.fS.Location.show(Template.location.darkBackground);
        Template.fS.Speech.hide();
        Template.fS.Character.hideAll();
        await Template.fS.update();
        await Template.fS.Progress.delay(3);
        // *** PAUSE ***
        Template.fS.Location.show(Template.location.classroom);
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
    }
    Template.InKlasseErste = InKlasseErste;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function WakingUp() {
        console.log("Waking Up starting");
        let firstWakingUp = false;
        //TODO: *** DONT FORGET DELAYS ***
        if (!firstWakingUp) {
            //fS.Sound.play(sound.alarmClock, 0.5, false);
            //TODO: await fS.Progress.delay(4);
            await Template.fS.Location.show(Template.location.bedroom);
            await Template.fS.update(Template.transition.swirl.duration, Template.transition.swirl.alpha, Template.transition.swirl.edge);
            await Template.fS.update();
            //await fS.Progress.delay(3);
            await Template.fS.Speech.tell(Template.RikaMother, "Rika wach auf, sonst kommst du zu spät!");
            await Template.fS.Speech.tell(Template.Rika, "Ja, ich bin schon wach.");
            await Template.fS.Speech.tell(Template.Rika, "<i>Ich sollte mich schnell fertig machen, nicht dass Sagi wieder auf mich warten muss …</i>");
            //await fS.Progress.delay(3);
            await Template.fS.Location.show(Template.location.darkBackground);
            Template.fS.Speech.hide();
            Template.fS.Character.hideAll();
            await Template.fS.update();
            await Template.fS.Progress.delay(5);
            await Template.fS.Location.show(Template.location.bedroom);
            await Template.fS.Character.show(Template.Rika, Template.RikaPose.neutral, Template.fS.positionPercent(40, 100));
            await Template.fS.update(0.5);
            await Template.fS.Speech.tell(Template.Rika, "Mama, ich gehe jetzt los. Bis heute Abend.");
            Template.fS.Speech.tell(Template.RikaMother, "Okay, viel Erfolg!");
            await Template.fS.Character.animate(Template.Rika, Template.RikaPose.neutral, Template.leavingLeft());
            firstWakingUp = true;
        }
        else {
            //TODO: AFTER ACCIDENT SCENE BAUEN
            //*** After Car Accident***
            await Template.fS.Sound.play(Template.sound.alarmClock, 0.5, false);
            //await fS.Progress.delay(4);
            await Template.fS.Location.show(Template.location.bedroom);
            await Template.fS.update(Template.transition.swirl.duration, Template.transition.swirl.alpha, Template.transition.swirl.edge);
        }
    }
    Template.WakingUp = WakingUp;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map