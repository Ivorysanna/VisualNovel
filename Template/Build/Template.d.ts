declare namespace Template {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    let transition: {
        spiral: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        outside: string;
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
    };
    let characters: {
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        Ai: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
                angry: string;
                happy: string;
                shocked: string;
                sad: string;
            };
        };
        TestChara: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        Rika: {
            name: string;
            origin: f.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        RikasMutter: {
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
            };
        };
        Sho: {
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
}
declare namespace Template {
    let Rika: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
        };
    };
    let RikaPose: {
        neutral: string;
    };
    let Sagi: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
        };
    };
    let SagiPose: {
        neutral: string;
    };
    let Sho: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
        };
    };
    let ShoPose: {
        neutral: string;
    };
    let RikasMutter: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
        };
    };
    let RikasMutterPose: {
        neutral: string;
    };
}
declare namespace Template {
    function firstScene(): fS.SceneReturn;
}
declare namespace Template {
    function secondScene(): fS.SceneReturn;
}
declare namespace Template {
    function wakingUp(): fS.SceneReturn;
}
