import {
    list,
    unpack
} from 'node-unar';

unpack('test.zip', 'out')
    .progress((files) => {
        console.log('files', files);
    })
    .then((results) => {
        console.log('Archive type: ', results.type);
        console.log('Archive files', results.files);
        console.log('Archive output directory', results.directory);
    })
    .catch((err) => {
        console.error(err);
    });