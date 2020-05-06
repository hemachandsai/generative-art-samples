var http = require("request");
var fs = require("fs");
var utils = require("util");
var path = require("path");
// var stream = require('stream');

let promiseMaker = utils.promisify(http);
let links = new Set();
let destinationPath = "";
let currentIndex = 0;
let downloaded = new Set();
let suffix = "";
let files;

function main() {
    // let links="";
    // document.querySelectorAll(".post-container li.post.photo").forEach(li => links  += li.getAttribute("data-image-retina") + '\n')
    
    // let links="";
    // document.querySelectorAll("article.photo img").forEach(img => links  += img.getAttribute("src") + '\n');
        
    // let links="";
    // document.querySelectorAll("section.posts img").forEach(img => links  += img.getAttribute("src") + '\n');
    console.time("timeTaken");
    validateRequest();
    readLinks();
    createRequiredDirs();
    // readExistingFiles();
    recursiveDownloadFiles(0, 50);
}

function validateRequest() {
    let args = process.argv;
    if (args.indexOf("--name") < 0) {
        console.log("Need --name argument to save the files under artist name to a location. Please try back passing it");
        process.exit(1);
    }
    if (args.indexOf("--dest") < 0) {
        console.log("Need --dest argument to save the files to a location. Please try back passing it");
        process.exit(1);
    } else {
        destinationPath = path.join(path.resolve(args[args.indexOf("--dest") + 1]), "generative-art", args[args.indexOf("--name") + 1]);
    }
    console.log(`Saving files under path ${destinationPath}`);
}

function createRequiredDirs() {
    fs.mkdirSync(destinationPath, {
        recursive: true
    });
}

function readLinks() {
    let fileData = fs.readFileSync("./tumblr-data.txt", "utf-8");
    let duplicateData = "";
    fileData.split("\n").map((link) => {
        if (links.has(link)) {
            duplicateData += link + "\n";
        } else if(link){
            links.add(link.replace("\r", "").replace("\n",""));
        }
    });
    links = [...links];
    if (duplicateData) {
        console.log(`Duplicate links that exists: \n ${duplicateData}`);
    }
    console.log(links.length);
}

function readExistingFiles() {
    let list = fs.readdirSync(destinationPath);
    files = new Set(list);
}

function recursiveDownloadFiles(start, end) {
    if (links.length === 0) {
        console.log("Exiting as no link data found under the file...");
        return;
    }
    for (let i = start; i < end; i++) {
        let file = links[i].split("/");
        let fileName = file[file.length - 1].replace("gifv", "gif");
        currentIndex++;
        if (downloaded.has(links[i])) {
            console.log(`Duplicate occured for link ${links[i]} ar index ${i}`, start, end);
            process.exit(1);
        }
        if (i === links.length) {
            return;
        }
        // if(files.has(fileName)){
        //     currentIndex++;
        //     process.stdout.clearLine();
        //     process.stdout.cursorTo(0);
        //     process.stdout.write(`Alreay have a duplicate ${fileName}`);
        // }

        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        suffix.length < 10 ? suffix += "." : suffix = ".";
        process.stdout.write(`Downloading file with link ${links[i]} currentIndex ${currentIndex} ${suffix}`);
        promiseMaker({
            method: "GET",
            url: links[i],
            encoding: "binary"
        }).then((res, err) => {
            if (err) {
                console.log(`Error while trying to download file with link ${links[i]}:\n ${err}`)
            } else {
                if (currentIndex !== links.length) {
                    recursiveDownloadFiles(currentIndex, currentIndex + 1);
                }
                if (res.statusCode === 200) {
                    fs.writeFile(path.join(destinationPath, fileName), res.body, {
                        encoding: "binary"
                    }, (err) => {
                        downloaded.add(links[i]);
                        if (err) {
                            console.log(err)
                            console.log(`Error while trying to save file with link ${links[i]}:\n ${err}`);
                        }
                    });
                    // let readStream = new stream.PassThrough({encoding: "binary"});
                    // readStream.push(res.body);
                    // readStream.push(null);
                    // readStream.pipe(res.body);
                    // let writeStream = fs.createWriteStream(path.join(destinationPath, fileName), {encoding: "binary"});
                    // writeStream.on("open", () => {
                    // readStream.pipe(writeStream);
                    // })
                } else {
                    if(links[i].match(/_1280/)){
                        console.log("Replaced with 500")
                        links.push(links[i].replace("_1280", "_500"));
                    } else if(links[i].match(/s1280x1920/)){
                        console.log("Replaced with 500x750")
                        links.push(links[i].replace("s1280x1920", "s500x750"));
                    }
                    console.log(`Error while trying to download file with link ${links[i]} statudecode: ${res.statusCode}\n`)
                }
            }
        }).catch((e) => {
            console.log(`Error while downloading file: \n${e}`);
            currentIndex--;
            recursiveDownloadFiles(i, i + 1);
        })
    }
}

process.on("SIGINT", () => {
    process.exit();
})
process.on('exit', () => {
    console.log(`\n`);
    let timeTaken = console.timeEnd("timeTaken");
})


main();