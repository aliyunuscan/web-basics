function calculateRemainingTime() {
    const now = new Date();
    const endHappyHourTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 0, 0); 
    let timeDifference = endHappyHourTime - now;
    let hours = Math.floor(timeDifference / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    if (hours>=12){
        document.getElementById('countdown').innerHTML = `Remaining time until end of the happy hour: ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
    else{
        document.getElementById('countdown').innerHTML = 'Happy hour time has passed for today';
    }
  }
  calculateRemainingTime();
  setInterval(calculateRemainingTime, 1000);
  
  