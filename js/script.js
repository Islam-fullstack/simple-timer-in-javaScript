window.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.countdown__item > h4');
    let timeFinish = document.querySelector('.countdown');

    let date = new Date(2022, 9, 18, 16, 38, 55).getTime();

    function getCountdownDate() {
        const now = new Date().getTime();
        const distance = date - now;

        /*
1 second = 1000ms;
1 minute = 60 sec;
1 hourse = 60 minute;
1 day = 24 h;
1 month = 30day;
1 year = 12 month;
        */

        const oneSecond = 1000;
        const oneMinute = 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneDay = 24 * 60 * 60 * 1000;
        const oneMonth = 30 * 24 * 60 * 60 * 1000;
        const oneYear = 12 * 30 * 24 * 60 * 60 * 1000;

        const y = Math.floor(distance / oneYear);
        const m = Math.floor((distance % oneYear) / oneMonth);
        const d = Math.floor((distance % oneMonth) / oneDay);
        const h = Math.floor((distance % oneDay) / oneHour);
        const min = Math.floor((distance % oneHour) / oneMinute);
        const sec = Math.floor((distance % oneMinute) / oneSecond);


        const arr = [y, m, d, h, min, sec];

        if (distance < 0) {
            timeFinish.innerHtml = `
                <h1 class="end">Time Finished!</h1>
            `
        }

        items.forEach((item, i) => {
            item.textContent = arr[i];
        })



    }

    getCountdownDate();

    setInterval(getCountdownDate, 1000);

});