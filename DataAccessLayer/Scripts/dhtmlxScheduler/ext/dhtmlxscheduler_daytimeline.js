/*

@license
dhtmlxScheduler.Net v.4.0.2 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) XB Software Ltd.

*/
Scheduler.plugin(function(e){!function(){e._inited_multisection_copies||(e.attachEvent("onEventIdChange",function(e,t){var a=this._multisection_copies;if(a&&a[e]&&!a[t]){var n=a[e];delete a[e],a[t]=n}}),e._inited_multisection_copies=!0),e._register_copies_array=function(e){for(var t=0;t<e.length;t++)this._register_copy(e[t])},e._register_copy=function(e){if(this._multisection_copies){this._multisection_copies[e.id]||(this._multisection_copies[e.id]={});var t=e[this._get_section_property()]
;this._multisection_copies[e.id][t]=e}},e._get_copied_event=function(t,a){if(!this._multisection_copies[t])return null;if(this._multisection_copies[t][a])return this._multisection_copies[t][a];var n=this._multisection_copies[t];if(e._drag_event&&e._drag_event._orig_section&&n[e._drag_event._orig_section])return n[e._drag_event._orig_section];var i=1/0,r=null;for(var o in n)n[o]._sorder<i&&(r=n[o],i=n[o]._sorder);return r},e._clear_copied_events=function(){this._multisection_copies={}},
e._restore_render_flags=function(t){for(var a=this._get_section_property(),n=0;n<t.length;n++){var i=t[n],r=e._get_copied_event(i.id,i[a]);if(r)for(var o in r)0===o.indexOf("_")&&(i[o]=r[o])}};var t=e.createTimelineView;e.createTimelineView=function(a){function n(){var t=new Date(e.getState().date),n=e.date[h+"_start"](t);n=e.date.date_part(n);var i=[],r=e.matrix[h];r.y_unit=i,r.order={};for(var o=0;o<a.days;o++)i.push({key:+n,label:n}),r.order[r.y_unit[o].key]=o,n=e.date.add(n,1,"day")}
function i(e){var t={};for(var a in e)t[a]=e[a];return t}function r(e,t){t.setDate(1),t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(e.getDate())}function o(t){for(var a=[],n=0;n<t.length;n++){var i=d(t[n]);if(e.isOneDayEvent(i))l(i),a.push(i);else{for(var r=new Date(Math.min(+i.end_date,+e._max_date)),o=new Date(Math.max(+i.start_date,+e._min_date)),_=[];+o<+r;){var h=d(i);h.start_date=o,h.end_date=new Date(Math.min(+c(h.start_date),+r)),o=c(o),l(h),a.push(h),_.push(h)}s(_,i)
}}return a}function s(e,t){for(var a=!1,n=!1,i=0,r=e.length;i<r;i++){var o=e[i];a=+o._w_start_date==+t.start_date,n=+o._w_end_date==+t.end_date,o._no_resize_start=o._no_resize_end=!0,a&&(o._no_resize_start=!1),n&&(o._no_resize_end=!1)}}function d(t){var a=e.getEvent(t.event_pid);return a&&a.isPrototypeOf(t)?(t=e._copy_event(t),delete t.event_length,delete t.event_pid,delete t.rec_pattern,delete t.rec_type):t=e._lame_clone(t),t}function l(t){if(!t._w_start_date||!t._w_end_date){
var a=e.date,n=t._w_start_date=new Date(t.start_date),i=t._w_end_date=new Date(t.end_date);t[u]=+a.date_part(t.start_date),t._count||(t._count=1),t._sorder||(t._sorder=0);var r=i-n;t.start_date=new Date(e._min_date),_(n,t.start_date),t.end_date=new Date(+t.start_date+r),n.getTimezoneOffset()!=i.getTimezoneOffset()&&(t.end_date=new Date(t.end_date.valueOf()+6e4*(n.getTimezoneOffset()-i.getTimezoneOffset())))}}function _(e,t){t.setMinutes(e.getMinutes()),t.setHours(e.getHours())}function c(t){
var a=e.date.add(t,1,"day");return a=e.date.date_part(a)}if("days"!=a.render)return void t.apply(this,arguments);var h=a.name,u=a.y_property="timeline-week"+h;a.y_unit=[],a.render="bar",a.days=a.days||7,t.call(this,a),e.templates[h+"_scalex_class"]=function(){},e.templates[h+"_scaley_class"]=function(){},e.templates[h+"_scale_label"]=function(t,a,n){return e.templates.day_date(a)},e.date[h+"_start"]=function(t){return t=e.date.week_start(t),t=e.date.add(t,a.x_step*a.x_start,a.x_unit)},
e.date["add_"+h]=function(t,n){return e.date.add(t,n*a.days,"day")};var p=e._renderMatrix;e._renderMatrix=function(e,t){e&&n(),p.apply(this,arguments)};var v=e.checkCollision;e.checkCollision=function(t){if(t[u]){var t=i(t);delete t[u]}return v.apply(e,[t])},e.attachEvent("onBeforeDrag",function(t,a,n){var i=n.target||n.srcElement,r=e._getClassName(i)
;if("resize"==a)r.indexOf("dhx_event_resize_end")<0?e._w_line_drag_from_start=!0:e._w_line_drag_from_start=!1;else if("move"==a&&r.indexOf("no_drag_move")>=0)return!1;return!0});var g=e["mouse_"+h];e["mouse_"+h]=function(t){var a;this._drag_event&&(a=this._drag_event._move_delta);var n=e.matrix[this._mode];if(n.scrollable&&!t.converted&&(t.converted=1,t.x-=-n._x_scroll,t.y+=n._y_scroll),void 0===a&&"move"==e._drag_mode){var i={y:t.y};e._resolve_timeline_section(n,i)
;var r=t.x-n.dx,o=new Date(i.section);_(e._timeline_drag_date(n,r),o);var s=e._drag_event,d=this.getEvent(this._drag_id);d&&(s._move_delta=(d.start_date-o)/6e4,this.config.preserve_length&&t._ignores&&(s._move_delta=this._get_real_event_length(d.start_date,o,n),s._event_length=this._get_real_event_length(d.start_date,d.end_date,n)))}var t=g.apply(e,arguments);if(e._drag_mode&&"move"!=e._drag_mode){var l=null
;l=e._drag_event&&e._drag_event["timeline-week"+h]?new Date(e._drag_event["timeline-week"+h]):new Date(t.section),t.y+=Math.round((l-e.date.date_part(new Date(e._min_date)))/(6e4*this.config.time_step)),"resize"==e._drag_mode&&(t.resize_from_start=e._w_line_drag_from_start)}else if(e._drag_event){var c=Math.floor(Math.abs(t.y/(1440/e.config.time_step)));c*=t.y>0?1:-1,t.y=t.y%(1440/e.config.time_step);var u=e.date.date_part(new Date(e._min_date))
;u.valueOf()!=new Date(t.section).valueOf()&&(t.x=Math.floor((t.section-u)/864e5),t.x+=c)}return t},e.attachEvent("onEventCreated",function(t,a){return e._events[t]&&delete e._events[t][u],!0}),e.attachEvent("onBeforeEventChanged",function(t,a,n,i){return e._events[t.id]&&delete e._events[t.id][u],!0});var f=e._update_timeline_section;e._update_timeline_section=function(t){var a,n
;this._mode==h&&(a=t.event)&&(n=e._get_copied_event(a.id,e.date.day_start(new Date(a.start_date.valueOf()))))&&(t.event._sorder=n._sorder,t.event._count=n._count);f.apply(this,arguments);a&&n&&(n._count=a._count,n._sorder=a._sorder)};var m=e.render_view_data;e.render_view_data=function(t,a){return this._mode==h&&t&&(t=o(t),e._restore_render_flags(t)),m.apply(e,[t,a])};var b=e.get_visible_events;e.get_visible_events=function(){if(this._mode==h){this._clear_copied_events(),
e._max_date=e.date.date_part(e.date.add(e._min_date,a.days,"day"));var t=b.apply(e,arguments);return t=o(t),e._register_copies_array(t),t}return b.apply(e,arguments)};var x=e.addEventNow;e.addEventNow=function(t){if(e.getState().mode==h)if(t[u]){var a=new Date(t[u]);r(a,t.start_date),r(a,t.end_date)}else{var n=new Date(t.start_date);t[u]=+e.date.date_part(n)}return x.apply(e,arguments)};var y=e._render_marked_timespan;e._render_marked_timespan=function(){
if(e._mode!=h)return y.apply(this,arguments)}}}()});