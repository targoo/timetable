
fcViews.resourceDay = ResourceDayView;

function ResourceDayView(element, calendar) {
	var t = this;
	
	// exports
	t.render = render;
	
	// imports
	ResourceView.call(t, element, calendar, 'resourceDay');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDates = calendar.formatDates;
	
	function render() {
		var date = new Date();
		var start = addMinutes(cloneDate(date, true),opt('minTime')*60);
		var end = addMinutes(cloneDate(start), (opt('maxTime')-opt('minTime'))*60);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		t.title = ''
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;

		var cols = Math.round((visEnd - visStart) / 1000 / 60 / opt('slotMinutes'));

		renderBasic(opt('days').length, opt('days').length, cols, false);
	}
	
	
}
