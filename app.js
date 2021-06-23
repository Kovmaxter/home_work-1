const fs = require('fs');

const dir18 = `${__dirname}/dec-2020/18:00`;
const dir18temp = `${__dirname}/dec-2020/18:00temp`;
const dir20 = `${__dirname}/dec-2020/20:00`;

fs.readdir(dir18, (err, files) => {
    if (err) {
        console.log(err);
        return
}
    fs.mkdir(dir18temp,{ recursive: true } ,(err) => {
        if (err) {
            console.log(err);
        }
    });
    files.forEach(file => {
        fs.rename(`${__dirname}/dec-2020/18:00/${file}`, `${__dirname}/dec-2020/18:00temp/${file}`,(err, fileStatistic) => {
            // if (err) {
            //     console.log(err);
            // }
            fs.readdir(dir20, (err, files) => {
                if (err) {
                    console.log(err);
                    return
                }
                files.forEach(file => {
                    fs.rename(`${__dirname}/dec-2020/20:00/${file}`, `${__dirname}/dec-2020/18:00/${file}`,(err, fileStatistic) => {
                        // if (err) {
                        //     console.log(err);
                        // }
                        fs.readdir(dir18temp, (err, files) => {
                            if (err) {
                                console.log(err);
                                return
                            }
                            files.forEach(file => {
                                fs.rename(`${__dirname}/dec-2020/18:00temp/${file}`, `${__dirname}/dec-2020/20:00/${file}`,(error, fileStatistic) => {
                                    // if (error) {
                                    //     console.log(error);
                                    // }
                                    fs.rmdir(dir18temp, {recursive: true}, (err) =>{
                                        if (err) {
                                            console.log(err);
                                        }
                                    })
                                });
                            })
                        })
                    });
                })
            })
        });
    })
})




