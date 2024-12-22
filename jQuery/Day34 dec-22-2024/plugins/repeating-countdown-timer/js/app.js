$(document).ready(function () {
    let typeInput = "text";
    const date = new Date("2025-01-10T18:00:00");
    const now = new Date();
    let seconds = parseInt((date.getTime() - now.getTime()) / 1000)


    if (!seconds || seconds < 0) {
      alert("Please enter a valid date time");
    } else {
      let days, hours, minutes;
      if (typeInput == "text") {
        days = Math.floor(seconds / (3600 * 24)) - 1;
        hours = 23;
        minutes = 59;
        seconds = 59;
      } else {
        days = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
      }

      const validationPrint = (timeUnit) => {
        return timeUnit < 10 ? `0${timeUnit}` : timeUnit;
      };

      $("#seconds").text(validationPrint(seconds));
      $("#minutes").text(validationPrint(minutes));
      $("#hours").text(validationPrint(hours));
      $("#days").text(validationPrint(days));

      const changeTimeWithLimit = setInterval(() => {
        seconds -= 1;
        $("#seconds").text(validationPrint(seconds));
        if (seconds === 0 && minutes > 0) {
          seconds = 60;
          minutes -= 1;
          $("#minutes").text(validationPrint(minutes));
        }
        if (seconds === 0 && minutes === 0 && hours > 0) {
          seconds = 60;
          minutes = 60;
          hours -= 1;
          $("#hours").text(validationPrint(hours));
        }
        if (seconds === 0 && minutes === 0 && hours === 0 && days > 0) {
          seconds = 60;
          minutes = 60;
          hours = 24;
          days -= 1;
          $("#days").text(validationPrint(days));
        }
        if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
          clearInterval(changeTimeWithLimit);
        }
      }, 1000);

      $(".stop").on("click", function () {
        clearInterval(changeTimeWithLimit);
        $(".limit").css("display", "block");
        $(".repeat").css("display", "block");
        $(this).remove();

        $("#seconds").text("00");
        $("#minutes").text("00");
        $("#hours").text("00");
        $("#days").text("00");
      });
    }
});
