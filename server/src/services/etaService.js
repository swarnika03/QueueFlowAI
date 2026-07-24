// import { spawn } from "child_process";

// export const predictETA = (
//     peopleAhead,
//     activeCounters
// ) => {

//     return new Promise((resolve,reject)=>{

//         const hour=new Date().getHours();

//         const process=spawn(
//             "python",
//             [
//                 "ml/predict.py",
//                 peopleAhead,
//                 activeCounters,
//                 hour
//             ]
//         );

//         let result="";

//         process.stdout.on("data",(data)=>{

//             result+=data.toString();

//         });

//         process.stderr.on("data",(err)=>{

//             console.log(err.toString());

//         });

//         process.on("close",()=>{

//             resolve(Number(result));

//         });

//     });

// }



// 2


// import { spawn } from "child_process";
// import path from "path";

// export const predictETA = (peopleAhead, activeCounters) => {

//     return new Promise((resolve, reject) => {

//         const hour = new Date().getHours();

//         const pythonProcess = spawn(
//             "py",      // use "python" if python command works
//             [
//                 path.join(process.cwd(), "ml", "predict.py"),
//                 peopleAhead,
//                 activeCounters,
//                 hour,
//             ]
//         );

//         let result = "";
//         let error = "";

//         pythonProcess.stdout.on("data", (data) => {

//             result += data.toString();

//         });

//         pythonProcess.stderr.on("data", (data) => {

//             error += data.toString();

//         });

//         pythonProcess.on("error", (err) => {

//             reject(err);

//         });

//         pythonProcess.on("close", (code) => {

//             if (code !== 0) {

//                 return reject(
//                     new Error(error)
//                 );

//             }

//             resolve(
//                 Number(result.trim())
//             );

//         });

//     });

// };


// import { spawn } from "child_process";
// import path from "path";

// export const predictETA = (peopleAhead, activeCounters) => {

//     return new Promise((resolve, reject) => {

//         const hour = new Date().getHours();

//         const scriptPath = path.join(process.cwd(), "ml", "predict.py");

//         const pythonProcess = spawn("py", [
//             scriptPath,
//             String(peopleAhead),
//             String(activeCounters),
//             String(hour),
//         ]);

//         let result = "";
//         let error = "";

//         pythonProcess.stdout.on("data", (data) => {
//             result += data.toString();
//         });

//         pythonProcess.stderr.on("data", (data) => {
//             error += data.toString();
//         });

//         pythonProcess.on("error", (err) => {
//             reject(err);
//         });

//         pythonProcess.on("close", (code) => {

//             if (code !== 0) {
//                 return reject(new Error(error));
//             }

//             const eta = Number(result.trim());

//             if (isNaN(eta)) {
//                 return reject(new Error("Invalid ETA returned by Python."));
//             }

//             resolve(eta);

//         });

//     });

// };


import { spawn } from "child_process";
import path from "path";

export const predictETA = (
    peopleAhead,
    activeCounters,
    queueLength
) => {

    return new Promise((resolve, reject) => {

        const now = new Date();

        const hour = now.getHours();

        const dayOfWeek = now.getDay();

        const scriptPath = path.join(
            process.cwd(),
            "ml",
            "predict.py"
        );

        const pythonProcess = spawn("py", [

            scriptPath,

            String(peopleAhead),

            String(activeCounters),

            String(hour),

            String(dayOfWeek),

            String(queueLength),

        ]);

        let result = "";

        let error = "";

        pythonProcess.stdout.on("data", (data) => {

            result += data.toString();

        });

        pythonProcess.stderr.on("data", (data) => {

            error += data.toString();

        });

        pythonProcess.on("error", (err) => {

            reject(err);

        });

        pythonProcess.on("close", (code) => {

            if (code !== 0) {

                return reject(
                    new Error(error)
                );

            }

            const eta = Number(result.trim());

            if (isNaN(eta)) {

                return reject(
                    new Error(
                        "Invalid ETA returned by Python."
                    )
                );

            }

            resolve(eta);

        });

    });

};