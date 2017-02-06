(function() {
    "use strict"

    var DragTracker = {
    	isActivated: false,
    	mouse: {
            xPos: -1,
    		yPos: -1,
    		dragging: false,
    		draggingStart: {x: 0, y: 0},
    		draggingStop: {x: 0, y: 0},
    		draggingOffset: {x: 0, y: 0}
        },
    	activate: function() {
    		var self = this;
    		if (self.isActivated) return;
    		self.isActivated = true;
    		$(document).mousemove(function(e) {
    			self.mouse.xPos = e.pageX;
    			self.mouse.yPos = e.pageY;
    		});
    		$(document).mousedown(function(e) {
    			self.mouse.dragging = true;
    			self.mouse.draggingStart = {x: e.pageX, y: e.pageY};
    		});
    		$(document).mouseup(function(e) {
    			self.mouse.dragging = false;
    			self.mouse.draggingStop = {x: e.pageX, y: e.pageY};
    			self.mouse.draggingOffset = {x: e.pageX - self.mouse.draggingStart.x, y: e.pageY - self.mouse.draggingStart.y};
    			if (self.mouse.draggingObject && self.mouse.draggingObject.endDrag) self.mouse.draggingObject.endDrag(self.mouse.draggingOffset);
    			self.mouse.draggingObject = null;
    		});
    		$(document).mousemove(function(e) {
    			self.mouse.draggingOffset = {x: e.pageX - self.mouse.draggingStart.x, y: e.pageY - self.mouse.draggingStart.y};
    			if (self.mouse.draggingObject && self.mouse.draggingObject.dragging) self.mouse.draggingObject.dragging(self.mouse.draggingOffset);
    		});
    	}
    }

    var AudioElement = {
    	element: null,
    	url: null,
    	audio: null,
    	trackProgressFlag: false,
    	trackLoadingFlag: false,
    	startDragPos: 0,
    	song: null,
    	band: null,
    	stopOthers: function() {
    		var self = this;
    		$('.audio-element').each(function() {
    			if (!$(this).is(self.element)) {
    				var player = $(this).prop('__player');
    				if (player) player.stop();
    			}
    		});
    	},
    	track: function(on) {
    		var self = this;
    		self.trackProgressFlag = true;
    		if (on) {
    			if (!self.audio) return;
    			var defer = function() {
    				if (!self.audio) return;
    				if (!self.trackProgressFlag) return;
    				var pos = (self.progress_element.width() / self.audio.duration) * self.audio.currentTime;
    				self.line_element.width(pos);
    				self.handle_element.css({left: pos});
    				setTimeout(defer, 200);
    			}
    			defer();
    		}
    	},
    	trackLoading: function(on) {
    		var self = this;
    		self.trackLoadingFlag = on;
    		if (on) {
    			if (!self.audio) return;
    			var defer = function() {
    				if (!self.audio) return;
    				if (!self.trackLoadingFlag) return;
    				var veryEnd = 0;
    				for (var i = 0; i < self.audio.buffered.length; i++) {
    					if (self.audio.buffered.end(i) > veryEnd) veryEnd = self.audio.buffered.end(i);
    				}
    				var pos = (self.progress_element.width() / self.audio.duration) * veryEnd;
    				self.loading_line_element.width(pos);
    				if (veryEnd >= self.audio.duration) self.trackLoading(false);
    				setTimeout(defer, 200);
    			}
    			defer();
    		}
    	},
    	play: function() {
    		var self = this;
    		self.stopOthers();
    		self.stop();
    		if (!self.url) return;
    		self.element.addClass('__active');
    		self.btn_element.html('<div class="__ico2"></div>');
    		self.audio = new Audio(self.url);
    		self.audio.onended = function() { self.next(); }
    		self.audio.onloaded = function() { self.next(); }
    		self.audio.load();
    		self.audio.play();
    		self.track(true);
    		self.trackLoading(true);
    	},
    	pause: function() {
    		var self = this;
    		if (!self.audio) return;
    		self.element.removeClass('__active');
    		self.btn_element.html('<div class="__ico1"></div>');
    		self.audio.pause();
    		self.track(false);
    		self.trackLoading(false);
    	},
    	resume: function() {
    		var self = this;
    		if (!self.audio) return;
    		self.element.addClass('__active');
    		self.btn_element.html('<div class="__ico2"></div>');
    		self.audio.play();
    		self.track(true);
    		self.trackLoading(false);
    	},
    	stop: function() {
    		var self = this;
    		if (!self.audio) return;
    		self.element.removeClass('__active');
    		self.btn_element.html('<div class="__ico1"></div>');
    		self.audio.pause();
    		self.audio = null;
    		self.track(false);
    		self.trackLoading(false);
    		self.line_element.width(0);
    	},
    	next: function() {
    		var self = this;
    		self.stop();
    		var nextEl = self.element.next('.audio-element');
    		if (nextEl.length == 1) nextEl.prop('__player').play();
    	},
    	seek: function(sec) {
    		var self = this;
    		if (!self.audio) return;
    		self.audio.currentTime = sec;
    	},
    	dragging: function(offset) {
    		var self = this;
    		self.track(false);
    		var newPos = self.startDragPos + offset.x;
    		if (newPos > self.progress_element.width()) newPos = self.progress_element.width();
    		self.line_element.width(newPos);
    		self.handle_element.css({left: newPos});
    	},
    	endDrag: function(offset) {
    		var self = this;
    		var newPos = self.startDragPos + offset.x;
    		if (newPos > self.progress_element.width()) newPos = self.progress_element.width();
    		var sec = (self.audio.duration / self.progress_element.width()) * newPos;
    		self.seek(parseInt(sec, 10));
    		self.track(true);
    	},
    	init: function() {
    		var self = this;
    		if (!self.url && self.element.attr('data-url')) self.url = self.element.attr('data-url');
    		if (!self.band && self.element.attr('data-band')) self.band = self.element.attr('data-band');
    		if (!self.song && self.element.attr('data-song')) self.song = self.element.attr('data-song');
    		self.element.prop('__player', self);
    		self.element.html('<div class="__btn"><div class="__ico1"></div></div><div class="__title"></div><div class="__progress"><div class="__loading_line"></div><div class="__line"></div><div class="__handle"></div></div>');
    		self.btn_element = self.element.find('div.__btn');
    		self.title_element = self.element.find('div.__title');
    		self.progress_element = self.element.find('div.__progress');
    		self.line_element = self.element.find('div.__line');
    		self.loading_line_element = self.element.find('div.__loading_line');
    		self.handle_element = self.element.find('div.__handle');
    		self.title_element.html(self.band + ' - <b>' + self.song + '</b>');
            self.element.on('click', 'div.__btn', function(e) {
                if (!self.audio) {
    				self.play();
    				return;
    			}
    			if (self.audio.paused) {
    				self.resume();
    				return;
    			}
    			if (!self.audio.paused) {
    				self.pause();
    				return;
    			}
            });
            self.element.on('click', 'div.__progress', function(e) {
                var sec = parseInt((self.audio.duration / self.progress_element.width()) * e.offsetX, 10);
        		if (self.audio) self.seek(sec);
            });
    		self.handle_element.mousedown(function(e) {
    			self.track(false);
    			self.startDragPos = (self.progress_element.width() / self.audio.duration) * self.audio.currentTime;
    			DragTracker.mouse.draggingObject = self;
    		});
    	},
    	new: function(element, args) {
    		DragTracker.activate();
    		var player = Object.create(AudioElement);
    		player.element = element;
    		for (key in args) player[key] = args[key];
    		player.init();
    	}
    };

    (function($) {
        $.fn.audioelement = function() {
            return this.each(function() {
                AudioElement.new($(this));
            });
        };
    }(jQuery));
})();
