declare namespace Template {
    class Choices {
        static livingHereChoice(): Promise<void>;
        static livingWhereChoice(): Promise<void>;
        static goingHomeFastChoice(): Promise<void>;
        static askingShoAboutFriends(): Promise<void>;
    }
}
declare namespace Template {
    class EndingChoices {
        static firstEnding(): Promise<void>;
        static secondEnding(): Promise<void>;
        static thirdEnding(): Promise<void>;
        static fourthEnding(): Promise<void>;
        static firstBadEndingAgain(): Promise<void>;
    }
}
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
    let data: {
        Protagonist: {
            name: string;
        };
        score: {
            a: number;
        };
        ended: boolean;
        correct: boolean;
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
        constructionSite: {
            name: string;
            background: string;
        };
        bridge: {
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
    const Rika: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
            happy: string;
            angry: string;
            sad: string;
        };
    };
    const RikaPose: {
        neutral: string;
        happy: string;
        angry: string;
        sad: string;
    };
    const Sagi: {
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
    const SagiPose: {
        neutral: string;
        happy: string;
        angry: string;
        sad: string;
        insane: string;
    };
    const Sho: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
            happy: string;
            angry: string;
            sad: string;
        };
    };
    const ShoPose: {
        neutral: string;
        happy: string;
        angry: string;
        sad: string;
    };
    const RikaMother: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
        };
    };
    const RikaMotherPose: {
        neutral: string;
    };
    const Teacher: {
        name: string;
        origin: f.ORIGIN2D;
        pose: {
            neutral: string;
        };
    };
    const TeacherPose: {
        neutral: string;
    };
}
declare namespace Template {
    enum StoryState {
        FirstRun = 0,
        CarCrashHappend = 1,
        ConstructionSiteAccidentHappend = 2,
        SchoolAccidentHappend = 3
    }
    class StateManager {
        static storyState: StoryState;
        static loveOMeter: number;
        static choicesState: String;
        static endingState: String;
        static carCrashHappend: boolean;
    }
}
declare namespace Template {
    class TransitionManager {
        static blendInOut(): Promise<void>;
    }
}
declare namespace Template {
    class CarCrash {
        static firstCarCrash(): Promise<void>;
        static carCrashHappend(): Promise<void>;
    }
}
declare namespace Template {
    class ConstructionSite {
        static firstConstructionSiteAccident(): Promise<void>;
        static constructionSiteAccident(): Promise<void>;
    }
}
declare namespace Template {
    class FallingAccident {
        static firstFallingAccident(): Promise<void>;
        static FallingAccidentHappend(): Promise<void>;
    }
}
declare namespace Template {
    function GoingToSchool(): fS.SceneReturn;
}
declare namespace Template {
    function InClass(): fS.SceneReturn;
}
declare namespace Template {
    class Library {
        static inLibrary(): Promise<void>;
    }
}
declare namespace Template {
    class SavingSho {
        static savingSho(): Promise<void>;
    }
}
declare namespace Template {
    class SchoolAccident {
        static firstSchoolAccident(): Promise<void>;
        static schoolAccidentHappend(): Promise<void>;
    }
}
declare namespace Template {
    class TalkingSagi {
        static talkingWithSagi(): Promise<void>;
    }
}
declare namespace Template {
    class TalkingSho {
        static talkingWithSho(): Promise<void>;
    }
}
declare namespace Template {
    function WakingUp(): fS.SceneReturn;
}
