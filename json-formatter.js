const fs = require('node:fs/promises');
const filename=process.argv[2];
function WriteError(message)
{
    console.error(message);
    process.exitCode=1;
}
if(filename)
{
async function ReadJson(filename) {
    const path=`./${filename}`;
    try
    {
    const content=await fs.readFile(path,'utf8');
    try
    {
    const CotentJson=JSON.parse(content);
    console.log(JSON.stringify(CotentJson,null,2));
    }catch(err)
    {
        WriteError(`error: invalid JSON in file: ${filename}`)
    }
    
    }catch(err)
    {
        WriteError(`error: could not read file: ${filename}`);
    }
}
ReadJson(filename);
}
else
    WriteError(`error: please provide a JSON file path`);
