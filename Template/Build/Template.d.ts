declare namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    let transition: {
        swirl: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        outside: string;
        alarmClock: string;
    };
    let location: {
        alley: {
            name: string;
            background: string;
        };
        bedroom: {
            name: string;
            background: string;
        };
        classroom: {
            name: string;
            background: string;
        };
        library: {
            name: string;
            background: string;
        };
        steps: {
            name: string;
            background: string;
        };
        street: {
            name: string;
            background: string;
        };
        uni: {
            name: string;
            background: string;
        };
        darkBackground: {
            name: string;
            background: string;
        };
        streetCity: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        Rika: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                angry: string;
                sad: string;
            };
        };
        RikaMother: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        Sagi: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                angry: string;
                sad: string;
                insane: string;
            };
        };
        Sho: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                angry: string;
                sad: string;
            };
        };
        Teacher: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
    function animation(): fS.AnimationDefinition;
    function leavingLeft(): fS.AnimationDefinition;
}
declare namespace Template {
    let Rika: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
            happy: string;
            angry: string;
            sad: string;
        };
    };
    let RikaPose: {
        neutral: string;
        happy: string;
        angry: string;
        sad: string;
    };
    let Sagi: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
            happy: string;
            angry: string;
            sad: string;
            insane: string;
        };
    };
    let SagiPose: {
        neutral: string;
        happy: string;
        angry: string;
        sad: string;
        insane: string;
    };
    let Sho: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
            happy: string;
            angry: string;
            sad: string;
        };
    };
    let ShoPose: {
        neutral: string;
        happy: string;
        angry: string;
        sad: string;
    };
    let RikaMother: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
        };
    };
    let RikaMotherPose: {
        neutral: string;
    };
    let Teacher: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
        };
    };
    let TeacherPose: {
        neutral: string;
    };
}
declare namespace Template {
    function GoingToSchool(): fS.SceneReturn;
}
declare namespace Template {
    function InKlasseErste(): fS.SceneReturn;
}
declare namespace Template {
    function WakingUp(): fS.SceneReturn;
}
