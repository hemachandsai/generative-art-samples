function extractCourseContent(){
    let title = document.querySelector('.clp-lead__title').innerHTML;
    let output= {};
    let subheadings = [];
    document.querySelectorAll('.ud-component--clp--curriculum .section-title-text').forEach((a) => {subheadings.push(a.innerText)});
    let contentContainer = document.querySelectorAll('.lectures-container');
    if(subheadings.length !== contentContainer.length){
        throw('No matching items of equal length found');
    } else {
        contentContainer.forEach((element, index) => {
            output[subheadings[index]] = [];
            let content = element.querySelectorAll('.lecture-container .title');
            content.forEach((text) => {
                if(text.innerText){
                    output[subheadings[index]].push(text.innerText);
                }
            })
        })
    }
    let text = document.createElement('textarea');
    let outText = '';
    outText += title;
    Object.keys(output).map((key, index) => {
        outText += `\n  ${index}.`+ key;
        output[key].map((res, i) => {
            outText += '\n    => ' + res;
            if(i+1 === output[key].length){
                outText += '\n';
            }
        })
    })
    text.innerHTML = outText;
    document.body.appendChild(text);
    text.select();
    let success = document.execCommand('copy');
    document.body.removeChild(text);
    text.innerText.replace(/\n/g, String.fromCharCode(13, 10));
    if(success){
        return "success"
    } else {
        throw("something went wrong while copying");
    }
}
let keyStrokes = [];
document.addEventListener('keydown', (e) => {
    if(keyStrokes[keyStrokes.length] !== e.which){
        keyStrokes.push(event.which);
    }
})
document.addEventListener('keydown', (e) => {
    let keycomb = '';
    keyStrokes.map((key) => {
        keycomb += key;
    })
    if(keycomb === '1689'){
        alert('success');
        extractCourseContent()
    } else if(keycomb.length >= 4){
        keyStrokes = [];
    }
})