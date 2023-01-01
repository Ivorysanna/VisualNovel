namespace Template {
    export async function CarCrash(): fS.SceneReturn {
        console.log("Starting Car Crash");
        fS.Speech.hide();

        await fS.Location.show(location.streetCity);
        await fS.update();

        await fS.Speech.tell(Rika, "So, hier um die Ecke ist auch schon das Einkaufszentrum. Wenn du möchtest, können wir uns hier am Wochenende auf einen Bubble Tea treffen und vielleicht…");

        //TODO: *** AUTO HUPEN UND REIFEN QUIETSCHEN EINBAUEN ***
        //TODO: *** SZENENBILD ANZEIGEN AUTO ÜBERFAHREN***  
    }
}