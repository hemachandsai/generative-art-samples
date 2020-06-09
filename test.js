// // function removeCharacter(s, character) {
// //     let regex = new RegExp(character, 'g');
// //     return s.replace(regex, '');
// // }

// // function removeConsecutives(s) {
// //     let prevCharacter = '';
// //     for (let i = 0; i < s.length; i++) {
// //         if (s[i] === prevCharacter) {
// //             s = removeCharacter(s, s[i]);
// //             return removeConsecutives(s); // String changed, so recheck
// //         } else {
// //             prevCharacter = s[i];
// //         }
// //     }
// //     return s;
// // }

// // s = "aasad"
// // let optimizedString = removeConsecutives(s);
// // let uniqueCharacters = [];

// // for (let i = 0; i < optimizedString.length; i++) {
// //     if (!uniqueCharacters.includes(optimizedString[i])) {
// //         uniqueCharacters.push(optimizedString[i]);
// //     }
// // }
// // console.log(optimizedString)
// // let longestString = '';
// // // with 26 letters, choosing 2, we can have a maximum of 325 iterations
// // for (let firstCharPos = 0; firstCharPos < uniqueCharacters.length - 1; firstCharPos++) {
// //     for (let secondCharPos = firstCharPos + 1; secondCharPos < uniqueCharacters.length; secondCharPos++) {
// //         let trialString = optimizedString;
// //         uniqueCharacters.forEach((v, i) => {
// //             if (i !== firstCharPos && i !== secondCharPos) {
// //                 trialString = removeCharacter(trialString, v);
// //             }
// //         });
// //         trialString = removeConsecutives(trialString);
// //         if (trialString.length > longestString.length) {
// //             longestString = trialString;
// //         }
// //     }
// // }
// // console.log(longestString.length);
// // // function main() {
// // //     var allChars = {};
// // //     for (let i =0; i < s.length; i++) {
// // //         allChars[s[i]] = true;
// // //     }

// // //     var letters = Object.keys(allChars);
// // //     var longest = 0;
// // //     for (let i=0; i < letters.length - 1; i++) {
// // //         for (let j=1; j < letters.length; j++) {
// // //             longest = Math.max(longest, findLength(letters[i], letters[j], s));
// // //         }
// // //     }
// // //     console.log(longest);
// // // }

// // // function findLength(a, b, s) {
// // //     if (a === b) {
// // //         return 0;
// // //     } 

// // //     let prev = null;
// // //     let tmp = 0;

// // //     for (let k =0; k < s.length; k++) {
// // //         var that = s[k];

// // //         if (that === a || that === b) {

// // //             if (prev !== null) {
// // //                 if (prev === a && that === a) {
// // //                     return 0;
// // //                 } else if (prev === b && that === b) {
// // //                     return 0;
// // //                 }
// // //             }

// // //             prev = that;
// // //             tmp++;
// // //         }
// // //     }

// // //     return tmp > 1 ? tmp : 0;
// // // }
// // // main()
// // // var string = "aasad"
// // // function removeCharacter(s){
// // //     let reg = new RegExp(`${s}`,'g')         
// // //     string = string.replace(reg,'')
// // // }
// // // function removeConsecutives(){
// // //     for(let i=0; i < string.length - 1; i++){
// // //         if(string[i] === string[i+1]){
// // //             removeCharacter(string[i])
// // //             return removeConsecutives()
// // //         }
// // //     }   
// // // }
// // // function test(){
// // //     for(let i = 0; i < string.length -1 ; i++){
// // //        if(string[i] === string[i+1]){
// // //             removeCharacter(string[i])
// // //             removeConsecutives()
// // //        }
// // //     }
// // //     console.log(string)
// // // }

// // // test()


// // const arr = [10, 12, 15, 21];
// // for (var i = 0; i < arr.length; i++) {
// //  setTimeout(function t(i) {
// //      return () => {
// //          console.log(i);
// //      }
// //  }(i), 1000)
// // }
// function etst(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(1)

// // const arr = [10, 12, 15, 21];
// // for (var i = 0; i < arr.length; i++) {
// //   // pass in the variable i so that each function 
// //   // has access to the correct index
// //   setTimeout(function(i_local) {
// //     return function() {
// //       console.log('The index of this number is: ' + i_local);
// //     }
// //   }(i), 3000);
// }

// function queensMoves(n, k, kr, kc, obs){
//     let co = calculate(kr, kc, n)
//     obs.map((e) => {
//         if(e[0] === kr){
//             if(e[1] > kc){
//                 moves = moves - (n - kc - 1)
//             } else if(el[1] < kc){
//                 moves = moves - kc 
//             }
//         } else if(e[1] === kc){
//             if(e[0] > kr){
//                 moves = moves - (n - kr - 1)
//             } else if(el[1] < kr){
//                 moves = moves - kr 
//             }
//         } else {
//             console.log("e")
//             console.log(co)
//             console.log(findMatch(co,e))
//             if(findMatch(co, e)){
//                 console.log(e)
//                 console.log('fasd')
//              if(e[0] > kr && e[1] > kc){
//                 console.log(1)
//                 co = co.map((e2, i) => {
//                     if(e2[1] >= e[1] && e2[0] >= e[0]){
//                         delete co[i]
//                     }
//                 })
//              } else if (e[0] < kr && e[1] < kc){
//                 console.log(1)

