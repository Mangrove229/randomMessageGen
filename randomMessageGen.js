


let instrumentArray = ['quarter-size pocket trumpet', 'silde trombone', 'kink-necked alto sax', 'old rusted-out tenor', 'old hambone'];
let verbPhraseArray1 = ['plays the high "C" all night long', 'butchers the dorian mode', 'relies on the blues scale', 'loses the form', 'trips over the changes', 'plays totally far out', 'sings', 'wails'];
let verbPhraseArray2 = [', as he plays his heart out', ', who hangs on for dear life', ', who just wishes for it all to end', ' as he tries to hit the high "C" all night long', ', who dreams only of a hot meal'];
let adverbArray1 = [' surreptitiously', ' flagrantly', ', like a bastard,', ' sheepishly', ' buoyantly', ' sloppily', ', much like a mule,', ' gracelessly', ' skillfully'];
let adverbArray2 = ['is too much for', 'is a channel to the heavens for', 'fights against', 'is too cruel a mistress for', 'moans for'];
let prepPhraseArray = ['Even despite his many mental handicaps,', 'In a drugged-out stupor,', 'However gay he may be,', 'A hideous sight to behold,', 'Nothing short of miraculously,']


const msgGen = (input) =>{
    if(typeof input === 'string'){

        let msgFormPicker = Math.floor(Math.random() * 2);
        console.log(msgFormPicker);
        if(msgFormPicker === 0){
            let verbPicker = Math.floor(Math.random() * 8);
            let verb = verbPhraseArray1[verbPicker];
            let advPicker = Math.floor(Math.random() * 9);
            let adverb = adverbArray1[advPicker];
            let instrumentPicker = Math.floor(Math.random() * 5);
            let instrument = instrumentArray[instrumentPicker];
            console.log(`${input}${adverb} ${verb} on the ${instrument}.`);
        } else if(msgFormPicker === 1){
            let prepPhrasePicker = Math.floor(Math.random() * 5);
            let prepPhrase = prepPhraseArray[prepPhrasePicker];
            let verbPicker = Math.floor(Math.random() * 5);
            let verb = verbPhraseArray2[verbPicker];
            let advPicker = Math.floor(Math.random() * 5);
            let adverb = adverbArray2[advPicker];
            let instrumentPicker = Math.floor(Math.random() * 5);
            let instrument = instrumentArray[instrumentPicker];
            console.log(`${prepPhrase} the ${instrument} ${adverb} ${input}${verb}.`)
        };
    } else {
        console.log('Please enter a string.');
    }    
}

msgGen('Shee Bop Squarterly');





