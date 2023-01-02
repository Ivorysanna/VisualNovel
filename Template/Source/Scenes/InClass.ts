namespace Template {
    export async function InClass(): fS.SceneReturn {
        console.log("First Class starting");
        switch (storyState) {
            case "":
                // Sagi und Rika sind im Klassenzimmer
                fS.Speech.hide();
                await fS.Location.show(location.classroom);
                await fS.update();

                await fS.Character.show(Teacher, TeacherPose.neutral, fS.positionPercent(70, 100));
                await fS.update();
                await fS.Speech.tell(Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await fS.Character.show(Sho, ShoPose.neutral, fS.positionPercent(30, 100));
                await fS.update();
                await fS.Speech.tell(Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");

                // TODO: ***GETUSCHEL VON ANDEREN SCHUELERN SOUND ***
                await fS.Speech.tell(Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");

                //TODO: *** PAUSEN GONG EINFÜGEN
                //TODO: *** MENSCHEN DIE IN DER PAUSE REDEN EINFÜGEN ***
                await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update();

                await fS.Progress.delay(3);

                // *** PAUSE ***
                await fS.Location.show(location.classroom);
                await fS.update();

                await fS.Character.show(Sho, ShoPose.neutral, fS.positionPercent(20, 100));
                await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(55, 100));
                await fS.Character.show(Sagi, SagiPose.neutral, fS.positionPercent(85, 100));
                await fS.update();

                await fS.Speech.tell(Rika, "Hey Sho. Ich bin Rika Sato.");
                await fS.Speech.tell(Sagi, "Hi, ich bin Sagi Aoki.");
                await fS.Speech.tell(Sho, "Hi, nett euch kennenzulernen.");
                await fS.Speech.tell(Sagi, "Bist du erst vor kurzem hier hergezogen, oder warum wechselst du die Schule mitten im Jahr?");
                await fS.Speech.tell(Rika, "SAGI! Du kannst doch nicht einfach so fragen.");
                await fS.Speech.tell(Sagi, "Ach komm schon Rika. Du bist doch sicher auch neugierig.");

                fS.Character.hide(Sho);
                await fS.Character.show(Sho, ShoPose.happy, fS.positionPercent(20, 100));
                await fS.update();

                await fS.Speech.tell(Sho, "Haha. Ach, das macht doch nichts.");

                fS.Character.hide(Sho);
                await fS.Character.show(Sho, ShoPose.neutral, fS.positionPercent(20, 100));
                await fS.update();

                await fS.Speech.tell(Sho, "Meine Familie muss recht oft umziehen, da mein Vater wegen seiner Arbeit oft in eine andere Stadt versetzt wird. Aber das macht mir nicht so viel aus.");
                await fS.Speech.tell(Sagi, "Aber vermisst du deine Freunde denn nicht?");
                await fS.Speech.tell(Sho, "Na ja, meistens bleibe ich nicht lange genug in einer Stadt, um wirklich gute Freunde zu finden. Und hin und wieder kann ich mich mit ein paar Bekannten treffen, aber das ist eher selten der Fall.");
                await fS.Speech.tell(Rika, "Mh, aber vielleicht findest du hier jemanden. Kyoto ist eine große Stadt und die Schule auch.");
                await fS.Speech.tell(Sagi, "Wir können dich auch gerne mal in der Stadt herumführen, nicht wahr, Rika?");
                await fS.Speech.tell(Rika, "Ehm… Ja klar.");
                await fS.Speech.tell(Sho, "Das wäre echt cool. Manchmal verlaufe ich mich immer noch. Hoffentlich schaffe ich es heute nach Hause nach der Schule.");
                await fS.Speech.tell(Rika, "Oh, wo wohnst du denn?");
                await fS.Speech.tell(Sho, "Ah…Eh… Gegenüber vom Umekoji Park. Ich kann mir leider die Straße nie merken.");
                await fS.Speech.tell(Rika, "An der Kitsuya-bashi Dori? Da wohne ich auch in der Nähe.");
                await fS.Speech.tell(Sho, "Oh, wirklich?! Dann kannst du mich eventuell heute begleiten. Haha.");
                await fS.Speech.tell(Sagi, "Dann müsst ihr wohl ohne mich heute gehen. Ich treffe mich heute mit meiner Mutter nach der Schule.");
                await fS.Speech.tell(Rika, "Ja, kein Problem. Können gerne zusammen gehen.");

                // *** Pause Beendet***
                //TODO: *** PAUSEN GONG EINBAUEN***
                await fS.Speech.tell(Sagi, "Das war eine schnelle Pause. Komm, wir gehen wieder an unseren Platz.");

                await fS.Location.show(location.darkBackground);
                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update();

                await fS.Progress.delay(3);

                // *** Unterricht zu Ende***
                //TODO: *** GONG EINBAUEN ***
                await fS.Location.show(location.classroom);
                await fS.update();
                await fS.Character.show(Sho, ShoPose.neutral, fS.positionPercent(40, 100));
                await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(80, 100));
                await fS.update();
                await fS.Speech.tell(Rika, "Okay, können wir los?");
                await fS.Speech.tell(Sho, "Ja, ich packe nur schnell meine Sachen zusammen.");

                // *** Auf dem Weg nach Hause***
                await fS.Location.show(location.uni);
                await fS.update();

                await fS.Character.show(Sho, ShoPose.neutral, fS.positionPercent(40, 100));
                await fS.Speech.tell(Rika, "Okay, dir nach.");
                await fS.Speech.tell(Rika, "Also wir können tatsächlich zwei verschiedene Routen nehmen, die ungefähr gleich lang sind. Aber der etwas längere Weg ist schöner.");
                await fS.Speech.tell(Sho, "Nun, dann gehen wir mal den etwas längeren, außer du hast es eilig.");
                await fS.Speech.tell(Rika, "Ne, ich habe heute nichts mehr vor. Dann kann ich dir etwas von der Stadt zeigen. Vor allem das große Einkaufszentrum. ");
                await fS.Speech.tell(Sho, "Oh, ich wusste gar nicht, dass es hier sowas gibt.");
            case "carCrashHappend":
                fS.Speech.hide();
                await fS.Location.show(location.classroom);
                await fS.update();

                await fS.Character.show(Teacher, TeacherPose.neutral, fS.positionPercent(70, 100));
                await fS.update();
                await fS.Speech.tell(Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
                await fS.Character.show(Sho, ShoPose.neutral, fS.positionPercent(30, 100));
                await fS.update();
                await fS.Speech.tell(Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");

                // TODO: ***GETUSCHEL VON ANDEREN SCHUELERN SOUND ***
                await fS.Speech.tell(Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");

                //TODO: *** PAUSEN GONG EINFÜGEN
                //TODO: *** MENSCHEN DIE IN DER PAUSE REDEN EINFÜGEN ***
                await fS.Character.show(Sagi, SagiPose.neutral, fS.positionPercent(70, 100));
                await fS.update();
                await fS.Speech.tell(Sagi, "Rika du bist schon die ganze Zeit abwesend. Ist alles in Ordnung?");
                await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(30, 100));
                await fS.update();
                await fS.Speech.tell(Rika, "Ja. Ich habe nur irgendwie das Gefühl, dass ich Sho schon mal getroffen habe.");
                await fS.Speech.tell(Sagi, "Mh, sollen wir mit ihm reden? Vielleicht kennt ihr euch.");

                fS.Speech.hide();
                fS.Character.hideAll();
                await fS.update();
                await fS.Progress.delay(1);

                await fS.Character.show(Sagi, SagiPose.neutral, fS.positionPercent(20, 100));
                await fS.Character.show(Sho, ShoPose.neutral, fS.positionPercent(55, 100));
                await fS.Character.show(Rika, RikaPose.neutral, fS.positionPercent(85, 100));

                await fS.Speech.tell(Sagi, "Hi, ich bin Sagi Aoki.");
                await fS.Speech.tell(Rika, "Hey Sho. Ich bin Rika Sato.");
                await fS.Speech.tell(Sho, "Hey, freut mich euch kennenzulernen.");

                //-- -- --  Choice -- -- --  
                
        }
    }
}
