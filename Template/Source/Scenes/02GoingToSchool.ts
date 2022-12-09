namespace Template {
    export async function goingToSchool(): fS.SceneReturn {
        console.log("Going to School starting");

        fS.Speech.hide();
        await fS.Location.show(location.alley);
        await fS.update();

        await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
        await fS.Character.show(Rika, SagiPose.neutral, fS.positions.bottomcenter);
        await fS.Speech.tell(Sagi, "Na, da bist du ja endlich. Komm, sonst kommen wir zu spät!");
        await fS.Speech.tell(Rika, "Tut mir leid, zurzeit schlafe ich wirklich schlecht. Ich frage mich wirklich, woran das liegt …");
        await fS.Speech.tell(Sagi, "Vielleicht bist du ja nur nervös, du weißt ja heute kommt der neue Schüler. Ich frage mich, wie er drauf ist.");
        await fS.Speech.tell(Sagi, "Hey, dann bekommst du ja vielleicht auch mal einen Freund.");
        
        // TODO: *** LEICHTER BILD WACKELN***
        await fS.Speech.tell(Rika, "Ugh...");
        //await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
        //await fS.update();
        await fS.Speech.tell(Sagi, "Was ist los?!");
        await fS.Speech.tell(Rika, "Ich weiß nicht … irgendwie habe ich gerade ganz schlimme Kopfschmerzen bekommen. Hoffentlich ist es gleich vorbei.");
        await fS.Speech.tell(Sagi, "Hmm … du solltest wirklich mehr trinken, Rika.");

        // Sagi und Rika sind auf dem Campus
        await fS.Location.show(location.uni);
        await fS.update();

        // TODO: *** GLOCKE KLINGELT SOUND ***
        await fS.Character.show(Sagi, SagiPose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(Sagi, "Komm schnell, wir schaffen es gerade so rechtzeitig.");

        // Sagi und Rika sind im Klassenzimmer
        await fS.Location.show(location.classroom);
        await fS.update();

        await fS.Character.show(Teacher, TeacherPose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(Teacher, "Guten Morgen. Bevor wir heute mit dem Unterricht anfangen, möchte ich euch zunächst euren neuen Mitschüler vorstellen.");
        await fS.Character.show(Sho, ShoPose.neutral, fS.positions.bottomcenter);
        await fS.update();
        await fS.Speech.tell(Sho, "Hi, ich bin Sho Rai. Freut mich, euch kennenzulernen.");

        // TODO: ***GETUSCHEL VON ANDEREN SCHUELERN SOUND ***
        await fS.Speech.tell(Teacher, "Okay, beruhigt euch wieder. Ihr könnt in der Pause noch mal miteinander reden.");

    

    }
}
