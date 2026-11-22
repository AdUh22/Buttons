const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let Running = false;

function start()
{
    if(!Running)
    {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        Running = true
    }

}

function stop()
{
    if(Running)
    {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        Running = false;
    }
}

function reset()
{
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    Running = false;
    display.textContent = "00:00:00:00"
}

function update()
{
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milisec = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milisec = String(milisec).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milisec}`
}