//                 co = co.map((e2, i) => {
//                     if(e2[1] <= e[1] && e2[0] <= e[0k]){
//                         delete co[i]
//                     }
//                 })

//              } else if(e[0] < kr && e[1] > kc){
//                 console.log("1")
//                 co = co.map((e2, i) => {
//                     if(e2[1] >= e[1] && e2[0] <= e[0]){
//                         delete co[i]
//                     }
//                 })
//              } else if(e[0] > kr && e[1] < kc){
//                 console.log(1)
//                 co = co.map((e2, i) => {
//                     if(e2[1] >= e[1] && e2[0] >= e[0]){
//                         delete co[i]
//                     }
//                 })
//              }
//             }
//         }
//     })
//     let moves = (2 * n - 2) + co.length;
//     // console.log(co);
//  }
// function findMatch(ar, el){
//     let res;
//     console.log("checl")
//     console.log(ar);
//     ar.map((el1) => {
//         if(el1[0] === el[0] && el1[1] === el[1]){
//             res = true
//         }
//     })
//     console.log(res);
//     return res ? true : false
//  }
//  function calculate(kr, kc, n){
//    let co = [];

//    //inc both
//    (() => {
//    let a = kr;
//    let b = kc;
//    for(let i = a + 1; i < n + 1; i++){
//        b = b + 1
//       if(b > n){
//         break
//       }else{
//         co.push([i,b])
//       }   
//    }
//    })();

//    //dec both
//    (() => {
//    let a = kr;
//    let b = kc;
//      for(let i = a - 1; i > 0; i--){
//        b = b - 1
//       if(b === 0){
//         break
//       }else{
//                co.push([i,b])
//       }

//    }
//    })();
//     //in row dec col
//    (() => {
//    let a = kr;
//    let b = kc;
//      for(let i = a + 1; i < n + 1; i++){
//        b = b - 1
//       if(b === 0){
//         break
//       }else{
//                       co.push([i,b])

//       }
//    }
//    })();

//     //dev row unc co
//    (() => {
//    let a = kr;
//    let b = kc;
//      for(let i = a - 1; i > 0; i--){
//        b = b + 1
//       if(b > n){
//         break
//       }else{
//            co.push([i,b])
//       }
//    }
//    })();
//    return co;
//  }

//   queensMoves(8,3, 3, 7, [[5,5],[4, 2], [2, 3]])
calculateMoves(5, 4, 3, [
    [5, 5],
    [4, 2],
    [2, 3]
])

function calculateMoves(n, r, c, obs) {

    let obstacles = [];
    obs.map(ob => {
        obstacles.push(ob[0] + '-' + ob[1]);
    });

    //calculate moves on top
    //calculate moves on bottom
    //calculate moves on left
    //calculate moves on right
    //calculate moves on top left
    //calculate moves on botton left
    //calculate moves on top right
    //calculate moves on bottom right
    let moves = 0;
    let temp = [];
    (() => {
        for (let i = r + 1; i <= n; i++) {
            if (obstacles.includes(i + '-' + c)) {
                break;
            } else {
                moves++;
            }
        }

    })();
    (() => {
        for (let i = r - 1; i > 0; i--) {
            if (obstacles.includes(i + '-' + c)) {
                break;
            } else {
                moves++;
            }
        }

    })();

    (() => {
        for (let i = c + 1; i <= n; i++) {
            if (obstacles.includes(r + '-' + i)) {
                break;
            } else {
                moves++;
            }
        }

    })();

    (() => {
        for (let i = c - 1; i > 0; i--) {
            if (obstacles.includes(r + '-' + i)) {
                break;
            } else {
                moves++;
            }
        }
    })();
    (() => {
        let column = c + 1;

        for (let i = r + 1; i <= n; i++) {
            if (obstacles.includes(i + '-' + column) || column > n) {
                break;
            } else {
                column++;
                moves++;
            }
        }
    })();
    (() => {
        let column = c - 1;
        for (let i = r - 1; i > 0; i--) {
            if (obstacles.includes(i + '-' + column) || column === 0) {
                break;
            } else {
                column--;
                moves++;
            }
        }

    })();
    (() => {
        let column = c - 1;
        for (let i = r + 1; i <= n; i++) {
            if (obstacles.includes(i + '-' + column) || column === 0) {
                break;
            } else {
                column--;
                moves++;
            }
        }

    })();
    (() => {
        let column = c + 1;
        for (let i = r - 1; i > 0; i--) {
            if (obstacles.includes(i + '-' + column) || column > n) {
                break;
            } else {
                column++;
                moves++;
            }
        }

    })();
    console.log(moves);
    return moves
}