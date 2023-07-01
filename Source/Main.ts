namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;

    console.log("FudgeStory template starting");

    //*** TRANSITIONS ***
    export let transition = {
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

    export let data = {
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
    export let sound = {
        // Themes
        // SFX
        outside: "Sounds/outside.wav",
        alarmClock: "Sounds/alarmClock.wav",
        book: "Sounds/book.wav",
        breakChatter: "Sounds/breakChatter.mp3",
        carHorn: "Sounds/carHorn.mp3",
        cityNoise: "Sounds/cityNoise.mp3",
        classWhispering: "Sounds/classWhispering.mp3",
        cloth: "Sounds/cloth.mp3",
        constructionSite: "Sounds/constructionSite.mp3",
        intenseSound: "Sounds/intenseSound.wav",
        librarySound: "Sounds/librarySound.mp3",
        neckCracking: "Sounds/neckCracking.mp3",
        packingBack: "Sounds/packingBack.mp3",
        schoolBell: "Sounds/schoolBell.mp3",
    };

    //*** BACKGROUNDS ***
    export let location = {
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
    export let characters = {
        narrator: {
            name: "",
        },
        protagonist: {
            name: "",
        },
        Rika: {
            name: "Rika Satō",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Rika/rika_neutral.png",
                happy: "Images/Character/Rika/rika_happy.png",
                angry: "Images/Character/Rika/rika_angry.png",
                sad: "Images/Character/Rika/rika_sad.png",
            },
        },
        RikaMother: {
            name: "Rikas Mutter",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/aisaka_happy.png",
            },
        },
        Sagi: {
            name: "Sagi Aoki",
            origin: fS.ORIGIN.BOTTOMCENTER,
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
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Sho/sho_neutral.png",
                happy: "Images/Character/Sho/sho_happy.png",
                angry: "Images/Character/Sho/sho_angry.png",
                sad: "Images/Character/Sho/sho_sad.png",
            },
        },
        Teacher: {
            name: "Lehrerin",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Character/Teacher/teacher_neutral.png",
            },
        },
    };

    // *** DATA THAT WILL BE SAVED (GAME PROGRESS) ***
    export let dataForSave = {
        nameProtagonist: "",
        shoScore: 0,
    };

    // *** ITEMS ***
    export let items = {
        pictureStreet: {
            name: "PictureStreet",
            image: "Images/Backgrounds/steps.png",
            description: "Ein Bild von der Straße",
            static: true,
        },
        pictureConstructionSite: {
            name: "PictureConstructionSite",
            image: "Images/Backgrounds/steps.png",
            description: "Ein Bild von der Baustelle",
            static: true,
        },
        pictureSteps: {
            name: "PictureSteps",
            image: "Images/Backgrounds/steps.png",
            description: "Ein Bild von Stufen",
            static: true,
        },
        pictureClassroom: {
            name: "PictureClassroom",
            image: "Images/Backgrounds/steps.png",
            description: "Ein Bild von unserem Klassenzimmer",
            static: true,
        },
    };

    // *** CREDITS ***
    let credits: string[] = [
        "<b>Titlescreen:</b></br>\
        <i>Car:</i> Daniel Zhabotinsky on Sketchfab</br>\
        <i>Font:</i> Perfect Dark BRK by Ænigma Fonts",
        "<b>Backgrounds:</b></br>\
        Futuristic Reality 2 Pack by Rachel Chen",
        "<b>Hairstyles:</b></br>\
        <i>JJ & Dio:</i> https://booth.pm/en/items/2870629 / Male protagonist hair by Atelier Echo ~ アトリエ・エコー</br>\
        <i>Justice:</i> https://booth.pm/en/items/3028807 / Vroid Blonde Ponytail by nyxxxnoctis</br>\
        <i>Yuri:</i> 【Serena Kupopo - https://kupopo.net/】</br>\
        <i>Amelia:</i> https://booth.pm/en/items/3020826 / Vroid Hair Preset ane texture by nyxxxnoctis</br>\
        <i>Books:</i> https://booth.pm/ja/items/2933774 / Long Curly hair With headbang Preset by scarletanimefox</br>\
        <i>Nao:</i> https://booth.pm/ja/items/3044682 / Vroid~ Free hair preset 3 by alis</br>\
        <i>Azami:</i> https://booth.pm/ja/items/3044516 / Vroid~ Free hair preset by alis</br>\
        ",
        "<b>Music:</b></br>\
        <i>Alumo:</i> https://soundcloud.com/alumomusic/sets/synthwave",
        "<b>Textbox:</b></br>\
        https://otomeflag.itch.io/futuristic-hologram-01 by OTOME	&#10084; FLAG",
    ];

    // *** ANIMATION ***
    export function leavingLeft(): fS.AnimationDefinition {
        return {
            start: { translation: fS.positionPercent(40, 100), color: fS.Color.CSS("", 1) },
            end: { translation: fS.positionPercent(20, 100), color: fS.Color.CSS("", 0) },
            duration: 3,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }

    // *** DATA THAT WILL BE SAVED (GAME PROGRESS) ***

    //Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits",
    };

    let gameMenu: fS.Menu;
    let shoBar: HTMLElement;
    //open = true, closed = false
    let menuIsOpen: boolean = true;

    async function btnFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await fS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await fS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                let current: number = 0;
                let flip = { back: "Zurück", next: "Weiter", close: "Schließen" };
                let choice: string;
                fS.Text.addClass("credits");
                do {
                    fS.Text.print(credits[current]);
                    choice = await fS.Menu.getInput(flip, "flip");
                    switch (choice) {
                        case flip.back:
                            current = Math.max(0, current - 1);
                            break;
                        case flip.next:
                            current = Math.min(credits.length - 1, current + 1);
                            break;
                    }
                } while (choice != flip.close);
                fS.Text.close();
                break;
            default:
        }
    }

    //***  Hide Button ***
    document.addEventListener(
        "DOMContentLoaded",
        () => {
            document.getElementById("ausleihbutton").addEventListener("click", () => {
                InterfaceHelper.toggleAusleihButton();
            });
        },
        false
    );

    // Menu shortcuts
    document.addEventListener("keydown", hndKeyPres);
    async function hndKeyPres(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case f.KEYBOARD_CODE.S:
                console.log("Save...");
                await fS.Progress.save();
                break;
            case f.KEYBOARD_CODE.L:
                console.log("Load");
                await fS.Progress.load();
                break;
            case f.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    shoBar.classList.add("hidden");
                    gameMenu.close();
                    menuIsOpen = false;
                } else {
                    console.log("Open");
                    shoBar.classList.remove("hidden");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }

    window.addEventListener("load", start);
    function start(_event: Event): void {
        shoBar = <HTMLElement>document.getElementById("shoBar");
        gameMenu = fS.Menu.create(inGameMenuButtons, btnFunctionalities, "gameMenuCSSClass");
        btnFunctionalities("Close");
        /*** SCENE HIERARCHY ***/
        fS.Speech.hide();
        let scenes: fS.Scenes = [
            { id: "wakingUpFirstTime", scene: WakingUp, name: "Waking up" },
            { id: "toSchoolFirstTime", scene: GoingToSchool, name: "Going to School firstTime" },
            { id: "inClassFirstTime", scene: InClass, name: "In Class for firstTime" },
            { id: "wakingUpCarCrash", scene: WakingUp, name: "Waking up Carcrash" },
            { id: "toSchoolAfterCarCrash", scene: GoingToSchool, name: "Going to School after Carcrash" },
            { id: "inClassAfterCarCrash", scene: InClass, name: "In Class after Carcrash" },
            { id: "inClassAfterConstructionAccident", scene: WakingUp, name: "Waking up after Construction Site Accident" },
            { id: "toSchoolAfterConstructionAccident", scene: GoingToSchool, name: "Going to School after Construction Site Accident" },
            { id: "inClassAfterConstructionAccident", scene: InClass, name: "In Class AfterConstructionAccident" },
            { id: "wakingUpAfterSchoolAccident", scene: WakingUp, name: "Waking up after School Accident" },
            { id: "toSchoolAfterSchoolAccident", scene: GoingToSchool, name: "Going to School after School Accident" },
            { id: "inClassAfterSchoolAccident", scene: InClass, name: "In Class after School Accident" },
        ];

        let uiElement: HTMLElement = document.querySelector("[type=interface]");
        dataForSave = fS.Progress.setData(dataForSave, uiElement);

        // start the sequence
        fS.Progress.go(scenes);
    }
}
