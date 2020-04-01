
function softwareUpdate(n,o,p){
if (p<10){
    return (p++)
}
else if (o<10){
    return (p=0,o++)
}
    else{
    return (n++,o=0,p=0)
    }
}