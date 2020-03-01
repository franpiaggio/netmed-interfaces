const dateStart = document.getElementById('start');
const dateEnd = document.getElementById('end');

const picker = new Lightpick({
    field: document.getElementById('startInput'),
    secondField: document.getElementById('endInput'),
    singleDate: false,
    onSelect: function(start, end){
        dateStart.value = moment(start).format('YYYY-MM-DD');
        dateEnd.value = moment(end).format('YYYY-MM-DD');
    }
});

const mobilePicker = new Lightpick({
    field: document.getElementById('mobileRange'),
    singleDate: false,
    onSelect: function(start, end){
        dateStart.value = moment(start).format('YYYY-MM-DD');
        dateEnd.value = moment(end).format('YYYY-MM-DD');
    }
});