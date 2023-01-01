 namespace Template{
    export async function InKlasseErste(): fS.SceneReturn {
        // Sagi und Rika sind im Klassenzimmer
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

        fS.Location.show(location.classroom);
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


        

    }


 }