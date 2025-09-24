

function sleep(ms)
{
    return(
        new Promise(function(resolve, reject)
        {
            setTimeout(function() { resolve(); }, ms);
        })
    );
}


sleep(1000).then(function()
{
    console.log('Did it work?!')
    sleep(1000).then(function()
    {
        console.log('Yeah, I think so')
    })
})

console.log("is it running?");
sleep(500000);

console.log("are you sure?");
