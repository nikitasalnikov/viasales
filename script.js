$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', { el: this.el, multiple: this.multiple },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),
            //this is the ul.submenuItems
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            //show only one menu at the same time
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
    }

    var accordion = new Accordion($('.accordion-menu'), false);
});


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1 mar', '', '', '', '5 mar', '', '', '', '', '10 mar', '', '', '', '', '15 mar', '', '', '', '', '20 mar', '', '', '', '', '25 mar', '', '', '', '', '30 mar'],
        datasets: [{
            fill: true,
            data: [210, 220, 200, 190, 100, 110, 200, 330, 310, 170, 173, 100, 105, 90, 120, 240, 110, 305, 285, 310, 510, 410, 400, 405, 460, 455, 560, 470, 430],
            backgroundColor: [
                'rgba(246, 164, 106, 0.54)',
                'rgba(246, 164, 106, 0)',
            ],
            borderColor: 'rgba(246, 164, 106, 1)',
            tension: 0.5,

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

/*events progressbar*/
const circle = document.querySelector('.unit__events');
const el = document.querySelector('.text');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;

    if (percent === 100) {
        circle.style.stroke = "#27AE60";
        el.style.color = "#27AE60";

    }
    el.innerHTML = percent + '%';

}

setProgress(100);
/***************/


/*******group1 progressbar*******/
const circle1 = document.querySelector('.unit__group1');
const el1 = document.querySelector('.text1');
const radius1 = circle1.r.baseVal.value;
const circumference1 = 2 * Math.PI * radius1;

circle1.style.strokeDasharray = `${circumference1} ${circumference1}`;
circle1.style.strokeDashoffset = circumference1;

function setProgress1(percent1) {
    const offset1 = circumference1 - percent1 / 100 * circumference1;
    circle1.style.strokeDashoffset = offset1;

    if (percent1 === 100) {
        circle1.style.stroke = "#27AE60";
        el1.style.color = "#27AE60";
    }
    el1.innerHTML = percent1 + '%';
}

setProgress1(44);

/*************************/


/*******d2d progressbar*******/
const circle2 = document.querySelector('.unit__d2d');
const el2 = document.querySelector('.text2');
const radius2 = circle2.r.baseVal.value;
const circumference2 = 2 * Math.PI * radius2;

circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
circle2.style.strokeDashoffset = circumference2;

function setProgress2(percent2) {
    const offset2 = circumference2 - percent2 / 100 * circumference2;
    circle2.style.strokeDashoffset = offset2;

    if (percent2 === 100) {
        circle2.style.stroke = "#27AE60";
        el2.style.color = "#27AE60";
    }
    el2.innerHTML = percent2 + '%';
}

setProgress2(35);

/*************************/

/*******telemarketing progressbar*******/
const circle3 = document.querySelector('.unit__telemarketing');
const el3 = document.querySelector('.text3');
const radius3 = circle3.r.baseVal.value;
const circumference3 = 2 * Math.PI * radius3;

circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
circle3.style.strokeDashoffset = circumference3;

function setProgress3(percent3) {
    const offset3 = circumference3 - percent3 / 100 * circumference3;
    circle3.style.strokeDashoffset = offset3;

    if (percent3 === 100) {
        circle3.style.stroke = "#27AE60";
        el3.style.color = "#27AE60";
    }
    el3.innerHTML = percent3 + '%';
}

setProgress3(23);

/*************************/



/*******group3 progressbar*******/
const circle4 = document.querySelector('.unit__group3');
const el4 = document.querySelector('.text4');
const radius4 = circle4.r.baseVal.value;
const circumference4 = 2 * Math.PI * radius4;

circle4.style.strokeDasharray = `${circumference4} ${circumference4}`;
circle4.style.strokeDashoffset = circumference4;

function setProgress4(percent4) {
    const offset4 = circumference4 - percent4 / 100 * circumference4;
    circle4.style.strokeDashoffset = offset4;

    if (percent4 === 100) {
        circle4.style.stroke = "#27AE60";
        el4.style.color = "#27AE60";
    }
    el4.innerHTML = percent4 + '%';
}

setProgress4(12);

/*************************/

document.querySelector('.sort__links').addEventListener('click', function() {
    document.querySelector('.sort__links-hidden').classList.toggle('active');
});

document.querySelector('.courses__links').addEventListener('click', function() {
    document.querySelector('.courses__links-hidden').classList.toggle('active');
});

document.querySelector('.users__lists').addEventListener('click', function() {
    document.querySelector('.users__lists-hidden').classList.toggle('active');
});

document.querySelector('.users__links').addEventListener('click', function() {
    document.querySelector('.users__links-hidden').classList.toggle('active');
});

document.querySelector('.courses__lists').addEventListener('click', function() {
    document.querySelector('.courses__lists-hidden').classList.toggle('active');
});

document.querySelector('.sort__lists').addEventListener('click', function() {
    var divs = document.querySelectorAll('.sort__lists-hidden, .sort__lists');
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.toggle('active');
    }
});