namespace Template {
    export async function GoingToSchool(): fS.SceneReturn {
        console.log("Going to School starting");

        switch (StateManager.storyState) {
            case StoryState.FirstRun:
                console.log("First Run!");
                // fS.Speech.hide();
                await fS.Location.show(location.alley);
                await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge);                
                await fS.update();

                await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
                await fS.Character.show(Rika, SagiPose.neutral, fS.positions.bottomcenter);
                await fS.update(0.5);                await fS.Speech.tell(Sagi, "Na, da bist du ja endlich. Komm, sonst kommen wir zu spät!");
                await fS.Speech.tell(Rika, "Tut mir leid, zurzeit schlafe ich wirklich schlecht. Ich frage mich wirklich, woran das liegt …");
                await fS.Speech.tell(Sagi, "Vielleicht bist du ja nur nervös, du weißt ja heute kommt der neue Schüler. Ich frage mich, wie er drauf ist.");
                await fS.Speech.tell(Sagi, "Hey, dann bekommst du ja vielleicht auch mal einen Freund.");

                // TODO: *** LEICHTES BILD WACKELN***
                await fS.Speech.tell(Rika, "Ugh...");
                //await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
                //await fS.update();
                await fS.Speech.tell(Sagi, "Was ist los?!");
                await fS.Speech.tell(Rika, "Ich weiß nicht … irgendwie habe ich gerade ganz schlimme Kopfschmerzen bekommen. Hoffentlich ist es gleich vorbei.");
                await fS.Speech.tell(Sagi, "Hmm … du solltest wirklich mehr trinken, Rika.");

                fS.Speech.hide();
                fS.Character.hideAll();
                // Sagi und Rika sind auf dem Campus
                // await TransitionManager.blendInOut();
                await fS.Location.show(location.uni);
                await fS.update(transition.wipeRight.duration, transition.wipeRight.alpha, transition.wipeRight.edge); 
                await fS.update();

                // TODO: *** GLOCKE KLINGELT SOUND ***
                await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
                await fS.update(0.5);
                await fS.Speech.tell(Sagi, "Komm schnell, wir schaffen es gerade so rechtzeitig.");
                fS.Character.hideAll();
                // await TransitionManager.blendInOut();
                break;

            case StoryState.CarCrashHappend:
                console.log("Crash Happend!");
                fS.Speech.hide();
                await fS.Location.show(location.alley);
                await fS.update();
                await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
                // await fS.Character.show(Rika, RikaPose.neutral, fS.positions.bottomcenter);
                await fS.update(0.5);
                await fS.Speech.tell(Sagi, "Na, da bist du ja endlich. Komm, sonst kommen wir zu spät!");
                await fS.Speech.tell(Rika, "Tut mir leid, zurzeit schlafe ich wirklich schlecht. Ich frage mich wirklich, woran das liegt …");
                await fS.Speech.tell(Sagi, "Vielleicht bist du ja nur nervös, du weißt ja heute kommt der neue Schüler. Ich frage mich, wie er darauf ist. Hey, dann bekommst du ja vielleicht auch mal einen Freund.");
                await fS.Speech.tell(Rika, "Was hast du gerade gesagt?");
                await fS.Speech.tell(Sagi, "Ein neuer Schüler kommt heute in unsere Klasse. Bist du wirklich okay? Du siehst etwas blass aus…");
                await fS.Speech.tell(Rika, "Ja, ich denke schon. Du hast recht, ich sollte wirklich mehr trinken.");
                await fS.Speech.tell(Sagi, "Trinken? Das habe ich jetzt nicht gesagt, aber ja, das könnte helfen.");
                await fS.Speech.tell(Rika, "Hast du nicht? Ich dachte, dass du das gesagt hättest…");
                await fS.Speech.tell(Sagi, "Komm, wir gehen los. Sonst kommen wir zu spät.");

                fS.Character.hideAll();
                await fS.Location.show(location.uni);
                await fS.update(transition.wipeLeft.duration, transition.wipeLeft.alpha, transition.wipeLeft.edge);
                await fS.update();
                
                await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
                await fS.update(0.5);
                


                //TODO: *** GONG KLINGELT***
                await fS.Speech.tell(Sagi, "Komm wir…");
                await fS.Speech.tell(Rika, "Wir schaffen es zum Unterricht, keine Sorge.");
                await fS.Speech.tell(Sagi, "...");
                await TransitionManager.blendInOut();
                break;

            case StoryState.ConstructionSiteAccidentHappend:
                console.log("Construction Accident happend!");
                await fS.Location.show(location.alley);
                await fS.update();
                await fS.Character.show(Sagi, SagiPose.neutral, fS.positionPercent(40, 100));
                await fS.update();
                await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(70, 100));
                await fS.update(0.5);
                fS.Character.hide(Sagi);
                await fS.Speech.tell(Sagi, "Da bist du ja endlich.");
                await fS.Speech.tell(Rika, "Sagi, hast du manchmal das Gefühl, dass du den gleichen Tag immer wieder neu erlebst?");
                await fS.Character.show(Sagi, SagiPose.angry, fS.positionPercent(40, 100));
                await fS.update();
                await fS.Speech.tell(Sagi, "Nein. Warum fragst du mich sowas Komisches?");
                await fS.Speech.tell(Sagi, "<i>Warum hat sie denn so wütend reagiert, hat sie auch solche komischen Träume?</i>");
                await fS.Speech.tell(Sagi, "… Komm wir gehen jetzt, sonst kommen wir zu spät.");
                await TransitionManager.blendInOut();
                break;
            case StoryState.SchoolAccidentHappend:
                console.log("School Accident happend!");
                await fS.Location.show(location.alley);
                await fS.update();
                await fS.Character.show(Sagi, SagiPose.neutral, fS.positionPercent(40, 100));
                await fS.update();
                await fS.Speech.tell(Sagi, "Da bist du ja endlich … Du siehst ja gar nicht gut aus.");
                await fS.Speech.tell(Rika, "Sagi. Welchen Tag haben wir heute?");
                await fS.Speech.tell(Sagi, "Ehm …ist alles in Ordnung?");
                await fS.Speech.tell(Rika, "Ich habe zurzeit wirklich komische Träume. Es sind nicht mal wirklich Träume. Ich weiß zum Beispiel, dass wir heute einen neuen Schüler bekommen und dass sein Name Sho ist.");
                await fS.Speech.tell(Sagi, "…");
                await fS.Speech.tell(Rika, "Und ich weiß, dass heute was ganz Schlimmes mit Sho passieren wird.");
                await fS.Speech.tell(Sagi, "Rika. Beruhig dich. Bald sind Prüfungen, vielleicht bist du etwas gestresst.");
                await fS.Speech.tell(Rika, "Ich glaube, du verstehst mich nicht. Ich lebe den heutigen Tag immer und immer wieder.");
                await fS.Speech.tell(Rika, "Ich will einfach, dass es aufhört.");
                await fS.Speech.tell(Sagi, "Ich kann dir nicht wirklich helfen. Lass uns heute Abend noch mal darüber sprechen.");
                await fS.Speech.tell(Sagi, "Komm, wir gehen erstmal zur Schule.");
                await fS.Speech.tell(Rika, "Ja…");
                await TransitionManager.blendInOut();
                break;
        }
    }
}
