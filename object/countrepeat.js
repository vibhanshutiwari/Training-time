
const object = [{
    name: 'shubham',
    id: 1,
},
{
    name: 'manish',
    id: 2,
},
{
    name: 'shubham',
    id: 1.
}
,
{
    name: 'shubham',
    id: 1.
}
];


const checkRepeat = () => {
    let blank = [];
    object.filter(num => {
        var found = blank.filter(ob => num.id === ob.id && num.name === ob.name);
        if (found.length > 0) {
            //dulicate
        }
        else {
            blank.push(num);
        }
    });
    return object.length - blank.length;
}

console.log(`dulicates: ${checkRepeat()}`);