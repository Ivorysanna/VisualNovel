namespace Template {
    export enum StoryState {
        FirstRun,
        CarCrashHappend,
        ConstructionSiteAccidentHappend,
    }

    export class StateManager {
        //*** GLOBAL VARIABLES***
        public static storyState: StoryState = StoryState.FirstRun;

        public static loveOMeter: number = 0;

        public static choicesState: String = "firstChoice";

        public static endingState: String = "";

        public static carCrashHappend: boolean = false;
    }
}
